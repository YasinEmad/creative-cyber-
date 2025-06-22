import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { VideoPlayer } from "../components/VideoPlayer";
import { courses } from "../data/courses";
import { lessons } from "../data/lessons";
import { useState, useEffect } from "react";
import { FiClock, FiBookOpen, FiCheck, FiArrowLeft } from "react-icons/fi";

export const Watch = () => {
  const { id } = useParams<{ id: string }>();
  const courseId = parseInt(id || "1", 10);
  const course = courses.find((c) => c.id === courseId);
  const courseLessons = lessons.filter((l) => l.courseId === courseId);
  const [selectedLesson, setSelectedLesson] = useState(courseLessons[0]);
  const [completedLessons, setCompletedLessons] = useState<number[]>([]);

  useEffect(() => {
    // Load completed lessons from localStorage
    const saved = localStorage.getItem(`course-${courseId}-progress`);
    if (saved) {
      setCompletedLessons(JSON.parse(saved));
    }
  }, [courseId]);

  const markLessonComplete = (lessonId: number) => {
    const newCompleted = [...completedLessons, lessonId];
    setCompletedLessons(newCompleted);
    localStorage.setItem(
      `course-${courseId}-progress`,
      JSON.stringify(newCompleted)
    );
  };

  if (!course) {
    return (
      <div className="flex items-center justify-center min-h-screen text-white">
        Course not found
      </div>
    );
  }

  if (courseLessons.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen text-white">
        <h1 className="mb-2 text-4xl font-bold">{course.title}</h1>
        <p className="text-xl text-gray-400">
          No lessons available for this course yet.
        </p>
      </div>
    );
  }

  const progress = (completedLessons.length / courseLessons.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i: number) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="relative px-4 py-8 mx-auto max-w-7xl">
        {/* Navigation Bar */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center mb-8 space-x-4"
        >
          <Link
            to="/courses"
            className="flex items-center px-4 py-2 space-x-2 text-sm font-medium transition-all rounded-lg text-cyan-300 bg-slate-800/30 hover:bg-slate-700/50 hover:scale-105 hover:text-cyan-200"
          >
            <FiArrowLeft className="w-4 h-4" />
            <span>Back to Courses</span>
          </Link>
          <div className="flex-1">
            {" "}
            <div className="w-full h-2 overflow-hidden rounded-full bg-slate-800/50 backdrop-blur-sm">
              <motion.div
                className="h-full bg-gradient-to-r from-cyan-500 via-purple-500 to-cyan-500 animate-gradient"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <p className="mt-2 text-sm text-gray-400">
              {completedLessons.length} of {courseLessons.length} lessons
              completed
            </p>
          </div>
        </motion.div>

        {/* Course Header */}
        <motion.div
          className="p-6 mb-8 border rounded-xl bg-gradient-to-r from-slate-800/30 via-purple-900/20 to-slate-900/30 border-cyan-500/20 backdrop-blur-sm"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="mb-3 text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
            {course.title}
          </h1>
          <p className="text-xl text-gray-300">{course.description}</p>
          <div className="flex mt-4 space-x-4">
            <div className="flex items-center text-gray-400">
              <FiClock className="w-4 h-4 mr-2" />
              <span>{courseLessons.length} lessons</span>
            </div>
            <div className="flex items-center text-gray-400">
              <FiBookOpen className="w-4 h-4 mr-2" />
              <span>Level: {course.level || "Beginner"}</span>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Main Content - Video Player */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="overflow-hidden shadow-2xl rounded-xl bg-slate-900/50 ring-1 ring-cyan-500/20 backdrop-blur-sm">
              <VideoPlayer
                url={selectedLesson.videoUrl}
                title={selectedLesson.title}
              />
              <div className="p-6">
                <h2 className="mb-2 text-2xl font-bold text-white">
                  {selectedLesson.title}
                </h2>
                <p className="mb-4 text-gray-300">
                  {selectedLesson.description}
                </p>
                <button
                  onClick={() => markLessonComplete(selectedLesson.id)}
                  disabled={completedLessons.includes(selectedLesson.id)}
                  className={`flex items-center px-4 py-2 space-x-2 text-sm font-medium transition-all rounded-lg ${
                    completedLessons.includes(selectedLesson.id)
                      ? "bg-cyan-500/20 text-cyan-300 cursor-not-allowed"
                      : "bg-purple-500/20 text-cyan-300 hover:bg-purple-500/30 hover:scale-105"
                  }`}
                >
                  <FiCheck className="w-4 h-4" />
                  <span>
                    {completedLessons.includes(selectedLesson.id)
                      ? "Completed"
                      : "Mark as Complete"}
                  </span>
                </button>
              </div>
            </div>
          </motion.div>

          {/* Lessons List */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="p-6 rounded-xl bg-slate-800/30 ring-1 ring-cyan-500/20 backdrop-blur-sm">
              <h2 className="mb-4 text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Course Content
              </h2>
              <div className="space-y-3">
                {courseLessons.map((lesson, index) => (
                  <motion.button
                    key={lesson.id}
                    className={`w-full p-4 text-left transition-all rounded-lg ${
                      selectedLesson.id === lesson.id
                        ? "bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-cyan-500/20 ring-1 ring-cyan-500/30 shadow-lg shadow-cyan-500/10"
                        : "bg-slate-800/30 hover:bg-slate-700/40 hover:ring-1 hover:ring-cyan-500/20"
                    }`}
                    onClick={() => setSelectedLesson(lesson)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-start space-x-3">
                      {" "}
                      <div
                        className={`flex items-center justify-center w-6 h-6 mt-1 text-sm rounded-full ${
                          completedLessons.includes(lesson.id)
                            ? "bg-cyan-500/20 text-cyan-400 ring-1 ring-cyan-500/30"
                            : "bg-slate-700/50 text-cyan-300/50 ring-1 ring-cyan-500/20"
                        }`}
                      >
                        {completedLessons.includes(lesson.id) ? (
                          <FiCheck className="w-4 h-4" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium text-white">
                          {lesson.title}
                        </h3>
                        <div className="flex items-center mt-1 space-x-3">
                          <span className="text-sm text-gray-400">
                            {lesson.duration}
                          </span>
                          {completedLessons.includes(lesson.id) && (
                            <span className="text-sm text-green-400">
                              Completed
                            </span>
                          )}
                        </div>
                        <p className="mt-2 text-sm text-gray-300 line-clamp-2">
                          {lesson.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};
