
import express from 'express';
import cors from 'cors';
import { Doctor, mockDoctors } from '../data/mockDoctors';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// In-memory database (for demo purposes)
let doctors = [...mockDoctors];

// GET: List doctors with filters and pagination
app.get('/api/doctors', (req, res) => {
  try {
    const page = parseInt(req.query.page as string) || 1;
    const pageSize = parseInt(req.query.pageSize as string) || 10;
    const experience = parseInt(req.query.experience as string) || 0;
    const fees = parseInt(req.query.fees as string) || 0;
    const availability = (req.query.availability as string) || 'any';
    const specialty = (req.query.specialty as string) || '';

    let filteredDoctors = [...doctors];
    
    // Apply filters
    if (experience > 0) {
      filteredDoctors = filteredDoctors.filter(doctor => doctor.experience >= experience);
    }
    
    if (specialty) {
      filteredDoctors = filteredDoctors.filter(doctor => 
        doctor.specialty.toLowerCase().includes(specialty.toLowerCase())
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
    res.json({
      doctors: paginatedDoctors,
      total,
      page,
      pageSize,
      totalPages: Math.ceil(total / pageSize)
    });
  } catch (error) {
    console.error('Error fetching doctors:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// POST: Add a new doctor
app.post('/api/doctors', (req, res) => {
  try {
    const newDoctor: Omit<Doctor, 'id'> = req.body;
    
    // Basic validation
    if (!newDoctor.name || !newDoctor.specialty) {
      return res.status(400).json({ error: 'Name and specialty are required' });
    }
    
    // Generate a unique ID
    const doctorWithId: Doctor = {
      ...newDoctor,
      id: `${Date.now()}`
    };
    
    // Add to our 'database'
    doctors.push(doctorWithId);
    
    // Send response
    res.status(201).json(doctorWithId);
  } catch (error) {
    console.error('Error adding doctor:', error);
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
