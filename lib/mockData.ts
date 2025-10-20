// Mock data for healthcare system demo

export interface Patient {
  id: string;
  mrn: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  email: string;
  phone: string;
  address: string;
  insuranceProvider: string;
  primaryDoctor: string;
  lastVisit: string;
  nextAppointment?: string;
  status: 'active' | 'inactive';
  allergies: string[];
  conditions: string[];
}

export interface Appointment {
  id: string;
  patientId: string;
  patientName: string;
  doctorName: string;
  date: string;
  time: string;
  type: string;
  status: 'scheduled' | 'checked-in' | 'in-progress' | 'completed' | 'cancelled';
  reason: string;
  duration: number;
  clinic: string;
}

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  email: string;
  phone: string;
  clinic: string;
  patients: number;
  rating: number;
  yearsExperience: number;
}

export interface Clinic {
  id: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  totalPatients: number;
  totalDoctors: number;
  totalAppointments: number;
  operatingHours: string;
}

// Mock Patients
export const mockPatients: Patient[] = [
  {
    id: '1',
    mrn: 'MRN-20251020-CLINIC01-A1B2C3D4',
    firstName: 'Sarah',
    lastName: 'Johnson',
    dateOfBirth: '1985-03-15',
    gender: 'female',
    email: 'sarah.johnson@email.com',
    phone: '(555) 123-4567',
    address: '123 Main St, Anytown, CA 90210',
    insuranceProvider: 'Blue Cross Blue Shield',
    primaryDoctor: 'Dr. Emily Chen',
    lastVisit: '2024-09-15',
    nextAppointment: '2024-11-05',
    status: 'active',
    allergies: ['Penicillin', 'Shellfish'],
    conditions: ['Hypertension', 'Type 2 Diabetes']
  },
  {
    id: '2',
    mrn: 'MRN-20251020-CLINIC01-B2C3D4E5',
    firstName: 'Michael',
    lastName: 'Rodriguez',
    dateOfBirth: '1978-07-22',
    gender: 'male',
    email: 'michael.rodriguez@email.com',
    phone: '(555) 234-5678',
    address: '456 Oak Ave, Somewhere, CA 90211',
    insuranceProvider: 'Aetna',
    primaryDoctor: 'Dr. James Wilson',
    lastVisit: '2024-10-01',
    status: 'active',
    allergies: ['Latex'],
    conditions: ['Asthma']
  },
  {
    id: '3',
    mrn: 'MRN-20251020-CLINIC02-C3D4E5F6',
    firstName: 'Emma',
    lastName: 'Thompson',
    dateOfBirth: '1992-11-08',
    gender: 'female',
    email: 'emma.thompson@email.com',
    phone: '(555) 345-6789',
    address: '789 Pine St, Elsewhere, CA 90212',
    insuranceProvider: 'Kaiser Permanente',
    primaryDoctor: 'Dr. Sarah Martinez',
    lastVisit: '2024-08-20',
    nextAppointment: '2024-10-25',
    status: 'active',
    allergies: [],
    conditions: []
  },
  {
    id: '4',
    mrn: 'MRN-20251020-CLINIC01-D4E5F6G7',
    firstName: 'Robert',
    lastName: 'Davis',
    dateOfBirth: '1965-12-03',
    gender: 'male',
    email: 'robert.davis@email.com',
    phone: '(555) 456-7890',
    address: '321 Elm St, Nowhere, CA 90213',
    insuranceProvider: 'Medicare',
    primaryDoctor: 'Dr. Emily Chen',
    lastVisit: '2024-09-30',
    status: 'active',
    allergies: ['Aspirin', 'Codeine'],
    conditions: ['Arthritis', 'High Cholesterol', 'COPD']
  },
  {
    id: '5',
    mrn: 'MRN-20251020-CLINIC03-E5F6G7H8',
    firstName: 'Lisa',
    lastName: 'Anderson',
    dateOfBirth: '1988-05-17',
    gender: 'female',
    email: 'lisa.anderson@email.com',
    phone: '(555) 567-8901',
    address: '654 Maple Dr, Anywhere, CA 90214',
    insuranceProvider: 'Cigna',
    primaryDoctor: 'Dr. Michael Brown',
    lastVisit: '2024-10-10',
    nextAppointment: '2024-11-15',
    status: 'active',
    allergies: ['Peanuts'],
    conditions: ['Migraine']
  }
];

// Mock Appointments
export const mockAppointments: Appointment[] = [
  {
    id: '1',
    patientId: '1',
    patientName: 'Sarah Johnson',
    doctorName: 'Dr. Emily Chen',
    date: '2024-11-05',
    time: '09:00',
    type: 'Follow-up',
    status: 'scheduled',
    reason: 'Diabetes management review',
    duration: 30,
    clinic: 'Main Street Clinic'
  },
  {
    id: '2',
    patientId: '3',
    patientName: 'Emma Thompson',
    doctorName: 'Dr. Sarah Martinez',
    date: '2024-10-25',
    time: '14:30',
    type: 'Annual Physical',
    status: 'scheduled',
    reason: 'Annual wellness exam',
    duration: 60,
    clinic: 'Downtown Health Center'
  },
  {
    id: '3',
    patientId: '2',
    patientName: 'Michael Rodriguez',
    doctorName: 'Dr. James Wilson',
    date: '2024-10-21',
    time: '10:15',
    type: 'Consultation',
    status: 'checked-in',
    reason: 'Asthma symptoms worsening',
    duration: 45,
    clinic: 'Main Street Clinic'
  },
  {
    id: '4',
    patientId: '4',
    patientName: 'Robert Davis',
    doctorName: 'Dr. Emily Chen',
    date: '2024-10-21',
    time: '11:00',
    type: 'Follow-up',
    status: 'in-progress',
    reason: 'COPD management',
    duration: 30,
    clinic: 'Main Street Clinic'
  },
  {
    id: '5',
    patientId: '5',
    patientName: 'Lisa Anderson',
    doctorName: 'Dr. Michael Brown',
    date: '2024-11-15',
    time: '16:00',
    type: 'Specialist Referral',
    status: 'scheduled',
    reason: 'Neurologist consultation for migraines',
    duration: 45,
    clinic: 'Westside Medical Plaza'
  }
];

// Mock Doctors
export const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Emily Chen',
    specialty: 'Internal Medicine',
    email: 'emily.chen@healthsystem.com',
    phone: '(555) 111-2222',
    clinic: 'Main Street Clinic',
    patients: 245,
    rating: 4.8,
    yearsExperience: 12
  },
  {
    id: '2',
    name: 'Dr. James Wilson',
    specialty: 'Pulmonology',
    email: 'james.wilson@healthsystem.com',
    phone: '(555) 222-3333',
    clinic: 'Main Street Clinic',
    patients: 180,
    rating: 4.9,
    yearsExperience: 15
  },
  {
    id: '3',
    name: 'Dr. Sarah Martinez',
    specialty: 'Family Medicine',
    email: 'sarah.martinez@healthsystem.com',
    phone: '(555) 333-4444',
    clinic: 'Downtown Health Center',
    patients: 320,
    rating: 4.7,
    yearsExperience: 8
  },
  {
    id: '4',
    name: 'Dr. Michael Brown',
    specialty: 'Neurology',
    email: 'michael.brown@healthsystem.com',
    phone: '(555) 444-5555',
    clinic: 'Westside Medical Plaza',
    patients: 150,
    rating: 4.9,
    yearsExperience: 20
  }
];

// Mock Clinics
export const mockClinics: Clinic[] = [
  {
    id: '1',
    name: 'Main Street Clinic',
    address: '100 Main Street, Anytown, CA 90210',
    phone: '(555) 100-2000',
    email: 'info@mainstreetclinic.com',
    totalPatients: 1250,
    totalDoctors: 8,
    totalAppointments: 450,
    operatingHours: 'Mon-Fri: 7:00 AM - 7:00 PM, Sat: 8:00 AM - 4:00 PM'
  },
  {
    id: '2',
    name: 'Downtown Health Center',
    address: '250 Downtown Blvd, Anytown, CA 90211',
    phone: '(555) 200-3000',
    email: 'contact@downtownhealth.com',
    totalPatients: 980,
    totalDoctors: 6,
    totalAppointments: 320,
    operatingHours: 'Mon-Fri: 8:00 AM - 6:00 PM, Sat: 9:00 AM - 2:00 PM'
  },
  {
    id: '3',
    name: 'Westside Medical Plaza',
    address: '500 Westside Ave, Anytown, CA 90212',
    phone: '(555) 300-4000',
    email: 'info@westsidemedical.com',
    totalPatients: 750,
    totalDoctors: 5,
    totalAppointments: 280,
    operatingHours: 'Mon-Fri: 9:00 AM - 5:00 PM'
  }
];

// Mock Analytics Data
export const mockAnalytics = {
  totalPatients: 2980,
  totalAppointments: 1050,
  totalDoctors: 19,
  totalClinics: 3,
  appointmentsToday: 45,
  patientsCheckedIn: 23,
  averageWaitTime: 12, // minutes
  patientSatisfaction: 4.7,
  monthlyGrowth: 8.5, // percentage
  revenueThisMonth: 485000,
  appointmentsByMonth: [
    { month: 'Jan', appointments: 850 },
    { month: 'Feb', appointments: 920 },
    { month: 'Mar', appointments: 1100 },
    { month: 'Apr', appointments: 980 },
    { month: 'May', appointments: 1050 },
    { month: 'Jun', appointments: 1200 },
    { month: 'Jul', appointments: 1150 },
    { month: 'Aug', appointments: 1300 },
    { month: 'Sep', appointments: 1250 },
    { month: 'Oct', appointments: 1050 }
  ],
  patientsByAge: [
    { ageGroup: '0-18', count: 450 },
    { ageGroup: '19-35', count: 680 },
    { ageGroup: '36-50', count: 820 },
    { ageGroup: '51-65', count: 650 },
    { ageGroup: '65+', count: 380 }
  ],
  topConditions: [
    { condition: 'Hypertension', count: 245 },
    { condition: 'Diabetes Type 2', count: 180 },
    { condition: 'Asthma', count: 165 },
    { condition: 'Arthritis', count: 140 },
    { condition: 'High Cholesterol', count: 120 }
  ]
};

// Mock RAG Query Results
export const mockRAGResults = {
  query: "What are the contraindications for prescribing metformin to diabetic patients?",
  response: "Based on current clinical guidelines, metformin contraindications include: severe kidney disease (eGFR <30 mL/min/1.73m²), acute or chronic metabolic acidosis, and hypersensitivity to metformin. Use with caution in patients with liver disease, heart failure, or those undergoing procedures requiring contrast agents.",
  confidence: 0.92,
  sources: [
    {
      title: "American Diabetes Association Guidelines 2024",
      relevance: 0.95,
      citation: "ADA Standards of Medical Care in Diabetes—2024"
    },
    {
      title: "FDA Prescribing Information - Metformin",
      relevance: 0.88,
      citation: "FDA Label Information - Metformin HCl"
    },
    {
      title: "Clinical Pharmacology Review",
      relevance: 0.82,
      citation: "Journal of Clinical Endocrinology, 2024"
    }
  ],
  relatedPatients: [
    {
      mrn: "MRN-20251020-CLINIC01-A1B2C3D4",
      name: "Sarah Johnson",
      relevantConditions: ["Type 2 Diabetes", "Hypertension"],
      currentMedications: ["Metformin 1000mg", "Lisinopril 10mg"]
    }
  ]
};

// Mock System Status
export const mockSystemStatus = {
  overallHealth: "healthy",
  uptime: "99.97%",
  lastIncident: "2024-09-15",
  services: [
    { name: "API Gateway", status: "healthy", responseTime: "45ms" },
    { name: "Database", status: "healthy", responseTime: "12ms" },
    { name: "RAG Engine", status: "healthy", responseTime: "1.2s" },
    { name: "Graph Database", status: "healthy", responseTime: "25ms" },
    { name: "Authentication", status: "healthy", responseTime: "35ms" },
    { name: "Audit Logging", status: "healthy", responseTime: "8ms" }
  ],
  securityMetrics: {
    failedLoginAttempts: 3,
    suspiciousActivities: 0,
    dataBreaches: 0,
    complianceScore: 100
  }
};
