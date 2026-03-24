import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

export default function Hero() {
  const audioRef = useRef();

  useEffect(() => {
    const playAudio = () => {
      audioRef.current.play().catch(() => {});
    };

    window.addEventListener("click", playAudio, { once: true });

    return () => {
      window.removeEventListener("click", playAudio);
    };
  }, []);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden">
      
      <div className="absolute w-[300px] h-[300px] bg-pink-500 opacity-20 blur-3xl rounded-full"></div>

      <motion.h1 
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-3xl md:text-6xl font-bold leading-tight"
      >
        It’s only been 15 days…
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-4 text-base md:text-lg text-gray-300"
      >
        But I didn’t expect this.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-6 text-pink-400"
      >
        So I made something for you ✨
      </motion.p>

      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

    </div>
  );
}