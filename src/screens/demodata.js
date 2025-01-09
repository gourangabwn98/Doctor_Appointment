export const doctorDetails = {
  name: 'Doctor Jack',
  specialization: 'Skin Doctor',
  image: require('../Images/doctor.png'),
};

export const slots = [
  {sloT: '10:00-12:00PM', selected: false},
  {sloT: '12:00-02:00PM', selected: false},
  {sloT: '02:00-04:00PM', selected: false},
  {sloT: '04:00-06:00PM', selected: false},
  {sloT: '06:00-08:00PM', selected: false},
  {sloT: '08:00-11:00PM', selected: false},
];

export const getDays = month => {
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
};
