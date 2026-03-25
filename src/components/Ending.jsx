import { motion } from "framer-motion";
import { useState, useRef } from "react";
import confetti from "canvas-confetti";

export default function Ending() {
  const [clicked, setClicked] = useState(false);
  const [scale, setScale] = useState(1);
  const audioRef = useRef(null);

  const fireConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.6 },
      colors: ["#ff4d8d", "#ffffff", "#ff85a2"],
    });
  };

  const handleClick = () => {
    fireConfetti();

    // 📳 Vibration (mobile)
    if (navigator.vibrate) {
      navigator.vibrate(50);
    }

    if (!clicked) setClicked(true);

    // ❤️ Grow heart
    setScale((prev) => Math.min(prev + 0.15, 3));

    // 🎵 Optional: boost music slightly
    if (audioRef.current) {
      audioRef.current.volume = 0.6;
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative">

      {/* 🌫 Freeze overlay */}
      {scale > 1.8 && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-10"></div>
      )}

      {/* Content */}
      <div className="relative z-20">

        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-2xl md:text-3xl text-pink-400 mb-6"
        >
          So yeah…
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-base md:text-lg text-gray-300"
        >
          I didn’t expect all this in just a few days
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="text-lg md:text-xl mt-4 mb-10"
        >
          But I’m really glad it happened… with you ❤️
        </motion.p>

        {/* Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={handleClick}
          className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl text-lg shadow-lg"
        >
          {!clicked ? (
            "Continue?"
          ) : (
            <motion.span
              animate={{
                scale: [scale, scale + 0.1, scale],
              }}
              transition={{
                duration: 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="inline-block"
            >
              ❤️
            </motion.span>
          )}
        </motion.button>

        {/* 💖 FINAL MESSAGE */}
        {scale > 1.8 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-lg text-white"
          >
            I think… I’m really falling for you ❤️
          </motion.div>
        )}

      </div>

      {/* 🎵 Hidden audio ref (optional control) */}
      <audio ref={audioRef} />

    </div>
  );
}