import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const audioRef = useRef(null);

  // ✍️ FIXED TEXT (normal apostrophe)
  const fullText =
    "It's only been 15 days… but it already feels different";

  const [displayText, setDisplayText] = useState("");

  // ✍️ Typing effect (stable + reset safe)
  useEffect(() => {
    let i = 0;
    setDisplayText(""); // 🔥 reset

    const typing = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(i));
        i++;
      } else {
        clearInterval(typing);
      }
    }, 45); // speed (lower = faster)

    return () => clearInterval(typing);
  }, [fullText]);

  // 🎵 Audio fade-in (mobile safe)
  useEffect(() => {
    let fadeInterval;

    const playAudio = () => {
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = 0;

      audio
        .play()
        .then(() => {
          fadeInterval = setInterval(() => {
            if (audio.volume < 0.4) {
              audio.volume = Math.min(audio.volume + 0.02, 0.4);
            } else {
              clearInterval(fadeInterval);
            }
          }, 100);
        })
        .catch(() => {});
    };

    window.addEventListener("touchstart", playAudio, { once: true });
    window.addEventListener("click", playAudio, { once: true });
    window.addEventListener("scroll", playAudio, { once: true });

    return () => {
      window.removeEventListener("touchstart", playAudio);
      window.removeEventListener("click", playAudio);
      window.removeEventListener("scroll", playAudio);
      if (fadeInterval) clearInterval(fadeInterval);
    };
  }, []);

  return (
    <motion.div
      className="h-screen flex flex-col justify-center items-center text-center px-6 relative overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
    >
      {/* 🌌 Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-pink-500 opacity-20 blur-[120px] rounded-full animate-[pulse_6s_infinite]" />
      <div className="absolute w-[300px] h-[300px] bg-purple-500 opacity-10 blur-[100px] rounded-full animate-[pulse_8s_infinite]" />

      {/* 🎬 Content */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="z-10 max-w-3xl"
      >
        {/* ✍️ Heading */}
        <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
          {displayText}
          <span className="animate-pulse">|</span>
        </h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4 text-base md:text-lg text-gray-300"
        >
          But I didn’t expect this.
        </motion.p>

        {/* Highlight */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
          className="mt-6 text-pink-400"
        >
          So I made something for you ✨
        </motion.p>

        {/* Hint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="text-xs text-gray-500 mt-8"
        >
          tap anywhere…
        </motion.p>
      </motion.div>

      {/* 🎵 Audio */}
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>
    </motion.div>
  );
}