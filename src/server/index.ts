
import express from 'express';
import cors from 'cors';
import { Doctor, mockDoctors } from '../data/mockDoctors';
import mongoose from 'mongoose';

// Initialize Express app
const app = express();
app.use(cors());
app.use(express.json());

// MongoDB Schema for Doctor
const DoctorSchema = new mongoose.Schema({
  id: String,
  name: String,
  specialty: String,
  experience: Number,
  ratings: Number,
  reviews: Number,
  location: String,
  fees: Number,
  education: [String],
  languages: [String],
  slots: [String],
  image: String,
});

// Create a model
const DoctorModel = mongoose.model('Doctor', DoctorSchema);

// In-memory database fallback (when MongoDB is not available)
let inMemoryDoctors = [...mockDoctors];

// Connect to MongoDB or fallback to in-memory
const connectToMongoDB = async () => {
  try {
    // This connection string should be in an env variable
    const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/medfinder';
    await mongoose.connect(uri);
    console.log('Connected to MongoDB');
    
    // Initialize database with mock doctors if empty
    const count = await DoctorModel.countDocuments({});
    if (count === 0) {
      await DoctorModel.insertMany(mockDoctors);
      console.log('Initialized MongoDB with mock doctors');
    }
    
    return true;
  } catch (error) {
    console.error('Failed to connect to MongoDB, falling back to in-memory database', error);
    return false;
  }
};

// API endpoints
// GET /api/doctors - Get all doctors with filtering and pagination
app.get('/api/doctors', async (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    
    // Extract filter parameters
    const filters = {
      experience: req.query.experience ? parseInt(req.query.experience as string) : undefined,
      fees: req.query.fees ? parseInt(req.query.fees as string) : undefined,
      availability: req.query.availability as string,
      specialty: req.query.specialty as string,
      name: req.query.name as string,
    };
    
    let doctors;
    let total;
    
    if (mongoose.connection.readyState === 1) {
      // Connected to MongoDB
      const query: any = {};
      
      if (filters.experience) {
        query.experience = { $gte: filters.experience };
      }
      
      if (filters.specialty) {
        query.specialty = { $regex: filters.specialty, $options: 'i' };
      }
      
      if (filters.name) {
        query.name = { $regex: filters.name, $options: 'i' };
      }
      
      if (filters.fees) {
        if (filters.fees === 500) {
          query.fees = { $lte: 500 };
        } else if (filters.fees === 750) {
          query.fees = { $gt: 500, $lte: 750 };
        } else if (filters.fees === 1000) {
          query.fees = { $gt: 750, $lte: 1000 };
        } else if (filters.fees === 1001) {
          query.fees = { $gt: 1000 };
        }
      }
      
      total = await DoctorModel.countDocuments(query);
      doctors = await DoctorModel.find(query)
        .skip((page - 1) * pageSize)
        .limit(pageSize);
    } else {
      // Fallback to in-memory
      let results = [...inMemoryDoctors];
      
      if (filters.experience) {
        results = results.filter(doctor => doctor.experience >= filters.experience);
      }
      
      if (filters.specialty) {
        results = results.filter(doctor => 
          doctor.specialty.toLowerCase().includes(filters.specialty?.toLowerCase() || '')
        );
      }
      
      if (filters.name) {
        results = results.filter(doctor => 
          doctor.name.toLowerCase().includes(filters.name?.toLowerCase() || '')
        );
      }
      
      if (filters.fees) {
        if (filters.fees === 500) {
          results = results.filter(doctor => doctor.fees <= 500);
        } else if (filters.fees === 750) {
          results = results.filter(doctor => doctor.fees > 500 && doctor.fees <= 750);
        } else if (filters.fees === 1000) {
          results = results.filter(doctor => doctor.fees > 750 && doctor.fees <= 1000);
        } else if (filters.fees === 1001) {
          results = results.filter(doctor => doctor.fees > 1000);
        }
      }
      
      total = results.length;
      doctors = results.slice((page - 1) * pageSize, page * pageSize);
    }
    
    const totalPages = Math.ceil(total / pageSize);
    
    res.json({
      doctors,
      total,
      page,
      pageSize,
      totalPages,
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST /api/doctors - Add a new doctor
app.post('/api/doctors', async (req, res) => {
  try {
    const doctorData = req.body;
    const newDoctor = { 
      ...doctorData,
      id: `${Date.now()}` // Generate a unique ID
    };
    
    if (mongoose.connection.readyState === 1) {
      // Connected to MongoDB
      const doctor = new DoctorModel(newDoctor);
      await doctor.save();
    } else {
      // Fallback to in-memory
      inMemoryDoctors.push(newDoctor);
    }
    
    res.status(201).json(newDoctor);
  } catch (error) {
    console.error('Error adding doctor:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Initialize server
const PORT = process.env.PORT || 5000;

const startServer = async () => {
  // Try to connect to MongoDB first
  await connectToMongoDB();
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
};

// Export the startServer function and app for testing/external usage
export { startServer, app };

// Auto-start the server if this file is executed directly
if (require.main === module) {
  startServer();
}
