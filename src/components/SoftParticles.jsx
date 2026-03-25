export default function SoftParticles() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      {[...Array(15)].map((_, i) => (
        <span
          key={i}
          className="absolute w-1 h-1 bg-white/20 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  );
}