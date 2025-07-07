import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface MouseTrailProps {
  mousePosition: { x: number; y: number };
}

const MouseTrail: React.FC<MouseTrailProps> = ({ mousePosition }) => {
  const [trail, setTrail] = useState<Array<{ x: number; y: number; id: number }>>([]);

  useEffect(() => {
    const newPoint = {
      x: mousePosition.x,
      y: mousePosition.y,
      id: Date.now(),
    };

    setTrail(prev => [...prev.slice(-8), newPoint]);
  }, [mousePosition]);

  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {/* Main cursor glow */}
      <motion.div
        className="absolute w-8 h-8 bg-gradient-to-r from-silver-400/30 to-gold-400/30 rounded-full blur-sm"
        style={{
          left: mousePosition.x - 16,
          top: mousePosition.y - 16,
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Trail particles */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="absolute w-2 h-2 bg-gradient-to-r from-silver-300/40 to-gold-300/40 rounded-full"
          style={{
            left: point.x - 4,
            top: point.y - 4,
          }}
          initial={{ opacity: 0.6, scale: 1 }}
          animate={{ 
            opacity: 0, 
            scale: 0.5,
            x: (Math.random() - 0.5) * 20,
            y: (Math.random() - 0.5) * 20,
          }}
          transition={{ 
            duration: 1.5,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Hover effect circle */}
      <motion.div
        className="absolute w-12 h-12 border border-silver-400/20 rounded-full"
        style={{
          left: mousePosition.x - 24,
          top: mousePosition.y - 24,
        }}
        animate={{
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </div>
  );
};

export default MouseTrail;