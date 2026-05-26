export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  numericPrice: number; // For calculations/sorting
  type: 'Residential' | 'Commercial' | 'Investment';
  bhk: string;
  size: string;
  features: string[];
  image: string;
  status: 'Ready to Move' | 'Under Construction' | 'Newly Launched';
  description: string;
  highlight?: string;
}

export interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  salary: string;
  type: 'Full-time' | 'Commission-based' | 'Hybrid';
  description: string;
  requirements: string[];
}

export interface ServiceDetail {
  id: string;
  title: string;
  icon: string;
  shortDesc: string;
  fullDesc: string;
  points: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
