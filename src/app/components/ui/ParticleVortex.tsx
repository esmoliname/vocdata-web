import React, { useEffect, useRef } from 'react';

export const ParticleVortex: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    
    class Particle {
      angle: number;
      radius: number;
      y: number;
      speedY: number;
      speedAngle: number;
      size: number;
      opacity: number;
      color: string;

      constructor(w: number, h: number) {
        this.angle = Math.random() * Math.PI * 2;
        // Distribute particles in a cylindrical vortex shape, slightly wider at top/bottom
        const baseRadius = Math.random() * (w * 0.25) + (w * 0.02);
        this.radius = baseRadius;
        this.y = Math.random() * h;
        // Velocity upwards and downwards depending on start, or just one direction.
        // Let's make half go up, half go down to simulate flow
        this.speedY = (Math.random() > 0.5 ? 1 : -1) * (Math.random() * 2 + 0.5);
        this.speedAngle = (Math.random() * 0.01) + 0.005;
        this.size = Math.random() * 1.5 + 0.5;
        this.opacity = Math.random() * 0.6 + 0.2;
        
        const colors = ['#06b6d4', '#0ea5e9', '#38bdf8', '#7dd3fc', '#ffffff']; // Cyan and light blue
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update(w: number, h: number) {
        this.angle += this.speedAngle;
        this.y += this.speedY;

        // Wrap vertically
        if (this.y < -50) this.y = h + 50;
        if (this.y > h + 50) this.y = -50;
      }

      draw(ctx: CanvasRenderingContext2D, centerX: number, w: number, h: number) {
        // Apply an hourglass/vortex shape modifier based on Y position
        const yDistFromCenter = Math.abs(this.y - h/2) / (h/2); // 0 at center, 1 at edges
        const radiusModifier = 1 + (yDistFromCenter * 0.5); // Wider at top and bottom
        
        const currentRadius = this.radius * radiusModifier;
        const x = centerX + Math.cos(this.angle) * currentRadius;
        
        // Pseudo 3D perspective
        const z = Math.sin(this.angle); // -1 (back) to 1 (front)
        const perspectiveSize = this.size * (0.8 + z * 0.4);
        const perspectiveOpacity = this.opacity * (0.4 + z * 0.6);

        ctx.beginPath();
        ctx.arc(x, this.y, Math.max(0.1, perspectiveSize), 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.globalAlpha = perspectiveOpacity;
        ctx.fill();
      }
    }

    const initParticles = (count: number) => {
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const drawEnergyRing = (ctx: CanvasRenderingContext2D, centerX: number, y: number, radiusX: number, radiusY: number) => {
      ctx.beginPath();
      ctx.ellipse(centerX, y, radiusX, radiusY, 0, 0, Math.PI * 2);
      
      // Glow effect
      ctx.shadowBlur = 30;
      ctx.shadowColor = '#06b6d4'; // Cyan
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
      ctx.lineWidth = 3;
      ctx.stroke();
      
      // Core bright line
      ctx.shadowBlur = 10;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.lineWidth = 1;
      ctx.stroke();
      
      ctx.shadowBlur = 0;
    };

    const animate = () => {
      // Clear with slight trail effect is too expensive, standard clear is better for 60fps
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const centerX = canvas.width / 2;
      const h = canvas.height;
      const ringRadiusX = canvas.width * 0.35 + 20;
      const ringRadiusY = ringRadiusX * 0.12;

      // Draw top and bottom rings
      drawEnergyRing(ctx, centerX, h * 0.1, ringRadiusX, ringRadiusY);
      drawEnergyRing(ctx, centerX, h * 0.9, ringRadiusX, ringRadiusY);

      // Sort particles by Z so ones in back render first (simple painter's algorithm)
      // Math.sin(angle) gives Z position
      particles.sort((a, b) => Math.sin(a.angle) - Math.sin(b.angle));

      particles.forEach(p => {
        p.update(canvas.width, h);
        p.draw(ctx, centerX, canvas.width, h);
      });

      // Reset alpha
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(animate);
    };

    const resizeObserver = new ResizeObserver((entries) => {
      if (entries.length > 0) {
        const { width, height } = entries[0].contentRect;
        
        // Standard logical width/height
        canvas.style.width = width + 'px';
        canvas.style.height = height + 'px';
        
        // Actual canvas internal dimensions
        canvas.width = width;
        canvas.height = height;
        
        const area = width * height;
        // Dynamic particle count: Mobile ~1000, Desktop ~3000
        const density = 0.0015; 
        const targetCount = Math.max(800, Math.min(3500, Math.floor(area * density)));
        
        initParticles(targetCount);
      }
    });
    
    if (canvas.parentElement) {
       resizeObserver.observe(canvas.parentElement);
    }
    
    animate();

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};
