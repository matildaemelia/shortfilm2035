import { motion } from 'framer-motion';

export default function Character() {
    return (
        <section id='rick' className='text-xl min-h-screen flex flex-col items-center justify-center text-center px-6 relative'>
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="font-pixel text-5xl font-bold text-purple-400 mb-8"
                >
                Companion #01
            </motion.h2>
            <img
                src="Rick.jpg"
                alt="Rick"
                className="mb-8 w-56 h-64 sm:w-64 sm:h-72 md:w-80 md:h-96 object-cover rounded-lg shadow-[0_0_10px_#00ffffaa] transition-all duration-300"
            />
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 }}
                viewport={{ once: true }}
                className="max-w-2xl text-gray-300 leading-relaxed text-xl"
                >
                    <span className='font-bold text-3xl'>This is Rick!</span>
                    <br />
                    <br />
                    Rick is more than an algorithm.
                    <br />
                    He learns from your memories, mirrors your emotions,
                    <br />
                    and fills the silence between moments.
                    <br />
                    <br />
                    He never forgets you. 
                    <br />
                    He never leaves.
            </motion.p>
        </section>
    )
}