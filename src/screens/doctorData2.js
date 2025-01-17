const doctors = [
  {
    id: '1',
    doctorName: 'Dr. John Doe',
    specialization: 'Cardiologist',
    address: '123 Heart Clinic, New York',
    timing: '08:10 PM',
    date: '2025-01-17',
    status: 'Completed',
    image: require('../Images/doctor.png'),
    details: {
      illness: 'Chest Pain',
      medicine: 'Aspirin',
      prescription: 'Take one tablet daily for 10 days.',
      prescriptionPDF: require('../pdf/demo.pdf'),
    },
  },
  {
    id: '2',
    doctorName: 'Dr. Jane Smith',
    specialization: 'Dermatologist',
    address: '456 Skin Care Center, Los Angeles',
    timing: '09:15 AM',
    date: '2025-01-18',
    status: 'Completed',
    image: require('../Images/doctor.png'),
    details: {
      illness: 'Eczema',
      medicine: 'Hydrocortisone',
      prescription: 'Apply twice daily for 2 weeks.',
      prescriptionPDF: require('../pdf/demo.pdf'),
    },
  },
  {
    id: '3',
    doctorName: 'Dr. Emily White',
    specialization: 'Orthopedic',
    address: '789 Bone Clinic, Chicago',
    timing: '02:30 PM',
    date: '2025-01-19',
    status: 'Pending',
    image: require('../Images/doctor.png'),
    details: {
      illness: 'Knee Pain',
      medicine: 'Ibuprofen',
      prescription: 'Take one tablet twice daily for 7 days.',
      prescriptionPDF: require('../pdf/demo.pdf'),
    },
  },
];

export default doctors;
