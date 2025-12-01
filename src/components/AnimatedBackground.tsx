import { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let animationFrameId: number;
    let lines: Array<{ y: number; speed: number; offset: number }> = [];

    // Initialize scanning lines
    for (let i = 0; i < 5; i++) {
      lines.push({
        y: Math.random() * canvas.height,
        speed: 0.3 + Math.random() * 0.5,
        offset: Math.random() * 100
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw scanning lines
      lines.forEach((line) => {
        line.y += line.speed;
        if (line.y > canvas.height) line.y = -50;

        const gradient = ctx.createLinearGradient(0, line.y - 25, 0, line.y + 25);
        gradient.addColorStop(0, 'rgba(0, 255, 255, 0)');
        gradient.addColorStop(0.5, 'rgba(0, 255, 255, 0.15)');
        gradient.addColorStop(1, 'rgba(0, 255, 255, 0)');

        ctx.fillStyle = gradient;
        ctx.fillRect(0, line.y - 25, canvas.width, 50);

        // Add scanning grid effect
        ctx.strokeStyle = 'rgba(0, 255, 255, 0.05)';
        ctx.lineWidth = 1;
        for (let x = 0; x < canvas.width; x += 40) {
          ctx.beginPath();
          ctx.moveTo(x, line.y - 2);
          ctx.lineTo(x, line.y + 2);
          ctx.stroke();
        }
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 opacity-25"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default AnimatedBackground;
