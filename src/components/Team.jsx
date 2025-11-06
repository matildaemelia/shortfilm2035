import { motion } from 'framer-motion';

export default function Team() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <section id='team' className='min-h-screen flex flex-col items-center justify-center text-center space-y-8 px-6'>
            <p className='rajdhani-medium text-white text-xl'>
                The Crew
            </p>
            <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className='font-pixel text-3xl font-bold text-purple-400'
            >
                Nordlight Pictures
            </motion.h2>
            <div className='grid grid-cols-1 sm:grid-cols-4 gap-10'>
                {[
                    { name: "Zahra Alebadi", role: "cinematographer, actress (ghost)", image: 'zahra.jpg' },
                    { name: "Matilda Zettergren", role: "writer, webdesigner", image: 'matilda.JPG' },
                    { name: "Adam Khangeh", role: "editor, actor (Rick)", image: 'adam.jpg' },
                    { name: "Ibrahim Tancredi", role: "director, actor (Luke)", image: 'ibbe.jpg' }
                ].map((person, i) => (
                    <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: i * 0.2 }}
                    viewport={{ once: true }}
                    className='rounded p-6 shadow-lg hover:shadow-cyan-500/30 transition-all backdrop-blur-md border border-gray-700'
                    >
                        <img
                            src={person.image}
                            alt={person.name}
                            className='w-40 h-40 object-cover rounded-full border-2 border-purple-400 shadow-[0_0_20px_#c084fc55] mb-4'
                        />
                        <h3 className='text-xl text-green-200 font-semibold'>
                            {person.name}
                        </h3>
                        <p className='text-gray-400 text-lg'>{person.role}</p>
                    </motion.div>
                ))}

                <button
                    onClick={scrollToTop}
                    className="mb-10 mt-10 px-6 py-3 border rounded hover:text-purple-400 hover:bg-purple-400/10 transition-all shadow-[0_0_2px_#00ffff]"
                >
                    Quit / Back to Start ↑
                </button>

            </div>
        </section>
    )
}