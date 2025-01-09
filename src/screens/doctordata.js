export const doctors = [
  {
    id: 1,
    name: 'Dr. John Doe',
    degree: 'MBBS, MD (Cardiology)',
    address: '123 Heart Lane, City Hospital',
    category: 'Cardiology',
    image: require('../Images/doctor.png'),
    slots: [
      {sloT: '10:00-12:00PM', selected: false},
      {sloT: '12:00-02:00PM', selected: false},
      {sloT: '02:00-04:00PM', selected: false},
      {sloT: '04:00-06:00PM', selected: false},
      {sloT: '06:00-08:00PM', selected: false},
      {sloT: '08:00-11:00PM', selected: false},
    ],
    getDays: month => {
      const monthDays = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
      };
      return monthDays[month] || 0;
    },
  },
  {
    id: 2,
    name: 'Dr. Jane Smith',
    degree: 'BDS, MDS (Dentistry)',
    address: '456 Smile Street, Dental Clinic',
    category: 'Dentistry',
    image: require('../Images/doctor.png'),
    slots: [
      {sloT: '10:00-12:00PM', selected: false},
      {sloT: '12:00-02:00PM', selected: false},
      {sloT: '02:00-04:00PM', selected: false},
      {sloT: '04:00-06:00PM', selected: false},
      {sloT: '06:00-08:00PM', selected: false},
      {sloT: '08:00-11:00PM', selected: false},
    ],
    getDays: month => {
      const monthDays = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
      };
      return monthDays[month] || 0;
    },
  },
  {
    id: 3,
    name: 'Dr. Emily Johnson',
    degree: 'MBBS, MS (Orthopedics)',
    address: '789 Bone Avenue, Ortho Center',
    category: 'Orthopedics',
    image: require('../Images/doctor.png'),
    slots: [
      {sloT: '10:00-12:00PM', selected: false},
      {sloT: '12:00-02:00PM', selected: false},
      {sloT: '02:00-04:00PM', selected: false},
      {sloT: '04:00-06:00PM', selected: false},
      {sloT: '06:00-08:00PM', selected: false},
      {sloT: '08:00-11:00PM', selected: false},
    ],
    getDays: month => {
      const monthDays = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
      };
      return monthDays[month] || 0;
    },
  },
  {
    id: 4,
    name: 'Dr. Richard Roe',
    degree: 'MBBS, MD (Pediatrics)',
    address: "321 Kids Lane, Children's Hospital",
    category: 'Pediatrics',
    image: require('../Images/doctor.png'),
    slots: [
      {sloT: '10:00-12:00PM', selected: false},
      {sloT: '12:00-02:00PM', selected: false},
      {sloT: '02:00-04:00PM', selected: false},
      {sloT: '04:00-06:00PM', selected: false},
      {sloT: '06:00-08:00PM', selected: false},
      {sloT: '08:00-11:00PM', selected: false},
    ],
    getDays: month => {
      const monthDays = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
      };
      return monthDays[month] || 0;
    },
  },
  {
    id: 5,
    name: 'Dr. Sarah Wilson',
    degree: 'MBBS, MD (Dermatology)',
    address: '654 Skin Road, Derma Clinic',
    category: 'Dermatology',
    image: require('../Images/doctor.png'),
    slots: [
      {sloT: '10:00-12:00PM', selected: false},
      {sloT: '12:00-02:00PM', selected: false},
      {sloT: '02:00-04:00PM', selected: false},
      {sloT: '04:00-06:00PM', selected: false},
      {sloT: '06:00-08:00PM', selected: false},
      {sloT: '08:00-11:00PM', selected: false},
    ],
    getDays: month => {
      const monthDays = {
        1: 31,
        2: 28,
        3: 31,
        4: 30,
        5: 31,
        6: 30,
        7: 31,
        8: 31,
        9: 30,
        10: 31,
        11: 30,
        12: 31,
      };
      return monthDays[month] || 0;
    },
  },
];
