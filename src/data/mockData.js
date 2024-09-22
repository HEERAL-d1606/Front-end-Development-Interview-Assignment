
/**The `mockData` module provides sample webinar data, including details such as 
 * titles, instructors, topics, and timings. This data serves as a placeholder for development and testing, 
 * enabling developers to visualize the application's functionality without needing a live backend.
 */



export const mockWebinars = [
  {
    id: 1,
    title: 'React and React Native',
    instructorName: 'Matthew Martin',
    instructorRole: 'Senior Frontend Engineer',
    instructorCompany: 'Tech Solutions Inc.',
    instructorImageURL: require('../assets/Rectangle.png'), 
    topics: 'Front End Engineering',
    startDate: '2024-10-01', 
    startTime: '10:00', 
    endTime: '12:00', 
    backgroundColor: '#741DE3', 
  },
  {
    id: 2,
    title: 'Backend Development',
    instructorName: 'IK Expert',
    instructorRole: 'Lead Backend Engineer',
    instructorCompany: 'Innovative Labs',
    instructorImageURL: require('../assets/Mask group.png'), 
    topics: 'Backend Development',
    startDate: '2024-11-15', 
    startTime: '14:00', 
    endTime: '16:00',
    backgroundColor: '#E72174',
  },
  {
    id: 3,
    title: 'Understanding REST APIs',
    instructorName: 'John Doe',
    instructorRole: 'Software Engineer',
    instructorCompany: 'OpenAPI Co.',
    instructorImageURL: require('../assets/Rectangle.png'),
    topics: 'Backend Development',
    startDate: '2024-12-05', 
    startTime: '09:00', 
    endTime: '11:30',
   
  },
  {
    id: 4,
    title: 'Introduction to Data Science',
    instructorName: 'Jane Smith',
    instructorRole: 'Data Scientist',
    instructorCompany: 'Data World',
    instructorImageURL: require('../assets/Mask group.png'),
    topics: 'Data Science',
    startDate: '2024-09-30', 
    startTime: '13:00', 
    endTime: '15:00', 
    backgroundColor: '#08A79E', 
  },
  {
    id: 5,
    title: 'Advanced Machine Learning',
    instructorName: 'Jane Smith',
    instructorRole: 'Data Scientist',
    instructorCompany: 'Data World',
    instructorImageURL: require('../assets/Rectangle.png'),
    topics: 'Design',
    startDate: '2024-10-12', 
    startTime: '11:00', 
    endTime: '13:30',
    backgroundColor: '#FFB023', 
  },
  {
    id: 6,
    title: 'Deep Learning Essentials',
    instructorName: 'Jane Smith',
    instructorRole: 'Data Scientist',
    instructorCompany: 'Data World',
    instructorImageURL: require('../assets/Mask group.png'),
    topics: 'Data Science',
    startDate: '2024-11-01', 
    startTime: '09:30', 
    endTime: '12:00', 
    backgroundColor: '#088761', 
  }
];

export const topicsList = ['Front End Engineering', 'Backend Development', 'Data Science', 'Design'];
