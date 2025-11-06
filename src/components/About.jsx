import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id='about' className='text-xl min-h-screen flex flex-col items-center justify-center text-center px-6 relative'>
            <div>
                <motion.h2>A film by</motion.h2>
                <motion.h2 className='font-pixel text-2xl text-purple-200'>Nordlight Pictures</motion.h2>
                <motion.p className='mt-10'>
                    Developers of Happiness
                </motion.p>
            </div>
        </section>
    
    )
}