import { useState } from "react";

export default function Messages() {
  const [show, setShow] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      
      <button 
        onClick={() => setShow(!show)}
        className="bg-pink-500 hover:bg-pink-600 transition px-6 py-3 rounded-xl shadow-lg"
      >
        Don’t click this 👀
      </button>

      {show && (
        <div className="mt-8 space-y-3 text-gray-300 animate-fadeIn">
          <p>You’re easy to talk to</p>
          <p>You make normal moments better</p>
          <p>I like your vibe more than I expected</p>
        </div>
      )}

    </div>
  );
}