import { motion } from 'framer-motion';

export default function World() {
    return (
        <section id='world' className='text-xl min-h-screen flex flex-col items-center justify-center text-center px-6 relative'>
            <motion.h2 className='text-4xl font-bold'>2035. . .</motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delaty: 0.2 }}
                viewport={{ once: true }}
                className='max-w-2xl text-gray-400 mb-10 text-2xl'
            >
                . . .the year of self fulfillment and happiness.
            </motion.p>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delaty: 0.2 }}
                viewport={{ once: true }}
                className='max-w-2xl text-gray-400 mb-10'
            > 
                <br />
                Thanks to <span className='text-white'>SYNQ Systems</span>, 
                <br />
                anyone can live the life they desire. 
                <br />
                <br /> 
                Every city has a mirror world and every memory can be endlessly replayable. 
                <br /> 
                <br />
                With <span className='text-white'>NX-2035 BlackFrame</span> you can step into the world you have always wanted, creating friendships that will last you forever.
            </motion.p>
        </section>
    );
}