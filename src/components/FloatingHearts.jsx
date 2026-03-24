import { motion } from "framer-motion";

export default function FloatingHearts() {
  const particles = Array.from({ length: 5 });

  return (
    <div className="fixed top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
      {particles.map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: "100%",
            x: Math.random() * window.innerWidth,
            opacity: 0,
            scale: 0.8,
          }}
          animate={{
            y: "-10%",
            opacity: [0, 0.15, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: 15 + Math.random() * 10,
            repeat: Infinity,
            delay: Math.random() * 5,
          }}
          className="absolute w-6 h-6 bg-pink-400 rounded-full blur-2xl"
        />
      ))}
    </div>
  );
}