import { motion } from "framer-motion";

const messages = [
  { from: "her", text: "Do you like me?" },
  { from: "me", text: "I think I do..." },
  { from: "her", text: "Think?" },
  { from: "me", text: "Okay... I really do 😄" },
];

export default function AvatarChat() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4">
      
      {/* Heading */}
      <h2 className="text-3xl mb-12 text-pink-400">
        Just Us Talking
      </h2>

      {/* Chat Section */}
      <div className="flex flex-col items-center space-y-3 mb-10">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.6 }}
            className={`px-4 py-2 rounded-xl text-sm max-w-xs ${
              msg.from === "me"
                ? "bg-pink-500 text-white ml-auto"
                : "bg-gray-700 text-white mr-auto"
            }`}
          >
            {msg.text}
          </motion.div>
        ))}
      </div>

      {/* Avatar */}
      <motion.img
        src="/talk.png"
        alt="us"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="h-[350px] object-contain"
      />

    </div>
  );
}