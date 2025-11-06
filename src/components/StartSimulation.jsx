import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 👈 detta saknas!

export default function StartSimulation() {
    return (
        <section id='start' className='min-h-screen flex flex-col items-center justify-center text-center px-6 relative space-y-16'>
            <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className='font-pixel text-5xl font-bold text-purple-400 mb-2'
            >
                Ready?
            </motion.h2>
            <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            >
                <Link
                to='/simulation'
                className='
                relative inline-block
                px-16 py-8
                text-xl font-bold tracking-[0.25em] uppercase
                text-green-300 border border-purple-400
                rounded-lg
                transition-all duration-300
                hover:text-purple-300 hover:bg-cyan-300/50
                shadow-[0_0_40px_#00ffff99] hover:shadow-[0_0_40px_#c084fc99]'
                >
                    Play
                </Link>
            </motion.div>
    </section>
    )
}