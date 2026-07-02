'use client';

import { useEffect, useRef } from 'react';

export default function TechAnimation() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    interface ParticleInstance {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colorIndex: number;
      update: () => void;
      draw: (isDark: boolean) => void;
    }

    // Modern vibrant color palettes tailored for light and dark backgrounds
    const PARTICLE_COLORS_LIGHT = [
      'hsla(195, 85%, 45%, opacity)', // Vivid Cyan/Teal
      'hsla(220, 90%, 50%, opacity)', // Electric Blue
      'hsla(265, 80%, 52%, opacity)', // Royal Purple
      'hsla(295, 80%, 48%, opacity)', // Magenta
      'hsla(335, 85%, 48%, opacity)', // Deep Rose Pink
    ];

    const PARTICLE_COLORS_DARK = [
      'hsla(195, 100%, 65%, opacity)', // Neon Cyan/Teal glow
      'hsla(220, 100%, 70%, opacity)', // Neon Blue glow
      'hsla(265, 100%, 72%, opacity)', // Vibrant Purple glow
      'hsla(295, 95%, 68%, opacity)',  // Vibrant Magenta glow
      'hsla(335, 100%, 68%, opacity)', // Vibrant Pink glow
    ];

    const particles: ParticleInstance[] = [];
    const particleCount = Math.min(65, Math.floor((width * height) / 7500));

    class Particle implements ParticleInstance {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      colorIndex: number;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        // Slow organic drift speeds
        this.vx = (Math.random() - 0.5) * 0.5;
        this.vy = (Math.random() - 0.5) * 0.5;
        this.radius = Math.random() * 2.2 + 1.5; // Slightly larger for better glow & visibility
        this.colorIndex = Math.floor(Math.random() * PARTICLE_COLORS_LIGHT.length);
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce at boundaries with clamping to prevent getting stuck offscreen on resize
        if (this.x < 0) {
          this.x = 0;
          this.vx = Math.abs(this.vx);
        } else if (this.x > width) {
          this.x = width;
          this.vx = -Math.abs(this.vx);
        }

        if (this.y < 0) {
          this.y = 0;
          this.vy = Math.abs(this.vy);
        } else if (this.y > height) {
          this.y = height;
          this.vy = -Math.abs(this.vy);
        }
      }

      draw(isDark: boolean) {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        
        const baseColor = isDark
          ? PARTICLE_COLORS_DARK[this.colorIndex].replace('opacity', '0.85')
          : PARTICLE_COLORS_LIGHT[this.colorIndex].replace('opacity', '0.75');
          
        ctx.fillStyle = baseColor;
        ctx.fill();

        // Add soft halo glow in dark theme
        if (isDark) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 2.5, 0, Math.PI * 2);
          ctx.fillStyle = PARTICLE_COLORS_DARK[this.colorIndex].replace('opacity', '0.18');
          ctx.fill();
        }
      }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      particles.push(new Particle());
    }

    // Interactive mouse trackers
    const mouse = { x: -1000, y: -1000, radius: 160 };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = -1000;
      mouse.y = -1000;
    };

    canvas.addEventListener('mousemove', handleMouseMove);
    canvas.addEventListener('mouseleave', handleMouseLeave);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const drawLoop = () => {
      ctx.clearRect(0, 0, width, height);

      // Check current active theme
      const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

      // Render updated positions
      particles.forEach((p) => {
        p.update();
        p.draw(isDark);
      });

      // Draw connection vectors
      for (let i = 0; i < particles.length; i++) {
        const p1 = particles[i];
        
        // Track connection to mouse cursor
        const dxMouse = p1.x - mouse.x;
        const dyMouse = p1.y - mouse.y;
        const distMouse = Math.sqrt(dxMouse * dxMouse + dyMouse * dyMouse);
        
        if (distMouse < mouse.radius) {
          const baseAlpha = isDark ? 0.45 : 0.32;
          const alpha = (1 - distMouse / mouse.radius) * baseAlpha;
          ctx.beginPath();
          ctx.moveTo(p1.x, p1.y);
          ctx.lineTo(mouse.x, mouse.y);
          
          const grad = ctx.createLinearGradient(p1.x, p1.y, mouse.x, mouse.y);
          const colorStart = isDark
            ? PARTICLE_COLORS_DARK[p1.colorIndex].replace('opacity', (alpha * 1.5).toString())
            : PARTICLE_COLORS_LIGHT[p1.colorIndex].replace('opacity', (alpha * 1.5).toString());
          const colorEnd = isDark
            ? `rgba(255, 255, 255, ${alpha * 0.5})`
            : `rgba(15, 23, 42, ${alpha * 0.5})`;

          grad.addColorStop(0, colorStart);
          grad.addColorStop(1, colorEnd);

          ctx.strokeStyle = grad;
          ctx.lineWidth = isDark ? 2.4 : 1.8;
          ctx.stroke();
        }

        // Track proximity connections to other nodes
        for (let j = i + 1; j < particles.length; j++) {
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            // Enhanced alpha multiplier for clear dark-mode visibility
            const baseAlpha = isDark ? 0.52 : 0.35;
            const alpha = (1 - distance / 120) * baseAlpha;
            
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            
            // Create a gorgeous gradient linking the two nodes' unique colors
            const grad = ctx.createLinearGradient(p1.x, p1.y, p2.x, p2.y);
            const color1 = isDark
              ? PARTICLE_COLORS_DARK[p1.colorIndex].replace('opacity', alpha.toString())
              : PARTICLE_COLORS_LIGHT[p1.colorIndex].replace('opacity', alpha.toString());
            const color2 = isDark
              ? PARTICLE_COLORS_DARK[p2.colorIndex].replace('opacity', alpha.toString())
              : PARTICLE_COLORS_LIGHT[p2.colorIndex].replace('opacity', alpha.toString());

            grad.addColorStop(0, color1);
            grad.addColorStop(1, color2);

            ctx.strokeStyle = grad;
            ctx.lineWidth = isDark ? 2.0 : 1.4;
            ctx.stroke();
          }
        }
      }

      animationFrameId = requestAnimationFrame(drawLoop);
    };

    drawLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      canvas.removeEventListener('mousemove', handleMouseMove);
      canvas.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ 
        width: '100%', 
        height: '100%', 
        minHeight: '380px', 
        display: 'block', 
        borderRadius: '24px',
        cursor: 'crosshair'
      }} 
    />
  );
}
