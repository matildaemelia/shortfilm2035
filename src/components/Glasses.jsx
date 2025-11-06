import { motion } from 'framer-motion';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from "@react-three/drei";
import { Suspense } from 'react';
import GlassesModel from './GlassesModel';

export default function Glasses() {
    return (
        <section
            id="glasses"
            className="min-h-screen flex flex-col items-center justify-center text-center px-6 relative"
        >
            {/* Title */}
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="font-pixel text-6xl font-bold text-purple-400 mb-12"
            >
                The Glasses
            </motion.h2>

            {/* Content row: info + 3D model */}
            <motion.div
                className="flex flex-col md:flex-row items-center justify-center gap-10 w-full max-w-6xl"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
            >
                {/* Glasses info */}
                <div className="flex-1 max-w-md text-gray-400">
                <p className="text-lg">
                    Model:
                    <span className="text-white text-2xl block">NX-2035 BlackFrame</span>
                </p>

                <p className="text-lg mt-2">
                    Release Year:
                    <span className="text-white text-2xl block">2035</span>
                </p>

                <p className="text-lg mt-2">
                    Manufacturer:
                    <span className="text-white text-2xl block">SYNQ Systems</span>
                </p>

                <p className="text-gray-400 text-lg mt-6 leading-relaxed">
                    Lightweight. Seamless. Connected. <br />
                    The NX-2035 BlackFrame is the latest in neuro-visual integration. <br />
                    It learns from you, adjusts to your emotions, and projects the world you
                    want to see. No cables. No effort. Just clarity.
                </p>
                </div>

                {/* 3D model */}
                <div className="flex-1 w-full max-w-3xl h-[400px] bg-radial-bright rounded-xl overflow-hidden mb-24">
                <Canvas camera={{ position: [0, 0, 3], fov: 45, near: 0.1, far: 20 }}>
                    <ambientLight intensity={0.8} />
                    <directionalLight position={[5, 5, 5]} intensity={1.5} />
                    <Suspense fallback={null}>
                    <GlassesModel />
                    </Suspense>

                    <OrbitControls
                    enableZoom={true}
                    enablePan={false}
                    maxDistance={6}
                    minDistance={3}
                    autoRotate={false}
                    autoRotateSpeed={1}
                    />
                </Canvas>
                </div>
            </motion.div>
        </section>
        
    )
}