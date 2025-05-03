
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
  },
  // New doctors from the user's data
  {
    id: "9",
    name: "Dr. Suraja Nutulapati",
    specialty: "General Physician/ Internal Medicine Specialist",
    experience: 10,
    ratings: 4.7,
    reviews: 180,
    location: "Apollo 24|7 Virtual Clinic - Telangana Hyderabad",
    fees: 499,
    education: ["MBBS", "MD (Internal Medicine)"],
    languages: ["English", "Hindi", "Telugu"],
    slots: ["9:00 AM", "11:00 AM", "3:00 PM", "5:00 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "10",
    name: "Dr. Immanuel Raj",
    specialty: "General Practitioner",
    experience: 8,
    ratings: 4.5,
    reviews: 150,
    location: "Apollo 24|7 Virtual Clinic - Telangana, Hyderabad",
    fees: 450,
    education: ["MBBS", "MBA (HHSM)"],
    languages: ["English", "Tamil", "Telugu"],
    slots: ["10:00 AM", "12:00 PM", "2:00 PM", "4:00 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "11",
    name: "Dr. Shesham Srinidhi",
    specialty: "General Practitioner",
    experience: 5,
    ratings: 4.6,
    reviews: 75,
    location: "Apollo 24|7 Virtual Clinic - Telangana, Hyderabad",
    fees: 399,
    education: ["MD(physician)"],
    languages: ["English", "Hindi", "Telugu"],
    slots: ["9:30 AM", "11:30 AM", "2:30 PM", "4:30 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "12",
    name: "Dr. Liritha C",
    specialty: "General Physician/ Internal Medicine Specialist",
    experience: 5,
    ratings: 4.5,
    reviews: 90,
    location: "Apollo 24|7 Virtual Clinic - Telangana, Hyderabad",
    fees: 429,
    education: ["MBBS", "MD (GENERAL MEDICINE)"],
    languages: ["English", "Telugu", "Hindi"],
    slots: ["10:30 AM", "12:30 PM", "3:30 PM", "5:30 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "13",
    name: "Dr. Kanika Bansal",
    specialty: "General Physician/ Internal Medicine Specialist",
    experience: 6,
    ratings: 4.6,
    reviews: 250,
    location: "Apollo 24|7 Virtual Clinic - Delhi, New Delhi",
    fees: 489,
    education: ["MBBS", "DNB (General Medicine)"],
    languages: ["English", "Hindi"],
    slots: ["9:15 AM", "11:15 AM", "2:15 PM", "5:15 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "14",
    name: "Dr. J T Hema Pratima",
    specialty: "General Practitioner",
    experience: 9,
    ratings: 4.7,
    reviews: 200,
    location: "Apollo 24|7 Virtual Clinic - Tamilnadu, Chennai",
    fees: 499,
    education: ["MBBS"],
    languages: ["English", "Tamil"],
    slots: ["9:45 AM", "11:45 AM", "2:45 PM", "4:45 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "15",
    name: "Dr. Mohammed Huzef Ul Arifeen",
    specialty: "General Practitioner",
    experience: 3,
    ratings: 4.3,
    reviews: 60,
    location: "Apollo 24|7 Virtual Clinic - Telangana, Hyderabad",
    fees: 350,
    education: ["MBBS"],
    languages: ["English", "Hindi", "Urdu", "Telugu"],
    slots: ["10:15 AM", "12:15 PM", "3:15 PM", "5:15 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "16",
    name: "Dr. Siri Nallapu",
    specialty: "General Practitioner",
    experience: 5,
    ratings: 4.4,
    reviews: 85,
    location: "Apollo 24|7 Virtual Clinic - Telangana, Hyderabad",
    fees: 399,
    education: ["MBBS"],
    languages: ["English", "Telugu", "Hindi"],
    slots: ["9:00 AM", "10:30 AM", "2:00 PM", "4:30 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "17",
    name: "Dr. Divya Lekha Gunta",
    specialty: "General Practitioner",
    experience: 10,
    ratings: 4.6,
    reviews: 130,
    location: "Apollo 24|7 Virtual Clinic - Andhra Pradesh, Visakhapatnam",
    fees: 489,
    education: ["MBBS", "MD (Pathology)"],
    languages: ["English", "Telugu"],
    slots: ["9:20 AM", "11:20 AM", "2:20 PM", "5:20 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "18",
    name: "Dr. Vasanthasree Nair",
    specialty: "General Practitioner",
    experience: 15,
    ratings: 4.8,
    reviews: 375,
    location: "Apollo 24|7 Virtual Clinic - Kerala, Angamaly",
    fees: 459,
    education: ["MBBS"],
    languages: ["English", "Malayalam", "Tamil"],
    slots: ["9:10 AM", "11:10 AM", "2:10 PM", "4:10 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "19",
    name: "Dr. V Jayavardhini",
    specialty: "General Practitioner",
    experience: 12,
    ratings: 4.7,
    reviews: 210,
    location: "Apollo 247 Virtual Clinic, Hyderabad",
    fees: 499,
    education: ["MBBS"],
    languages: ["English", "Telugu", "Tamil"],
    slots: ["10:40 AM", "12:40 PM", "3:40 PM", "5:40 PM"],
    image: "https://placeholder.svg"
  },
  {
    id: "20",
    name: "Dr. Rohinipriyanka Reddy",
    specialty: "General Practitioner",
    experience: 9,
    ratings: 4.6,
    reviews: 125,
    location: "Apollo 24|7 Virtual Clinic - Telangana, Hyderabad",
    fees: 479,
    education: ["MBBS"],
    languages: ["English", "Telugu", "Hindi"],
    slots: ["9:50 AM", "11:50 AM", "2:50 PM", "4:50 PM"],
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
