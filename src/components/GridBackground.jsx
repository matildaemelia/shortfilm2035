import { useEffect, useRef } from "react";

export default function GridBackground() {
    const canvasRef = useRef(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext("2d");

        function resize() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        }

        function drawGrid(time = 0) {
        const w = canvas.width;
        const h = canvas.height;
        const cx = w / 2;
        const cy = h / 2;
        ctx.clearRect(0, 0, w, h);

        // Bakgrundsfärg
        ctx.fillStyle = "#000";
        ctx.fillRect(0, 0, w, h);

        // Grid färg
        ctx.strokeStyle = "rgba(120,200,255,0.2)";
        ctx.lineWidth = 1;

        // Parametrar för perspektiv
        const spacing = 40; // horisontella linjer mellanrum
        const depth = 800;  // “djup” på perspektivet
        const perspective = 0.0025;
        const speed = 0.001;

        // Animation baserad på tid
        const offset = (time * speed) % spacing;

        ctx.save();
        ctx.translate(cx, cy);

        // Horisontella linjer (kommer uppifrån och nedifrån)
        for (let z = -depth; z < depth; z += spacing) {
            const y = (z + offset) * perspective * h;
            const scale = 1 / (1 + z * perspective);
            const lineY = y * scale;
            const halfWidth = w * 0.6 * scale;

            ctx.beginPath();
            ctx.moveTo(-halfWidth, lineY);
            ctx.lineTo(halfWidth, lineY);
            ctx.stroke();
        }

        // Vertikala linjer (vänster och höger)
        const numCols = 20;
        for (let i = -numCols; i <= numCols; i++) {
            const x = (i * spacing) / 1;
            ctx.beginPath();
            ctx.moveTo(x, -h / 2);
            ctx.lineTo(x, h / 2);
            ctx.stroke();
        }

        ctx.restore();
        }

        resize();
        window.addEventListener("resize", resize);

        let animationId;
        function animate(time) {
        drawGrid(time);
        animationId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
        window.removeEventListener("resize", resize);
        cancelAnimationFrame(animationId);
        };
    }, []);

    return (
        <canvas
        ref={canvasRef}
        className="fixed inset-0 -z-10"
        style={{
            backgroundColor: "black",
            pointerEvents: "none",
        }}
        />
    );
}
