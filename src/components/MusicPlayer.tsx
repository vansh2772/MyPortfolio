import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX, Music, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import mySong from '../assets/mysong.mp3';

const MUSIC_URL = mySong;

const MusicPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.1);
  const [isExpanded, setIsExpanded] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
      audioRef.current.loop = true;
      if (isPlaying) {
        audioRef.current.play().catch(() => {});
      }
    }
  }, [volume, isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Audio play failed:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <motion.div 
      className="fixed bottom-6 left-6 z-50"
      initial={{ opacity: 0, scale: 0.8, x: -100 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
    >
      <audio
        ref={audioRef}
        preload="auto"
        src={MUSIC_URL}
        autoPlay
        onEnded={() => setIsPlaying(false)}
        onLoadedData={() => setIsPlaying(true)}
      />
      
      <motion.div
        className="bg-slate-950/80 backdrop-blur-xl rounded-2xl border border-silver-200/20 shadow-2xl overflow-hidden"
        whileHover={{ scale: 1.02 }}
        onHoverStart={() => setIsExpanded(true)}
        onHoverEnd={() => setIsExpanded(false)}
      >
        <div className="p-4">
          <div className="flex items-center space-x-3">
            {/* Music Icon with Animation */}
            <motion.div
              className="p-2 rounded-full bg-gradient-to-r from-silver-500/20 to-gold-500/20"
              animate={isPlaying ? { rotate: 360 } : { rotate: 0 }}
              transition={{ duration: 4, repeat: isPlaying ? Infinity : 0, ease: "linear" }}
            >
              <Music size={20} className="text-gold-400" />
            </motion.div>

            {/* Play/Pause Button */}
            <motion.button
              onClick={togglePlay}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 rounded-full bg-gradient-to-r from-silver-600 to-gold-600 hover:from-silver-500 hover:to-gold-500 transition-all duration-300 shadow-lg group relative overflow-hidden flex items-center space-x-2"
              aria-label={isPlaying ? 'Pause music' : 'Resume music'}
            >
              <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
              <motion.div
                animate={isPlaying ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                transition={{ duration: 0.6, repeat: isPlaying ? Infinity : 0 }}
                className="relative z-10 flex items-center space-x-2"
              >
                {isPlaying ? (
                  <>
                    <Pause size={18} />
                    <span className="ml-1">Pause</span>
                  </>
                ) : (
                  <>
                    <Play size={18} />
                    <span className="ml-1">Resume</span>
                  </>
                )}
              </motion.div>
            </motion.button>

            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: "auto" }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex items-center space-x-3"
                >
                  {/* Mute Button */}
                  <motion.button
                    onClick={toggleMute}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="p-2 rounded-full bg-silver-500/20 hover:bg-silver-500/30 transition-all duration-300"
                    aria-label={isMuted ? 'Unmute' : 'Mute'}
                  >
                    {isMuted ? (
                      <VolumeX size={16} className="text-silver-400" />
                    ) : (
                      <Volume2 size={16} className="text-silver-400" />
                    )}
                  </motion.button>
                  
                  {/* Volume Slider */}
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="1"
                      step="0.1"
                      value={volume}
                      onChange={(e) => setVolume(parseFloat(e.target.value))}
                      className="w-20 h-2 bg-white/20 rounded-lg appearance-none cursor-pointer slider"
                    />
                    <div 
                      className="absolute top-0 left-0 h-2 bg-gradient-to-r from-silver-500 to-gold-500 rounded-lg pointer-events-none"
                      style={{ width: `${volume * 100}%` }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Visualizer Effect */}
        {isPlaying && (
          <div className="flex justify-center space-x-1 pb-2">
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="w-1 bg-gradient-to-t from-silver-500 to-gold-500 rounded-full"
                animate={{
                  height: [4, 12, 4],
                  opacity: [0.4, 1, 0.4],
                }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  delay: i * 0.1,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>
        )}
      </motion.div>
    </motion.div>
  );
};

export default MusicPlayer;