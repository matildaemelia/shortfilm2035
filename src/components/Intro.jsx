import { motion } from 'framer-motion';

export default function Intro({ titleY, subtitleY }) {
    
    return (
        <section id='intro' className='relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden'>

            {/* Titel */}
            <motion.h1 
            style={{ y: titleY }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className='glitch-text font-pixel text-[4rem] font-bold text-purple-400 tracking-widest z-10'
            >
                Trick or Treat
            </motion.h1>

            {/* text som rör sig långsammare */}
            <motion.p
            style={{ y: subtitleY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}            
            className='max-w-2xl text-gray-300 text-xl leading-relaxed mt-4 z-10'>
                Welcome to a life where anything is possible.
            </motion.p>
            <motion.p
            style={{ y: subtitleY }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.3 }}
            viewport={{ once: true }}            
            className='max-w-2xl text-gray-300 text-xl leading-relaxed mt-4 z-10'>
                A taste of happiness, <br /> engineered just for you.
            </motion.p>
        </section>
    );
}