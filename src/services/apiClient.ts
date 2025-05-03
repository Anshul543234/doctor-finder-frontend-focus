
import { Doctor } from "@/data/mockDoctors";

const API_URL = 'http://localhost:5000/api';

interface FetchDoctorsParams {
  page?: number;
  pageSize?: number;
  experience?: number;
  fees?: number;
  availability?: string;
  specialty?: string;
  name?: string;
}

interface DoctorsResponse {
  doctors: Doctor[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

export const fetchDoctors = async (params: FetchDoctorsParams = {}): Promise<DoctorsResponse> => {
  try {
    const queryParams = new URLSearchParams();
    
    // Add all params that are defined
    if (params.page) queryParams.append('page', params.page.toString());
    if (params.pageSize) queryParams.append('pageSize', params.pageSize.toString());
    if (params.experience) queryParams.append('experience', params.experience.toString());
    if (params.fees) queryParams.append('fees', params.fees.toString());
    if (params.availability) queryParams.append('availability', params.availability);
    if (params.specialty) queryParams.append('specialty', params.specialty);
    if (params.name) queryParams.append('name', params.name);

    const url = `${API_URL}/doctors${queryParams.toString() ? '?' + queryParams.toString() : ''}`;
    
    // Use the mock service when in development/preview mode
    if (process.env.NODE_ENV === 'development' || !url.startsWith('http')) {
      // This uses our existing API mock service
      return import('@/services/api').then(module => {
        return module.fetchDoctors(
          params.page || 1,
          params.pageSize || 10,
          {
            experience: params.experience,
            fees: params.fees,
            availability: params.availability,
            specialty: params.specialty,
            name: params.name
          }
        );
      });
    }
    
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching doctors:', error);
    throw error;
  }
};

export const addDoctor = async (doctor: Omit<Doctor, 'id'>): Promise<Doctor> => {
  try {
    // Use the mock service when in development/preview mode
    if (process.env.NODE_ENV === 'development' || !API_URL.startsWith('http')) {
      // This uses our existing API mock service
      return import('@/services/api').then(module => {
        return module.addDoctor(doctor);
      });
    }
    
    const response = await fetch(`${API_URL}/doctors`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(doctor),
    });
    
    if (!response.ok) {
      throw new Error(`API error: ${response.statusText}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error adding doctor:', error);
    throw error;
  }
};
