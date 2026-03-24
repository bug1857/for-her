import { motion } from "framer-motion";

const days = [
  "Day 1 — Didn’t know you’d matter this much",
  "Day 3 — Started waiting for your texts",
  "Day 7 — You became part of my routine",
  "Day 10 — I noticed the little things",
  "Day 15 — And here we are"
];

export default function Timeline() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      
      <h2 className="text-3xl mb-12 text-pink-400">
        Our 15 Days
      </h2>

      <div className="space-y-6">
        {days.map((day, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-4 rounded-xl shadow-lg"
          >
            {day}
          </motion.div>
        ))}
      </div>

    </div>
  );
}