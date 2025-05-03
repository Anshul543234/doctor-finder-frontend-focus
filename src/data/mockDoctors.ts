
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  ratings: number;
  reviews: number;
  location: string;
  fees: number;
  education: string[];
  languages: string[];
  slots: string[];
  image: string;
}

export const mockDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Vijay Kumar",
    specialty: "General Physician",
    experience: 15,
    ratings: 4.8,
    reviews: 320,
    location: "Apollo Clinic, Jayanagar, Bangalore",
    fees: 800,
    education: ["MBBS - All India Institute of Medical Sciences", "MD - Internal Medicine"],
    languages: ["English", "Hindi", "Kannada"],
    slots: ["10:00 AM", "11:00 AM", "12:00 PM", "4:00 PM", "5:00 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "2",
    name: "Dr. Preeti Sharma",
    specialty: "General Physician",
    experience: 10,
    ratings: 4.7,
    reviews: 210,
    location: "Apollo Hospital, Indiranagar, Bangalore",
    fees: 700,
    education: ["MBBS - Bangalore Medical College", "DNB - Family Medicine"],
    languages: ["English", "Hindi", "Tamil"],
    slots: ["9:00 AM", "10:00 AM", "2:00 PM", "3:00 PM", "6:00 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "3",
    name: "Dr. Rahul Mehta",
    specialty: "General Physician",
    experience: 8,
    ratings: 4.6,
    reviews: 180,
    location: "Apollo Clinic, HSR Layout, Bangalore",
    fees: 600,
    education: ["MBBS - St. John's Medical College", "MD - General Medicine"],
    languages: ["English", "Hindi", "Telugu"],
    slots: ["11:00 AM", "3:00 PM", "4:00 PM", "7:00 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "4",
    name: "Dr. Anjali Desai",
    specialty: "General Physician",
    experience: 12,
    ratings: 4.9,
    reviews: 290,
    location: "Apollo Hospital, Koramangala, Bangalore",
    fees: 900,
    education: ["MBBS - Kasturba Medical College", "MD - Internal Medicine", "Fellowship - Infectious Diseases"],
    languages: ["English", "Hindi", "Gujarati", "Marathi"],
    slots: ["9:00 AM", "10:30 AM", "12:30 PM", "4:30 PM", "6:00 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "5",
    name: "Dr. Karthik Rajan",
    specialty: "General Physician",
    experience: 7,
    ratings: 4.5,
    reviews: 150,
    location: "Apollo Clinic, Whitefield, Bangalore",
    fees: 550,
    education: ["MBBS - Madras Medical College", "DNB - General Medicine"],
    languages: ["English", "Tamil", "Malayalam"],
    slots: ["10:00 AM", "11:30 AM", "2:00 PM", "5:30 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "6",
    name: "Dr. Sarah Khan",
    specialty: "General Physician",
    experience: 9,
    ratings: 4.7,
    reviews: 220,
    location: "Apollo Clinic, MG Road, Bangalore",
    fees: 750,
    education: ["MBBS - Jawaharlal Nehru Medical College", "MD - Internal Medicine"],
    languages: ["English", "Hindi", "Urdu"],
    slots: ["9:30 AM", "11:00 AM", "3:00 PM", "6:30 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "7",
    name: "Dr. Mohan Reddy",
    specialty: "General Physician",
    experience: 20,
    ratings: 4.9,
    reviews: 420,
    location: "Apollo Hospital, Sheshadripuram, Bangalore",
    fees: 1000,
    education: ["MBBS - Osmania Medical College", "MD - General Medicine", "DNB - Family Medicine"],
    languages: ["English", "Telugu", "Hindi", "Kannada"],
    slots: ["10:00 AM", "12:00 PM", "4:00 PM", "7:00 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "8",
    name: "Dr. Anisha Patel",
    specialty: "General Physician",
    experience: 6,
    ratings: 4.4,
    reviews: 120,
    location: "Apollo Clinic, Electronic City, Bangalore",
    fees: 500,
    education: ["MBBS - Grant Medical College", "DNB - Internal Medicine"],
    languages: ["English", "Hindi", "Gujarati"],
    slots: ["9:00 AM", "11:00 AM", "2:30 PM", "5:00 PM"],
    image: "https://placeholder.svg"
  }
];

// Available filter options
export const experienceOptions = [
  { value: 0, label: "Any Experience" },
  { value: 5, label: "5+ Years" },
  { value: 10, label: "10+ Years" },
  { value: 15, label: "15+ Years" }
];

export const feeOptions = [
  { value: 0, label: "Any Fee" },
  { value: 500, label: "₹0 - ₹500" },
  { value: 750, label: "₹501 - ₹750" },
  { value: 1000, label: "₹751 - ₹1000" },
  { value: 1001, label: "₹1000+" }
];

export const availabilityOptions = [
  { value: "any", label: "Any Time" },
  { value: "today", label: "Today" },
  { value: "tomorrow", label: "Tomorrow" },
  { value: "weekend", label: "This Weekend" }
];

export const specialties = [
  { value: "general-physician", label: "General Physician" },
  { value: "dermatologist", label: "Dermatologist" },
  { value: "pediatrician", label: "Pediatrician" },
  { value: "orthopedist", label: "Orthopedist" },
  { value: "gynecologist", label: "Gynecologist" },
  { value: "cardiologist", label: "Cardiologist" }
];
