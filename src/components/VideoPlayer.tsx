import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

interface VideoPlayerProps {
  url: string;
  title?: string;
}

export const VideoPlayer = ({ url, title }: VideoPlayerProps) => {
  return (
    <motion.div 
      className="overflow-hidden rounded-lg shadow-lg bg-slate-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {title && (
        <div className="p-4 text-lg font-semibold text-white">
          {title}
        </div>
      )}
      <div className="aspect-video">
        <ReactPlayer
          url={url}
          width="100%"
          height="100%"
          controls
          pip
          stopOnUnmount={false}
          style={{ backgroundColor: 'black' }}
        />
      </div>
    </motion.div>
  );
};
