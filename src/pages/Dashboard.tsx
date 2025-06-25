import { useState, useEffect } from "react";
import { courses as coursesData } from "../data/courses";
import type { Course } from "../data/courses";
import { lessons as lessonsData } from "../data/lessons";
import type { Lesson } from "../data/lessons";

export const Dashboard = () => {
  // Load from localStorage or fallback to data files
  const getInitialCourses = () => {
    const stored = localStorage.getItem("courses");
    return stored ? JSON.parse(stored) : [...coursesData];
  };
  const getInitialLessons = () => {
    const stored = localStorage.getItem("lessons");
    return stored ? JSON.parse(stored) : [...lessonsData];
  };
  const [courses, setCourses] = useState<Course[]>(getInitialCourses());
  const [lessons, setLessons] = useState<Lesson[]>(getInitialLessons());
  const [newCourse, setNewCourse] = useState({
    title: "",
    description: "",
    price: "",
    image: "",
    level: "",
    duration: "",
  });
  const [newLesson, setNewLesson] = useState({
    title: "",
    description: "",
    duration: "",
    videoUrl: "",
    courseId: courses[0]?.id || 1,
  });
  const [selectedCourseId, setSelectedCourseId] = useState<number | null>(null);

  // Add new course
  const handleAddCourse = () => {
    if (!newCourse.title.trim()) return;
    const id = Math.max(0, ...courses.map((c) => c.id)) + 1;
    const course: Course = {
      id,
      title: newCourse.title,
      description: newCourse.description,
      price: parseFloat(newCourse.price) || 0,
      image: newCourse.image,
      level: newCourse.level,
      duration: newCourse.duration,
    };
    setCourses([...courses, course]);
    setNewCourse({ title: "", description: "", price: "", image: "", level: "", duration: "" });
  };

  // Delete course
  const handleDeleteCourse = (id: number) => {
    setCourses(courses.filter((c) => c.id !== id));
    setLessons(lessons.filter((l) => l.courseId !== id));
    if (selectedCourseId === id) setSelectedCourseId(null);
  };

  // Add lesson to selected course
  const handleAddLesson = () => {
    if (!newLesson.title.trim() || !newLesson.courseId) return;
    const id = Math.max(0, ...lessons.map((l) => l.id)) + 1;
    const lesson: Lesson = {
      id,
      courseId: newLesson.courseId,
      title: newLesson.title,
      description: newLesson.description,
      duration: newLesson.duration,
      videoUrl: newLesson.videoUrl,
    };
    setLessons([...lessons, lesson]);
    setNewLesson({ ...newLesson, title: "", description: "", duration: "", videoUrl: "" });
  };

  // Persist to localStorage whenever courses or lessons change
  useEffect(() => {
    localStorage.setItem("courses", JSON.stringify(courses));
  }, [courses]);
  useEffect(() => {
    localStorage.setItem("lessons", JSON.stringify(lessons));
  }, [lessons]);

  // Define color variations for better readability and hierarchy
  const primaryColor = "#561A8C"; // Main accent
  const darkPurple = "#3A105F"; // Darker background for sections
  const textLight = "#E0E0E0"; // Light text on dark backgrounds
  const inputBg = "#4B157A"; // Slightly lighter input background
  const inputBorder = "#7A3DAF"; // Input border color
  const selectedItemBg = "#7A3DAF"; // Background for selected course

  return (
    <div
      className="min-h-screen p-8 text-white"
      style={{
        background: `linear-gradient(to bottom right, ${darkPurple}, ${primaryColor})`,
      }}
    >
      <div className="container px-4 py-8 mx-auto rounded-lg shadow-2xl" style={{ backgroundColor: darkPurple }}>
        <h1 className="mb-10 text-5xl font-extrabold tracking-tight text-center" style={{ color: textLight }}>
          Admin Dashboard
        </h1>

        {/* Add Course */}
        <div className="p-8 mb-12 shadow-lg rounded-xl" style={{ backgroundColor: darkPurple }}>
          <h2 className="pb-4 mb-8 text-3xl font-bold border-b" style={{ color: primaryColor, borderColor: inputBg }}>
            Add New Course
          </h2>
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
            <input
              type="text"
              placeholder="Title"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newCourse.title}
              onChange={(e) => setNewCourse({ ...newCourse, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newCourse.description}
              onChange={(e) => setNewCourse({ ...newCourse, description: e.target.value })}
            />
            <input
              type="number"
              placeholder="Price"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newCourse.price}
              onChange={(e) => setNewCourse({ ...newCourse, price: e.target.value })}
            />
            <input
              type="text"
              placeholder="Image URL"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newCourse.image}
              onChange={(e) => setNewCourse({ ...newCourse, image: e.target.value })}
            />
            <input
              type="text"
              placeholder="Level"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newCourse.level}
              onChange={(e) => setNewCourse({ ...newCourse, level: e.target.value })}
            />
            <input
              type="text"
              placeholder="Duration"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newCourse.duration}
              onChange={(e) => setNewCourse({ ...newCourse, duration: e.target.value })}
            />
          </div>
          <button
            className="w-full px-8 py-3 text-xl font-bold text-white transition-all duration-300 transform rounded-lg shadow-md md:w-auto hover:shadow-xl hover:-translate-y-1"
            style={{ backgroundColor: primaryColor }}
            onClick={handleAddCourse}
          >
            Add Course
          </button>
        </div>

        {/* Course List */}
        <div className="p-8 mb-12 shadow-lg rounded-xl" style={{ backgroundColor: darkPurple }}>
          <h2 className="pb-4 mb-8 text-3xl font-bold border-b" style={{ color: primaryColor, borderColor: inputBg }}>
            Courses
          </h2>
          <ul className="space-y-4">
            {courses.map((course) => (
              <li
                key={course.id}
                className={`flex flex-col sm:flex-row items-center justify-between p-5 rounded-lg shadow-md transition-all duration-300 cursor-pointer ${selectedCourseId === course.id ? "ring-2 ring-offset-2" : "hover:scale-[1.01]"}`}
                style={
                  selectedCourseId === course.id
                    ? { backgroundColor: selectedItemBg, borderColor: primaryColor, color: textLight }
                    : { backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }
                }
                onClick={() => setSelectedCourseId(course.id)}
              >
                <span className="mb-2 text-xl font-semibold sm:mb-0">{course.title}</span>
                <button
                  className="px-6 py-2 mt-2 text-white transition-colors duration-300 bg-red-600 rounded-md shadow-sm hover:bg-red-700 sm:mt-0"
                  onClick={(e) => {
                    e.stopPropagation(); // Prevent selecting the course when deleting
                    handleDeleteCourse(course.id);
                  }}
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Add Lesson to Any Course */}
        <div className="p-8 mb-12 shadow-lg rounded-xl" style={{ backgroundColor: darkPurple }}>
          <h2 className="pb-4 mb-8 text-3xl font-bold border-b" style={{ color: primaryColor, borderColor: inputBg }}>
            Add Lesson to Course
          </h2>
          <div className="grid grid-cols-1 gap-6 mb-8 md:grid-cols-2 lg:grid-cols-3">
            <select
              className="w-full px-5 py-3 text-lg rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newLesson.courseId}
              onChange={(e) => setNewLesson({ ...newLesson, courseId: Number(e.target.value) })}
            >
              {courses.map((course) => (
                <option key={course.id} value={course.id}>
                  {course.title}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Lesson Title"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newLesson.title}
              onChange={(e) => setNewLesson({ ...newLesson, title: e.target.value })}
            />
            <input
              type="text"
              placeholder="Description"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newLesson.description}
              onChange={(e) => setNewLesson({ ...newLesson, description: e.target.value })}
            />
            <input
              type="text"
              placeholder="Duration"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newLesson.duration}
              onChange={(e) => setNewLesson({ ...newLesson, duration: e.target.value })}
            />
            <input
              type="text"
              placeholder="Video URL"
              className="w-full px-5 py-3 text-lg placeholder-gray-400 rounded-lg focus:ring-2 focus:ring-purple-300 focus:border-transparent"
              style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}
              value={newLesson.videoUrl}
              onChange={(e) => setNewLesson({ ...newLesson, videoUrl: e.target.value })}
            />
          </div>
          <button
            className="w-full px-8 py-3 text-xl font-bold text-white transition-colors duration-300 transform bg-green-600 rounded-lg shadow-md md:w-auto hover:bg-green-700 hover:-translate-y-1"
            onClick={handleAddLesson}
          >
            Add Lesson
          </button>
        </div>

        {/* List lessons for selected course */}
        {selectedCourseId && (
          <div className="p-8 shadow-lg rounded-xl" style={{ backgroundColor: darkPurple }}>
            <h2 className="pb-4 mb-8 text-3xl font-bold border-b" style={{ color: primaryColor, borderColor: inputBg }}>
              Lessons for{" "}
              <span style={{ color: textLight }}>
                {courses.find((c) => c.id === selectedCourseId)?.title}
              </span>
            </h2>
            <ul className="space-y-4">
              {lessons
                .filter((l) => l.courseId === selectedCourseId)
                .map((lesson) => (
                  <li key={lesson.id} className="p-5 rounded-lg shadow-sm" style={{ backgroundColor: inputBg, color: textLight, border: `1px solid ${inputBorder}` }}>
                    <p className="mb-1 text-xl font-medium">{lesson.title}</p>
                    {lesson.description && (
                      <p className="mb-1 text-base text-gray-300">{lesson.description}</p>
                    )}
                    {lesson.duration && (
                      <p className="mb-1 text-sm text-gray-400">Duration: {lesson.duration}</p>
                    )}
                    {lesson.videoUrl && (
                      <a href={lesson.videoUrl} target="_blank" rel="noopener noreferrer" className="text-base text-blue-400 hover:underline">
                        Watch Video
                      </a>
                    )}
                  </li>
                ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};