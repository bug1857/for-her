import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const scenes = [
  {
    text: "8th March… we just met.",
    from: "her",
    img: "/talk.png",
  },
  {
    text: "Didn’t think much of it back then.",
    from: "me",
    img: "/talk.png",
  },
  {
    text: "But somehow… we kept talking.",
    from: "me",
    img: "/sit.png",
  },
  {
    text: "21st March… I told you how I felt.",
    from: "me",
    img: "/sit.png",
  },
  {
    text: "And 23rd March… we became something real ❤️",
    from: "me",
    img: "/walk.png",
  },
];

export default function ScrollStory() {
  return (
    <div className="h-[500vh]">
      {scenes.map((scene, i) => (
        <section
          key={i}
          className="h-screen flex flex-col items-center justify-center sticky top-0 px-4 backdrop-blur-[2px]"
        >
          
          <TypingText
            text={scene.text}
            from={scene.from}
            isLast={i === scenes.length - 1}
          />

          <motion.img
            src={scene.img}
            alt="scene"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: i === scenes.length - 1 ? 1.08 : 1 }}
            transition={{ duration: 0.6 }}
            className="h-[250px] md:h-[350px] object-contain mt-6"
          />

        </section>
      ))}
    </div>
  );
}

function TypingText({ text, from, isLast }) {
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    let i = 0;
    setDisplayed("");

    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;

      if (i >= text.length) clearInterval(interval);
    }, 35);

    return () => clearInterval(interval);
  }, [text]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`mb-4 px-6 py-3 rounded-xl text-base md:text-lg max-w-[85%] ${
        from === "me"
          ? "bg-pink-500 text-white"
          : "bg-gray-700 text-white"
      } ${isLast ? "scale-105 shadow-xl shadow-pink-500/40" : ""}`}
    >
      {displayed}
    </motion.div>
  );
}