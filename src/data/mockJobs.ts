export interface Job {
  id: string;
  title: string;
  postedTime: string;
  contractType: string;
  salaryRange: string;
  experience: string;
  description: string;
  applied: number;
  clicked: number;
  underProcess: number;
  status: 'active' | 'closed' | 'draft';
}

export const mockJobs: Job[] = [
  {
    id: '1',
    title: 'Senior Product Designer',
    postedTime: '2 hours ago',
    contractType: 'Full-time',
    salaryRange: '$80K - $120K',
    experience: '5+ years',
    description: 'We are looking for a Senior Product Designer to join our team and lead the design of our flagship products.',
    applied: 45,
    clicked: 234,
    underProcess: 12,
    status: 'active',
  },
  {
    id: '2',
    title: 'Frontend Developer',
    postedTime: '5 hours ago',
    contractType: 'Full-time',
    salaryRange: '$70K - $100K',
    experience: '3-5 years',
    description: 'Join our engineering team to build beautiful and performant user interfaces using React and TypeScript.',
    applied: 67,
    clicked: 312,
    underProcess: 8,
    status: 'active',
  },
  {
    id: '3',
    title: 'Marketing Manager',
    postedTime: '1 day ago',
    contractType: 'Full-time',
    salaryRange: '$60K - $90K',
    experience: '3-5 years',
    description: 'Lead our marketing efforts and drive growth through innovative campaigns and strategies.',
    applied: 32,
    clicked: 178,
    underProcess: 5,
    status: 'active',
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    postedTime: '2 days ago',
    contractType: 'Contract',
    salaryRange: '$90K - $130K',
    experience: '5+ years',
    description: 'Help us scale our infrastructure and improve our deployment pipelines.',
    applied: 28,
    clicked: 156,
    underProcess: 7,
    status: 'active',
  },
  {
    id: '5',
    title: 'UX Researcher',
    postedTime: '3 days ago',
    contractType: 'Part-time',
    salaryRange: '$40K - $60K',
    experience: '1-3 years',
    description: 'Conduct user research to inform product decisions and improve user experience.',
    applied: 19,
    clicked: 98,
    underProcess: 3,
    status: 'active',
  },
  {
    id: '6',
    title: 'Backend Engineer',
    postedTime: '1 week ago',
    contractType: 'Full-time',
    salaryRange: '$85K - $125K',
    experience: '3-5 years',
    description: 'Build scalable APIs and services using Node.js and PostgreSQL.',
    applied: 89,
    clicked: 445,
    underProcess: 15,
    status: 'active',
  },
];

export const draftJobs: Job[] = [
  {
    id: 'd1',
    title: 'Data Analyst',
    postedTime: 'Draft',
    contractType: 'Full-time',
    salaryRange: '$55K - $75K',
    experience: '1-3 years',
    description: 'Analyze data to provide insights and support business decisions.',
    applied: 0,
    clicked: 0,
    underProcess: 0,
    status: 'draft',
  },
  {
    id: 'd2',
    title: 'Customer Success Manager',
    postedTime: 'Draft',
    contractType: 'Full-time',
    salaryRange: '$50K - $70K',
    experience: '3-5 years',
    description: 'Ensure customer satisfaction and drive retention.',
    applied: 0,
    clicked: 0,
    underProcess: 0,
    status: 'draft',
  },
];
