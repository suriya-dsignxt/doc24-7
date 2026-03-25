export type Specialty = 'Cardiology' | 'Pediatrics' | 'Neurology' | 'Orthopedics' | 'Dermatology' | 'Ophthalmology' | 'General Medicine';

export interface Doctor {
  id: string;
  name: string;
  specialty: Specialty;
  title: string;
  rating: number;
  reviewCount: number;
  experience: string;
  hospital: string;
  fee: number;
  image: string;
  status: 'available' | 'soon' | 'booked';
  nextSlot?: string;
  location: string;
  languages: string[];
  bio: string;
  education: { degree: string; school: string }[];
  certifications: string[];
}

export interface Review {
  id: string;
  userName: string;
  userImage: string;
  rating: number;
  date: string;
  comment: string;
  isVerified: boolean;
}

export interface Prescription {
  id: string;
  medication: string;
  dosage: string;
  frequency: string;
  doctor: string;
  date: string;
}

export interface HealthReport {
  id: string;
  title: string;
  date: string;
  provider: string;
  type: 'lab' | 'radiology';
}
