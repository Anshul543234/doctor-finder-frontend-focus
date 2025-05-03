
import { Doctor, mockDoctors } from "@/data/mockDoctors";

// Simulates a backend API for doctor listing with filters
export const fetchDoctors = async (
  page: number = 1,
  pageSize: number = 10,
  filters: {
    experience?: number;
    fees?: number;
    availability?: string;
    specialty?: string;
  } = {}
): Promise<{ doctors: Doctor[]; total: number }> => {
  // In a real app, this would be an API call to your backend
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      let results = [...mockDoctors];
      
      // Apply filters
      if (filters.experience) {
        results = results.filter(doctor => doctor.experience >= filters.experience);
      }
      
      if (filters.specialty) {
        results = results.filter(doctor => 
          doctor.specialty.toLowerCase().includes(filters.specialty.toLowerCase())
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
      
      // Calculate pagination
      const total = results.length;
      const start = (page - 1) * pageSize;
      const end = start + pageSize;
      const paginatedResults = results.slice(start, end);
      
      resolve({
        doctors: paginatedResults,
        total
      });
    }, 500);
  });
};

// Simulates a backend API for adding a new doctor
export const addDoctor = async (doctor: Omit<Doctor, "id">): Promise<Doctor> => {
  // In a real app, this would be an API call to your backend
  return new Promise((resolve) => {
    // Simulate network delay
    setTimeout(() => {
      const newDoctor: Doctor = {
        ...doctor,
        id: `${Date.now()}` // Generate a unique ID
      };
      
      // In a real app, this would add the doctor to the database
      // For this demo, we'll just return the new doctor object
      
      resolve(newDoctor);
    }, 500);
  });
};
