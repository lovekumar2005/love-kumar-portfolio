import { useEffect, useRef } from "react";

const PARTICLE_COUNT = 55;
const CONNECTION_DISTANCE = 130;

const HeroParticles = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let animationFrame;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;

      canvas.style.width = `${window.innerWidth}px`;
      canvas.style.height = `${window.innerHeight}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    const particles = Array.from(
      { length: PARTICLE_COUNT },
      () => ({
        x:
          window.innerWidth * 0.45 +
          Math.random() * window.innerWidth * 0.55,

        y: Math.random() * window.innerHeight,

        radius: Math.random() * 1.5 + 0.6,

        speedX: (Math.random() - 0.5) * 0.25,
        speedY: (Math.random() - 0.5) * 0.25,

        opacity: Math.random() * 0.5 + 0.2,

        pulseSpeed: Math.random() * 0.02 + 0.008,
        pulseOffset: Math.random() * Math.PI * 2,
      })
    );

    const animate = (time) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

      // Update particles
      particles.forEach((particle) => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Keep particles inside the right side of the screen
        if (particle.x < window.innerWidth * 0.4) {
          particle.x = window.innerWidth * 0.95;
        }

        if (particle.x > window.innerWidth) {
          particle.x = window.innerWidth * 0.4;
        }

        if (particle.y < 0) {
          particle.y = window.innerHeight;
        }

        if (particle.y > window.innerHeight) {
          particle.y = 0;
        }

        const pulse =
          Math.sin(
            time * particle.pulseSpeed + particle.pulseOffset
          ) *
          0.25;

        const opacity = Math.max(
          0.05,
          particle.opacity + pulse
        );

        // Particle glow
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius * 4,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(22, 140, 255, ${opacity * 0.08})`;
        ctx.fill();

        // Particle
        ctx.beginPath();
        ctx.arc(
          particle.x,
          particle.y,
          particle.radius,
          0,
          Math.PI * 2
        );

        ctx.fillStyle = `rgba(22, 140, 255, ${opacity})`;
        ctx.fill();
      });

      // Connecting lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;

          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < CONNECTION_DISTANCE) {
            const opacity =
              (1 - distance / CONNECTION_DISTANCE) * 0.16;

            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);

            ctx.strokeStyle = `rgba(22, 140, 255, ${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      }

      animationFrame = requestAnimationFrame(animate);
    };

    animationFrame = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none absolute inset-0 z-0"
      aria-hidden="true"
    />
  );
};

export default HeroParticles;