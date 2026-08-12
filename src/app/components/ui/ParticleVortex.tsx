import React, { useEffect, useRef } from 'react';

export const ParticleVortex: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const isMobile = window.matchMedia('(max-width: 767px)').matches;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1.5 : 2);

    let animationFrameId: number = 0;
    let resizeRafId: number = 0;
    let running = false;
    let particleCount = 0;
    let viewportW = 0;
    let viewportH = 0;
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
      particleCount = count;
      particles = [];
      for (let i = 0; i < count; i++) {
        particles.push(new Particle(viewportW, viewportH));
      }
    };

    const drawEnergyRing = (ctx: CanvasRenderingContext2D, centerX: number, y: number, radiusX: number, radiusY: number) => {
      ctx.beginPath();
      ctx.ellipse(centerX, y, radiusX, radiusY, 0, 0, Math.PI * 2);

      // shadowBlur is extremely expensive on mobile GPUs; plain stroke on mobile
      if (isMobile) {
        ctx.strokeStyle = 'rgba(6, 182, 212, 0.5)';
        ctx.lineWidth = 1.5;
        ctx.stroke();
        return;
      }

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
      if (!running) return;
      // Clear with slight trail effect is too expensive, standard clear is better for 60fps
      ctx.clearRect(0, 0, viewportW, viewportH);

      const centerX = viewportW / 2;
      const h = viewportH;
      const ringRadiusX = viewportW * 0.35 + 20;
      const ringRadiusY = ringRadiusX * 0.12;

      // Draw top and bottom rings
      drawEnergyRing(ctx, centerX, h * 0.1, ringRadiusX, ringRadiusY);
      drawEnergyRing(ctx, centerX, h * 0.9, ringRadiusX, ringRadiusY);

      if (!isMobile) {
        // Sort particles by Z so ones in back render first (simple painter's algorithm)
        // Math.sin(angle) gives Z position
        particles.sort((a, b) => Math.sin(a.angle) - Math.sin(b.angle));
      }

      particles.forEach(p => {
        p.update(viewportW, h);
        p.draw(ctx, centerX, viewportW, h);
      });

      // Reset alpha
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(animate);
    };

    const setSize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      const { width, height } = parent.getBoundingClientRect();
      if (width === 0 || height === 0) return;

      viewportW = width;
      viewportH = height;

      canvas.style.width = width + 'px';
      canvas.style.height = height + 'px';

      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const area = width * height;
      const density = isMobile ? 0.0004 : 0.0015;
      const min = isMobile ? 40 : 600;
      const max = isMobile ? 150 : 3500;
      const targetCount = Math.max(min, Math.min(max, Math.floor(area * density)));

      if (targetCount !== particleCount) {
        initParticles(targetCount);
      }
    };

    const scheduleResize = () => {
      cancelAnimationFrame(resizeRafId);
      resizeRafId = requestAnimationFrame(setSize);
    };

    const resizeObserver = new ResizeObserver(scheduleResize);

    if (canvas.parentElement) {
      resizeObserver.observe(canvas.parentElement);
    }

    const handleVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(animationFrameId);
      } else if (!running) {
        running = true;
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (prefersReducedMotion) {
      const parent = canvas.parentElement;
      const width = parent?.getBoundingClientRect().width || window.innerWidth;
      const height = parent?.getBoundingClientRect().height || window.innerHeight;
      viewportW = width;
      viewportH = height;
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.max(isMobile ? 20 : 80, Math.min(isMobile ? 80 : 500, Math.floor((width * height) * 0.0002)));
      initParticles(count);
      const centerX = viewportW / 2;
      particles.forEach(p => p.draw(ctx, centerX, viewportW, viewportH));
    } else {
      document.addEventListener('visibilitychange', handleVisibility);
      setSize();
      running = true;
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      running = false;
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      cancelAnimationFrame(resizeRafId);
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full z-0 pointer-events-none"
    />
  );
};