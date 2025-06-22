import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

interface CourseCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
  level: string;
  duration: string;
}

export const CourseCard = ({ id, title, description, price, image, level, duration }: CourseCardProps) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="relative overflow-hidden border rounded-2xl backdrop-blur-sm"
      style={{        background: "rgba(255, 255, 255, 0.1)",
        borderColor: "rgba(51, 116, 157, 0.3)"
      }}
      whileHover={{ 
        y: -8,
        boxShadow: "0 20px 40px rgba(51, 116, 157, 0.2)"
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Image Section */}
      <div className="relative h-48 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: "linear-gradient(135deg, #561e8e, #047089)"
          }}
        />
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full"
        />
        
        {/* Level Badge */}
        <div className="absolute top-4 left-4">
          <span 
            className="px-3 py-1 text-xs font-bold text-white rounded-full"
            style={{ background: "rgba(51, 116, 157, 0.8)" }}
          >
            {level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="mb-2 text-xl font-bold text-white">{title}</h3>
        <p className="mb-4 text-sm text-gray-300">{description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <span className="flex items-center text-sm text-gray-400">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
            </svg>
            {duration}
          </span>
        </div>

        <div className="flex items-center justify-between">
          <span 
            className="text-2xl font-bold text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #08c9f5, #561e8e)"
            }}
          >
            ${price}
          </span>
          
          <motion.button
            className="px-6 py-2 font-semibold text-white rounded-lg"
            style={{
              background: "linear-gradient(135deg, #561e8e, #08c9f5)"
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => navigate(`/course/${id}`)}
          >
            Learn now
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};