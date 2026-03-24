import Hero from "./components/Hero";
import ScrollStory from "./components/ScrollStory";
import Ending from "./components/Ending";
import SoftParticles from "./components/SoftParticles";
import FinalMoment from "./components/FinalMoment";

function App() {
  return (
    <div className="bg-gradient-to-b from-black via-[#0a0a0a] to-black text-white">

      {/* Background Glow */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute w-[500px] h-[500px] bg-pink-500 opacity-20 blur-[120px] rounded-full top-[-100px] left-[-100px] animate-pulse"></div>
        <div className="absolute w-[400px] h-[400px] bg-purple-500 opacity-20 blur-[120px] rounded-full bottom-[-100px] right-[-100px] animate-pulse"></div>
      </div>

      <SoftParticles />

      <Hero />
      <ScrollStory />
      <FinalMoment />
      <Ending />

    </div>
  );
}

export default App;