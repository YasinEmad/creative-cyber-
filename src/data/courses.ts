export interface Course {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  level: string;
  duration: string;
}

export const courses: Course[] = [
  {
    id: 1,
    title: "Cyber Security Fundamentals",
    description:
      "Learn the basics of cyber security and protect yourself online. This course covers essential security concepts and best practices.",
    price: 99.99,
    image: "/images/basics.jpg",
    level: "Beginner",
    duration: "6 weeks"
  },
  {
    id: 2,
    title: "Ethical Hacking Masterclass",
    description:
      "Master the art of ethical hacking and penetration testing. Learn to think like a hacker to better defend systems.",
    price: 100,
    image: "/images/ceh.jpg",
    level: "Advanced",
    duration: "10 weeks"
  },
  {
    id: 3,
    title: "Network Security Advanced",
    description:
      "Deep dive into network security protocols, firewall configuration, and threat detection systems and more ",
    price: 129,
    image: "/images/Network security.jpg",
    level: "Intermediate",
    duration: "8 weeks"
  },
  {
    id: 4,
    title: "Cloud Security Specialist",
    description:
      "Learn to secure cloud infrastructure and applications. Master AWS, Azure, and GCP security best practices.",
    price: 199,
    image: "/images/Cloud-sec.jpg",
    level: "Expert",
    duration: "12 weeks"
  },
];
