import { motion } from "framer-motion";

const particles = [
  { x: "5%", y: "12%", size: 4, duration: 8, delay: 0 },
  { x: "13%", y: "32%", size: 3, duration: 10, delay: 1 },
  { x: "21%", y: "72%", size: 5, duration: 9, delay: 2 },
  { x: "30%", y: "18%", size: 3, duration: 11, delay: 0.5 },
  { x: "38%", y: "56%", size: 4, duration: 8, delay: 1.5 },
  { x: "46%", y: "29%", size: 3, duration: 10, delay: 2.5 },
  { x: "54%", y: "82%", size: 5, duration: 9, delay: 0.8 },
  { x: "62%", y: "13%", size: 3, duration: 8, delay: 1.2 },
  { x: "69%", y: "45%", size: 4, duration: 10, delay: 2 },
  { x: "76%", y: "74%", size: 3, duration: 7, delay: 0.4 },
  { x: "83%", y: "22%", size: 5, duration: 9, delay: 1.8 },
  { x: "90%", y: "57%", size: 3, duration: 11, delay: 2.8 },
  { x: "96%", y: "34%", size: 4, duration: 8, delay: 1 },

  { x: "9%", y: "88%", size: 3, duration: 10, delay: 3 },
  { x: "27%", y: "44%", size: 4, duration: 8, delay: 1.4 },
  { x: "43%", y: "67%", size: 3, duration: 12, delay: 0.7 },
  { x: "57%", y: "52%", size: 4, duration: 9, delay: 2.2 },
  { x: "72%", y: "91%", size: 3, duration: 10, delay: 1.6 },
  { x: "86%", y: "10%", size: 4, duration: 8, delay: 2.4 },
  { x: "97%", y: "80%", size: 3, duration: 11, delay: 0.3 },
];

const AboutParticles = () => {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      {particles.map((particle, index) => (
        <motion.span
          key={index}
          animate={{
            x: [0, 15, -10, 0],
            y: [0, -20, 12, 0],
            opacity: [0.3, 0.75, 0.4, 0.3],
            scale: [1, 1.2, 0.9, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            rounded-full
            bg-[#168cff]
            shadow-[0_0_8px_rgba(22,140,255,0.7)]
          "
          style={{
            left: particle.x,
            top: particle.y,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
        />
      ))}
    </div>
  );
};

export default AboutParticles;