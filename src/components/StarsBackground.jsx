import { useEffect, useRef } from "react";

export default function StarsBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height =  window.innerHeight;
        }

        resize();
        window.addEventListener('resize', resize);

        const stars = Array.from({ length: 200 }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 2,
            dx: (Math.random() - 0.5) * 0.2,
            dy: (Math.random() - 0.5) * 0.2,
            depth: Math.random() * 1.5 + 0.5,
        }));

        function draw() {
            ctx.fillStyle = 'black';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            stars.forEach((s) => {
                s.x += s.dx * s.depth;
                s.y += s.dy * s.depth;

                if (s.x < 0) s.x = canvas.width;
                if (s.x > canvas.width) s.x = 0;
                if (s.y < 0) s.y = canvas.height;
                if (s.y > canvas.height) s.y = 0;

                const gradient = ctx.createRadialGradient(s.x, s.y, 0, s.x, s.y, s.r * 4);
                gradient.addColorStop(0, 'white');
                gradient.addColorStop(1, 'rgba(255,255,255,0');
                
                ctx.fillStyle = gradient;
                ctx.beginPath();
                ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
                ctx.fill();
            });
            requestAnimationFrame(draw);
        }

        draw();

        return () => window.removeEventListener('resize', resize);
    }, []);

    return (
        <canvas 
        ref={canvasRef}
        className='fixed inset-0 -z-10 block'
        style={{ background: 'black' }}
        />
    );
}