import { motion } from "framer-motion";

export default function FinalMoment() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-6">

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg text-gray-300"
      >
        And somehow…
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
        className="text-2xl md:text-3xl text-white mt-4 font-semibold"
      >
        you became someone important to me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="mt-6 text-gray-400 text-sm"
      >
        in a way I didn’t expect…
      </motion.p>

    </div>
  );
}