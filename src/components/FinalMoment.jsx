import { motion } from "framer-motion";

export default function FinalMoment() {
  return (
    <div className="h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-300"
      >
        And somehow…
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
        className="text-3xl md:text-4xl text-pink-400 mt-4"
      >
        you became important to me.
      </motion.h2>

    </div>
  );
}