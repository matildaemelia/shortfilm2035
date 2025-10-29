import { useEffect, useRef } from "react";

export default function NoiseBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext("2d");

        function resize() {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            drawNoise();
        }

        function drawNoise() {
            const imageData = ctx.createImageData(canvas.width, canvas.height);
            const buffer = imageData.data;

            for (let i = 0; i < buffer.length; i += 4) {
                const val = 15 + Math.random() * 25;
                buffer[i] = val;
                buffer[i + 1] = val;
                buffer[i + 2] = val;
                buffer[i + 3] = 255;
            }
            ctx.putImageData(imageData, 0, 0);
        }

        resize();
        window.addEventListener('resize', resize);

        let animationFrame;
        function animate() {
            drawNoise();
            animationFrame = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('resize', resize);
            cancelAnimationFrame(animationFrame);
        };
    }, []);

    return (
        <canvas 
            ref={canvasRef}
            className="fixed inset-0 -z-10 block"
            style={{
                backgroundColor: 'black',
                opacity: 1,
                filter: 'contrast(120%) brightness(100%)',
            }}
        />
    );
}