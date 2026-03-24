export default function SoftParticles() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white/30 rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}
    </div>
  );
}