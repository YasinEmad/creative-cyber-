export interface Lesson {
  id: number;
  courseId: number;
  title: string;
  description: string;
  duration: string;
  videoUrl: string;
}

export const lessons: Lesson[] = [
  {
    id: 1,
    courseId: 1,
    title: "Introduction to Cybersecurity",
    description: "Learn the basic concepts and importance of cybersecurity in today's digital world.",
    duration: "15 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 2,
    courseId: 1,
    title: "Understanding Cyber Threats",
    description: "Explore different types of cyber threats and their potential impacts.",
    duration: "20 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 3,
    courseId: 1,
    title: "Basic Security Measures",
    description: "Learn essential security practices to protect yourself online.",
    duration: "25 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 4,
    courseId: 2,
    title: "Ethical Hacking Basics",
    description: "Introduction to ethical hacking and its importance.",
    duration: "30 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 5,
    courseId: 2,
    title: "Penetration Testing Fundamentals",
    description: "Learn the basics of penetration testing methodology.",
    duration: "35 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  // Network Security Advanced (Course ID 3)
  {
    id: 6,
    courseId: 3,
    title: "Network Security Fundamentals",
    description: "Understanding basic network security concepts and protocols.",
    duration: "25 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 7,
    courseId: 3,
    title: "Firewall Configuration",
    description: "Learn how to configure and manage firewalls effectively.",
    duration: "30 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 8,
    courseId: 3,
    title: "Threat Detection Systems",
    description: "Understanding and implementing threat detection systems.",
    duration: "35 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  // Cloud Security Specialist (Course ID 4)
  {
    id: 9,
    courseId: 4,
    title: "Cloud Security Introduction",
    description: "Introduction to cloud security concepts and best practices.",
    duration: "20 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 10,
    courseId: 4,
    title: "AWS Security Essentials",
    description: "Learn essential security practices for AWS cloud services.",
    duration: "40 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  },
  {
    id: 11,
    courseId: 4,
    title: "Azure & GCP Security",
    description: "Understanding security best practices for Azure and Google Cloud Platform.",
    duration: "45 mins",
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" // Replace with actual video URL
  }
];
