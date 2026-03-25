import { useEffect } from "react";
import Lenis from "lenis";

import Hero from "./components/Hero";
import ScrollStory from "./components/ScrollStory";
import FinalMoment from "./components/FinalMoment";
import Ending from "./components/Ending";

function App() {
  useEffect(() => {
    // 🌊 Smooth scroll (friction feel)
    const lenis = new Lenis({
      duration: 1.4, // 🔥 increase for more heavy feel (1.6–1.8)
      smoothWheel: true,
      smoothTouch: true,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // 📳 Mobile vibration on scroll (Android only)
    let lastVibrate = 0;

    const handleTouchMove = () => {
      const now = Date.now();

      if (navigator.vibrate && now - lastVibrate > 120) {
        navigator.vibrate(10); // 🔥 adjust strength (8–20)
        lastVibrate = now;
      }
    };

    window.addEventListener("touchmove", handleTouchMove);

    return () => {
      lenis.destroy();
      window.removeEventListener("touchmove", handleTouchMove);
    };
  }, []);

  const herName = "Ananya"; // 💖 CHANGE THIS

  return (
    <div className="bg-black text-white overflow-x-hidden">

      <Hero />
      <ScrollStory />
      <FinalMoment />
      <Ending name={herName} />

    </div>
  );
}

export default App;