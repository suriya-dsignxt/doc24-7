import { Doctor, Review, Prescription, HealthReport } from './types';

export const DOCTORS: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Julianne Thorne',
    specialty: 'Cardiology',
    title: 'Senior Cardiologist',
    rating: 4.9,
    reviewCount: 1240,
    experience: '15+ Years',
    hospital: 'St. Mary\'s Hospital',
    fee: 120,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBh1BVn0lTBjLc1a4kgX6e9kvPiYcRYWWt8tmz-xAhR63h8qCWXlBXcO4fmq1IzCawvDoIDKNqZi1raSn4AxWVAYf7qxDggRLk1tn5H_6fqy5DD8j3TcPcpjaNVFImoT1N5GeHUqtjxDt2qCF8gg-yz0N9P97zpKVB15azfZ-21Ah2lkIiraZvI7tsYWSElEIfiUbYvtTLRNOaJAFnDK5S8cWlAJ4dBTgPjO046w5jjpBo4pdo2UGUAyJhAhYRczZSa-ZqphiIeQxg',
    status: 'available',
    nextSlot: 'Today, 4:30 PM',
    location: 'Central Medical Plaza, NY',
    languages: ['English', 'Spanish', 'French'],
    bio: 'Dr. Julianne Thorne is a board-certified Cardiologist with over 15 years of experience in managing complex cardiovascular conditions. Her approach integrates cutting-edge medical technology with a personalized, patient-centric philosophy.',
    education: [
      { degree: 'MD, Cardiology', school: 'Johns Hopkins School of Medicine' },
      { degree: 'Residency in Internal Medicine', school: 'Mayo Clinic College of Medicine' }
    ],
    certifications: ['American Board of Cardiology', 'FACC Fellow', 'Advanced Cardiac Life Support']
  },
  {
    id: '2',
    name: 'Dr. Marcus Chen',
    specialty: 'Dermatology',
    title: 'Dermatology Specialist',
    rating: 4.7,
    reviewCount: 842,
    experience: '9+ Years',
    hospital: 'Mayo Clinic',
    fee: 95,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfRIzvt37FfQ6UY7bwBgAMLEib_uIst51jzZmR_FgZOdBoaYlq9NcwejFYfwlv6tA9NlU9Yu5hfP27BlTwopjqSpGDMxMaN3e0P8OloQOTRYP2TxS36xaCvB-N36LMgvx4IC7_2QXVBX138lQTByA6CytXlRFZrA8xvT6Rh7N-yqlXrnclAxGDA-Rmp34e9n2JNy-lLq93YKLcwRFfjWP8jf59UZ9n31wcAdW90xe0aZhFjkweLX4t7DMT0cv_OyaAjV5kpvZ-bCs',
    status: 'soon',
    nextSlot: 'Tomorrow, 9:00 AM',
    location: 'Westside Medical Center',
    languages: ['English', 'Mandarin'],
    bio: 'Dr. Marcus Chen is a leading expert in skin cancer detection and aesthetic dermatology.',
    education: [{ degree: 'MD, Dermatology', school: 'Stanford Medical School' }],
    certifications: ['Board Certified Dermatologist']
  },
  {
    id: '3',
    name: 'Dr. Robert Vance',
    specialty: 'Pediatrics',
    title: 'Pediatric Surgeon',
    rating: 5.0,
    reviewCount: 2500,
    experience: '22+ Years',
    hospital: 'Johns Hopkins',
    fee: 200,
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDhsHpk4w2gRqQoaUtYoAhb6OR9bA8USb1j9AymT6WDNs1SRGxYHnYU_YllV1tMSMvjH-UmJa9lP96FUPL8TyMZQDqZtzg7E6X76rRMZL-CWxeYendHqt0wITk0GfaXY6cWB0SvSKgTnVNnTVIfbWy4FsS2RjQ6miALpqJCI9VoLts5CZ8Z7giHd0tq71Vjx07NW92S5Nh808J-U2BbSdtwF9iTsP4WkdMA5wnb5SyYLjX5FGM7CulGLVbBQC3q-uLF7jLnx7XJlxQ',
    status: 'booked',
    nextSlot: 'In 4 days',
    location: 'Children\'s Health Plaza',
    languages: ['English'],
    bio: 'Dr. Robert Vance is one of the most respected pediatric surgeons in the country, specializing in neonatal care.',
    education: [{ degree: 'MD, Surgery', school: 'Harvard Medical School' }],
    certifications: ['Fellow of the American College of Surgeons']
  }
];

export const REVIEWS: Review[] = [
  {
    id: 'r1',
    userName: 'Sarah McAlister',
    userImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkywPZw6eBGlNsabPqDhAqXdK6p9izEd1sx4r2Ron332tzcH8UQdpPibMZSPkLJPyFgfSvgyA_0_50GHqrEMn_J2gGQLL3Bd2-_j2xzxWHeB4H-zZ883PxBtrRfpFLxEeg5b2boAZDraGyMzz8jD9YgKIdfJUZtM30IT61nxfdGvTh9YV_Wh4EOLkhy8awqLqz_72mrWWquoIthhd5jSzLcdbQLQUJT1hKz1VBFUvynaxUwMi5aJQ5tJ_yQfTqoX9blhKsIYgaS_k',
    rating: 5,
    date: '2 weeks ago',
    comment: 'Dr. Thorne is incredibly thorough and empathetic. She took the time to explain my heart health in a way I could finally understand.',
    isVerified: true
  },
  {
    id: 'r2',
    userName: 'Robert Chen',
    userImage: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBXk5QP6doIZx0H6TjfY2DFSg3DUHbTo4Glljt8D5yuM6rxmoIsBLx-qpWcQfo7QNGpoArsxWPSVkd6-GncyoNK9ZxxKPvdDhTG5EGjMnRwOQ8_6QuUY8uUoSHjDCfhKwxVYlUILGE9sBeTwVKba_s8XhskvdNzgS6hJ0zdwKAcDUA7kzll767tQqeWZHzYOkOFZsjuf5wdXeHCTfzEUeIAb7vFQ-Ac3kSDcdKx5QVJb7u1eAC85cpgOFyJdCzHEXArK-Ri95r_VmI',
    rating: 5,
    date: '1 month ago',
    comment: 'Excellent diagnostic skills. She identified an issue that two other doctors missed. Highly recommend.',
    isVerified: true
  }
];

export const PRESCRIPTIONS: Prescription[] = [
  { id: 'p1', medication: 'Lisinopril', dosage: '10mg', frequency: 'Once Daily', doctor: 'Dr. Jenkins', date: 'Mar 10, 2024' },
  { id: 'p2', medication: 'Amoxicillin', dosage: '500mg', frequency: 'Twice Daily', doctor: 'Dr. Thorne', date: 'Mar 05, 2024' }
];

export const REPORTS: HealthReport[] = [
  { id: 'rep1', title: 'Annual Wellness Panel', date: 'Oct 12, 2023', provider: 'General Diagnostics', type: 'lab' },
  { id: 'rep2', title: 'Chest X-Ray Imaging', date: 'Sep 28, 2023', provider: 'City Radiology', type: 'radiology' }
];
