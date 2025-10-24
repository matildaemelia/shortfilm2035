import { motion, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function Start() {
    const { scrollYProgress } = useScroll();

    //Parallax
    const titleY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-50%']);
    const subtitleY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-30%']);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    return (
        <div className='w-full bg-black text-white font-orbitron overflow-x-hidden'>
            {/* Section 1 -intro parallax */}
            <section className='relative min-h-screen flex flex-col items-center justify-center text-center px-6 overflow-hidden'>
                {/* Bakgrund */}
                <motion.div style={{ opacity: bgOpacity }} className='absolute inset-0 bg-[radial-gradient(circle_at_center,_#0ff_0%,_#001_80%)]'></motion.div>

                {/* Titel */}
                <motion.h1 style={{ y: titleY }} className='text-[6rem] font-bold text-cyan-400 tracking-widest drop-shadow-[0_0_20px_#00ffff] z-10'>99% happy</motion.h1>

                {/* text som rör sig långsammare */}
                <motion.p
                style={{ y: subtitleY }}
                className='max-w-2xl text-gray-300 text-lg leading-relaxed mt-4 z-10'>
                    Welcome to a life where anything is possible.{' '}
                    <span className='text-cyan-400 font-bold'>
                        99% happy{' '}
                    </span>
                    is not just a film — it's an experience.
                </motion.p>
            </section>

            {/* Section 2 - team info */}
            <section className='min-h-screen flex flex-col items-center justify-center text-center space-y-10 px-6 bg-gradient-to-b from-black to-gray-900'>
                <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='text-5x1 font-bold text-cyan-400 mb-8'
                >
                    The Production Team
                </motion.h2>
                <div className='grid grid-cols-1 sm:grid-cols-3 gap-10'>
                    {[
                        { name: "Zahra", role: "Cinematographer, ghost" },
                        { name: "Adam", role: "Editor" },
                        { name: "Ibbe", role: "Luke" },
                        { name: "Matilda", role: "Writer, webdesigner" }
                    ].map((person, i) => (
                        <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className='bg-gray-800/60 rounded-2xl p-6 shadow-lg hover:shadow-cyan-500/30 transition-all backdrop-blur-md border border-gray-700'
                        >
                            <h3 className='text-2x1 text-cyan-300 font-semibold'>
                                {person.name}
                            </h3>
                            <p className='text-gray-400'>{person.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 3 - Film introduction */}
            <section className='min-h-screen flex flex-col items-center justify-center text-center px-6 bg-black relative'>
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delaty: 0.2 }}
                viewport={{ once: true }}
                className='text-gray-400 mb-10'
                >
                    Hello
                </motion.p>
            </section>

            {/* Section 4 - start simulation */}
            <section className='min-h-screen flex flex-col items-center justify-center text-center px-6 relative space-y-16'>
                <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='text-5x1 font-bold text-cyan-400 mb-2'
                >
                    Ready to enter?
                </motion.h2>
                <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delaty: 0.2 }}
                viewport={{ once: true }}
                className='text-gray-400 text-lg max-w-xl leading-relaxed'
                >
                    Your best life is waiting.
                </motion.p>

                <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                >
                    <Link
                    to='/friends'
                    className='
                    relative inline-block
                    px-12 py-5
                    text-lg font-bold tracking-[0.25em] uppercase
                    text-cyan-300 border border-cyan-400
                    rounded-xl
                    transition-all duration-300
                    hover:text-black hover:bg-cyan-400
                    shadow-[0_0_20px_#00ffff80]'
                        style={{ backgroundColor: 'transparent', textShadow: '0 0 8px #00ffff' }}
                    >
                        Start Simulation
                    </Link>
                </motion.div>
                <button
                    onClick={scrollToTop}
                    className="mt-8 px-6 py-3 rounded-lg border border-gray-700 text-gray-400 hover:text-cyan-300 hover:border-cyan-400 transition"
                >
                    Quit / Back to Start ↑
                </button>
          </section>
        </div>
    )
}