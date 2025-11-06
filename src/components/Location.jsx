import { motion } from 'framer-motion';

export default function Location() {
    return (
        <section id='location' className='text-xl min-h-screen flex flex-col items-center justify-center text-center px-6 relative'>
            <motion.h3
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                viewport={{ once: true }}
                className="text-3xl font-semibold font-pixel text-purple-400 mb-4"
            >
                Gröna Lund — Archive Simulation #01 
            </motion.h3>
            <img
                    src='gronalund.jpg'
                    alt={'Gröna Lund'}
                    className='mb-8 w-64 h-56 sm:w-72 sm:h-64 md:w-96 md:h-80 object-cover rounded-lg shadow-[0_0_10px_#00ffffaa] transition-all duration-300'
                />
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
                viewport={{ once: true }}
                className="max-w-2xl text-gray-300 text-xl leading-relaxed"
            >
                SYNQ Systems built memories for everyone, everywhere. - <span className='font-bold'>We made it a story.</span>
                <br />
                <br />
                A city of laughter, frozen in code.
                <br />
                Here you can play forever.
                <br />
                No waiting lines. No closing hours.
            </motion.p>
        </section>
    )
}