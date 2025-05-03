
import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import { Doctor as MockDoctor, mockDoctors } from '../data/mockDoctors';

const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/medfinder';

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Doctor Schema
const doctorSchema = new mongoose.Schema({
  name: { type: String, required: true },
  specialty: { type: String, required: true },
  phone: String,
  email: String,
  experience: { type: Number, default: 0 },
  fees: { type: Number, default: 500 },
  ratings: { type: Number, default: 4.0 },
  reviews: { type: Number, default: 0 },
  location: String,
  education: [String],
  languages: [String],
  slots: [String],
  createdAt: { type: Date, default: Date.now }
});

const DoctorModel = mongoose.model('Doctor', doctorSchema);

// In-memory database (for fallback purposes)
let inMemoryDoctors = [...mockDoctors];

// POST: Add a new doctor
app.post('/api/doctors', async (req, res) => {
  try {
    const newDoctor = req.body;
    
    // Basic validation
    if (!newDoctor.name || !newDoctor.specialty) {
      return res.status(400).json({ error: 'Name and specialty are required' });
    }
    
    // Use MongoDB if connected
    try {
      const doctorModel = new DoctorModel(newDoctor);
      const savedDoctor = await doctorModel.save();
      
      return res.status(201).json({
        message: 'Doctor added successfully',
        doctor: savedDoctor
      });
    } catch (dbError) {
      console.warn('Failed to save to MongoDB, using in-memory fallback', dbError);
      
      // Fallback to in-memory if MongoDB fails
      const doctorWithId = {
        ...newDoctor,
        id: `${Date.now()}`
      };
      
      inMemoryDoctors.push(doctorWithId);
      
      return res.status(201).json({
        message: 'Doctor added successfully (in-memory fallback)',
        doctor: doctorWithId
      });
    }
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// GET: List doctors with filters and pagination
app.get('/api/doctors', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const experience = parseInt(req.query.experience as string) || 0;
    const fees = parseInt(req.query.fees as string) || 0;
    const availability = (req.query.availability as string) || 'any';
    const specialty = (req.query.specialty as string) || '';
    const name = (req.query.name as string) || '';

    // Try to use MongoDB first
    try {
      const query: any = {};
      
      if (experience > 0) {
        query.experience = { $gte: experience };
      }
      
      if (specialty) {
        query.specialty = { $regex: specialty, $options: 'i' };
      }
      
      if (name) {
        query.name = { $regex: name, $options: 'i' };
      }
      
      if (fees > 0) {
        if (fees === 500) {
          query.fees = { $lte: 500 };
        } else if (fees === 750) {
          query.fees = { $gt: 500, $lte: 750 };
        } else if (fees === 1000) {
          query.fees = { $gt: 750, $lte: 1000 };
        } else if (fees === 1001) {
          query.fees = { $gt: 1000 };
        }
      }
      
      const total = await DoctorModel.countDocuments(query);
      const doctors = await DoctorModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize);
      
      return res.json({
        doctors,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize)
      });
    } catch (dbError) {
      console.warn('Failed to query MongoDB, using in-memory fallback', dbError);
      
      // Fallback to in-memory filtering if MongoDB fails
      let filteredDoctors = [...inMemoryDoctors];
      
      // Apply filters
      if (experience > 0) {
        filteredDoctors = filteredDoctors.filter(doctor => doctor.experience >= experience);
      }
      
      if (specialty) {
        filteredDoctors = filteredDoctors.filter(doctor => 
          doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
        );
      }
      
      if (name) {
        filteredDoctors = filteredDoctors.filter(doctor => 
          doctor.name.toLowerCase().includes(name.toLowerCase())
        );
      }
      
      if (fees > 0) {
        if (fees === 500) {
          filteredDoctors = filteredDoctors.filter(doctor => doctor.fees <= 500);
        } else if (fees === 750) {
          filteredDoctors = filteredDoctors.filter(doctor => doctor.fees > 500 && doctor.fees <= 750);
        } else if (fees === 1000) {
          filteredDoctors = filteredDoctors.filter(doctor => doctor.fees > 750 && doctor.fees <= 1000);
        } else if (fees === 1001) {
          filteredDoctors = filteredDoctors.filter(doctor => doctor.fees > 1000);
        }
      }
      
      // Calculate pagination
      const total = filteredDoctors.length;
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const paginatedDoctors = filteredDoctors.slice(start, end);
      
      // Send response
      return res.json({
        doctors: paginatedDoctors,
        total,
        page,
        pageSize,
        totalPages: Math.ceil(total / pageSize)
      });
    }
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Start the server
if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;
