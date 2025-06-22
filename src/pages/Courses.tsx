import { motion } from "framer-motion";
import { CourseCard } from "../components/CourseCard";
import { courses } from "../data/courses";

const FloatingShape = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-32 h-32 rounded-full opacity-10"
    style={{
      background: "linear-gradient(45deg, #561e8e, #047089)",
    }}
    animate={{
      x: [0, 100, 0],
      y: [0, -100, 0],
      rotate: [0, 180, 360],
    }}
    transition={{
      duration: 20,
      repeat: Infinity,
      delay: delay,
    }}
  />
);

export const Courses = () => {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gray-900">
      {/* Animated Background */}
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(circle at 20% 20%, #561e8e 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, #33749d 0%, transparent 50%),
            radial-gradient(circle at 40% 40%, #561e8e 0%, transparent 50%),
            linear-gradient(135deg, #0f0f23 0%, #1a1a2e 50%, #16213e 100%)
          `,
        }}
      />

      {/* Floating Shapes */}
      <FloatingShape delay={0} />
      <FloatingShape delay={5} />
      <FloatingShape delay={10} />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(86, 30, 142, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(86, 30, 142, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="relative z-10 px-4 py-16 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-7xl"
        >
          {/* Header Section */}
          <div className="mb-16 text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative inline-block"
            >
              <h1
                className="mb-4 text-6xl font-black text-transparent bg-clip-text md:text-7xl"
                style={{
                  backgroundImage:
                    "linear-gradient(135deg, #33749d 0%, #1eabdf 100%)",
                }}
              >
                Creative Cyber
              </h1>
              <motion.div
                className="absolute rounded-full -inset-4 opacity-30 blur-xl"
                style={{
                  background: "linear-gradient(135deg, #33749d, #561e8e)",
                }}
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="max-w-2xl mx-auto text-xl leading-relaxed text-gray-300"
            >
              Master the digital realm with our cutting-edge cybersecurity
              courses.
              <br className="hidden sm:block" /> Transform your career and secure
              the future.
            </motion.p>
          </div>

          {/* Courses Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {courses.map((course) => (
              <CourseCard
                key={course.id}
                id={course.id}
                title={course.title}
                description={course.description}
                price={course.price}
                image={course.image}
                level={course.level}
                duration={course.duration}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};