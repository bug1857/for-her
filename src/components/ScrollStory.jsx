import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ScrollStory() {
  const scenes = [
    { text: "So… do you like me?", from: "me", img: "/left.png" },
    { text: "I think I do…", from: "her", img: "/right.png" },
    { text: "Think?", from: "me", img: "/left.png" },
    { text: "Okay… I really do 😊", from: "her", img: "/right.png" },
  ];

  const [visibleMessages, setVisibleMessages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [typedText, setTypedText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // 🌊 Smooth cinematic scroll effect
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, -100]); // adjust for intensity

  // 💬 Typing logic (SAFE)
  useEffect(() => {
    if (!hasStarted) return;
    if (currentIndex >= scenes.length) return;

    setIsTyping(true);
    setTypedText("");

    const fullText = scenes[currentIndex].text;
    let charIndex = 0;

    const typingDelay = setTimeout(() => {
      const typing = setInterval(() => {
        if (charIndex < fullText.length) {
          setTypedText((prev) => prev + fullText.charAt(charIndex));
          charIndex++;
        } else {
          clearInterval(typing);
          setIsTyping(false);

          setTimeout(() => {
            setVisibleMessages((prev) => [
              ...prev,
              scenes[currentIndex],
            ]);
            setCurrentIndex((prev) => prev + 1);
          }, 400);
        }
      }, 40);
    }, 700);

    return () => clearTimeout(typingDelay);
  }, [currentIndex, hasStarted]);

  return (
    <motion.div
      style={{ y }} // 🌊 slow scroll illusion
      className="min-h-screen flex flex-col items-center justify-center px-4 py-20"
      onViewportEnter={() => setHasStarted(true)}
      viewport={{ once: true, amount: 0.4 }}
    >

      {/* 💬 Chat */}
      <div className="w-full max-w-md flex flex-col space-y-3">

        {/* Existing messages */}
        {visibleMessages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`px-4 py-2 rounded-2xl text-sm shadow-md max-w-[75%] ${
              msg.from === "me"
                ? "bg-pink-500 text-white self-end"
                : "bg-gray-700 text-white self-start"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}

        {/* Typing dots */}
        {isTyping && currentIndex < scenes.length && (
          <div
            className={`px-4 py-2 rounded-2xl text-sm shadow-md max-w-[75%] ${
              scenes[currentIndex].from === "me"
                ? "bg-pink-500 text-white self-end"
                : "bg-gray-700 text-white self-start"
            }`}
          >
            <span className="flex gap-1">
              <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
              <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-150"></span>
              <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-300"></span>
            </span>
          </div>
        )}

        {/* Typing text */}
        {!isTyping && currentIndex < scenes.length && (
          <div
            className={`px-4 py-2 rounded-2xl text-sm shadow-md max-w-[75%] ${
              scenes[currentIndex].from === "me"
                ? "bg-pink-500 text-white self-end"
                : "bg-gray-700 text-white self-start"
            }`}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </div>
        )}

      </div>

      {/* 🖼 Image */}
      {currentIndex > 0 && (
        <motion.img
          key={scenes[currentIndex - 1].img}
          src={scenes[currentIndex - 1].img}
          alt="scene"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{
            opacity: 1,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{ duration: 0.6 }}
          className="mt-8 h-[260px] md:h-[320px] object-contain mix-blend-lighten drop-shadow-[0_0_40px_rgba(255,100,150,0.25)]"
        />
      )}

    </motion.div>
  );
}