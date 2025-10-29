import { motion, useTransform, useScroll } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Start() {
    const { scrollYProgress } = useScroll();
    const [activeSection, setActiveSection] = useState('intro');

    //Parallax
    const titleY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-50%']);
    const subtitleY = useTransform(scrollYProgress, [0, 0.3], ['0%', '-30%']);
    const bgOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.2]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth'});
    };

    useEffect(() => {
        const sections = document.querySelectorAll('section');
        const handleScroll = () => {
            let current = '';
            sections.forEach((section) => {
                const sectionTop = section.offsetTop - 100;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });
            setActiveSection(current);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className='w-full text-white overflow-x-hidden'>
            {/* fixed navigator */}
            <header 
            className='rajdhani-medium fixed z-50 
                flex 
                flex-col md:flex-col md:space-y-4 
                md:top-10 md:right-6
                top-0 left-0 w-full md:w-auto
                bg-black/70 md:bg-transparent 
                backdrop-blur-md md:backdrop-blur-none
                border-b md:border-0 border-purple-500/20
                items-center md:items-end
                py-3 md:py-0'
            >
                <nav className='flex md:flex-col space-x-6 md:space-x-0 md:space-y-4'>
                {[
                    { id: 'intro', label: 'Intro' },
                    { id: 'about', label: 'About' },
                    { id: 'team', label: 'Team' },
                    { id: 'world', label: '2035' },
                    { id: 'glasses', label: 'The Glasses' },
                    { id: 'start', label: 'Film' },
                ].map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            const el = document.getElementById(item.id);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className={`transition text-sm sm:text-base tracking-widest ${
                            activeSection === item.id
                            ? 'text-purple-400 border-b-2 border-purple-400'
                            : 'text-gray-400 hover:text-purple-300'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
                </nav>
            </header>

            {/* Section 1 -intro parallax */}
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
                    99% happy
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
                    A taste of happiness, engineered just for you.
                </motion.p>
            </section>

            {/* Section 2 About us */}
            <section id='about' className='text-xl min-h-screen flex flex-col items-center justify-center text-center px-6 relative'>
                <div>
                    <motion.h2>A film by</motion.h2>
                    <motion.h2 className='font-pixel text-2xl text-purple-200'>Northlight Pictures</motion.h2>
                    <motion.p className='mt-10'>
                        Developers of true Clarity
                    </motion.p>
                </div>
            </section>

            {/* Section 3 - team info */}
            <section id='team' className='min-h-screen flex flex-col items-center justify-center text-center space-y-10 px-6'>
                <motion.h2
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='font-pixel text-3xl font-bold text-purple-400'
                >
                    Northlight Pictures
                    <p className='rajdhani-medium text-white text-xl'>
                        The Crew
                    </p>
                </motion.h2>
                <div className='grid grid-cols-1 sm:grid-cols-4 gap-10'>
                    {[
                        { name: "Zahra Alebadi", role: "cinematographer, actress (ghost)" },
                        { name: "Matilda Zettergren", role: "writer, webdesigner" },
                        { name: "Adam Khangeh", role: "editor, actor (Rick)" },
                        { name: "Ibrahim Tancredi", role: "director, actor (Luke)" }
                    ].map((person, i) => (
                        <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: i * 0.2 }}
                        viewport={{ once: true }}
                        className='rounded p-6 shadow-lg hover:shadow-cyan-500/30 transition-all backdrop-blur-md border border-gray-700'
                        >
                            <h3 className='text-xl text-green-300 font-semibold'>
                                {person.name}
                            </h3>
                            <p className='text-gray-400 text-lg'>{person.role}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Section 4 - The World 2035 */}
            <section id='world' className='text-xl min-h-screen flex flex-col items-center justify-center text-center px-6 relative'>
                <motion.h2 className='text-3xl'>2035...</motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delaty: 0.2 }}
                    viewport={{ once: true }}
                    className='max-w-2xl text-gray-400 mb-10'
                >
                    the year of self fufillment and happiness. <br /> Thanks to SYNQ Systems, anyone can live the life they desire. <br /> Every city has a mirror world and every memory can be endlessly replayable. <br /> With 99% Happy™ you can step into the world you have always wanted, creating friendships that will last you forever. {' '}
                </motion.p>
            </section>

            {/* Section 5 - glasses */}
            <section id='glasses' className='min-h-screen flex flex-col items-center justify-center text-center px-6 relative'>
                <motion.h2 className='font-pixel text-5xl font-bold text-purple-400 mb-8'>The Glasses</motion.h2>
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delaty: 0.2 }}
                    viewport={{ once: true }}
                    className='text-gray-400 mt-6 text-lg'
                >
                    Model: <motion.p className='text-white text-2xl'>NX-2035 BlackFrame</motion.p><br />
                    Release Year:<motion.p className='text-white text-2xl'>2035</motion.p> <br />
                    Manufacturer:<motion.p className='text-white text-2xl'>SYNQ Systems</motion.p> <br />
                    <motion.p className='text-gray-400 text-lg'>Lightweight. Seamless. Connected.<br />The NX-2035 BlackFrame is the latest in neuro-visiual integration.<br /> It learns from you, adjusts to your emotions, and projects the world you want to see. No cables. No effeort. Just clarity. </motion.p>
                </motion.div>
            </section>


            {/* Section 6 - start simulation */}
            <section id='start' className='min-h-screen flex flex-col items-center justify-center text-center px-6 relative space-y-16'>
                <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className='font-pixel text-5xl font-bold text-purple-400 mb-2'
                >
                    Ready to enter?
                </motion.h2>
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
                    px-16 py-8
                    text-xl font-bold tracking-[0.25em] uppercase
                    text-green-300 border border-purple-400
                    rounded-lg
                    transition-all duration-300
                    hover:text-purple-300 hover:bg-cyan-300/30
                    shadow-[0_0_40px_#00ffff99] hover:shadow-[0_0_40px_#c084fc99]'
                    >
                        Start
                    </Link>
                </motion.div>
                <button
                    onClick={scrollToTop}
                    className="mt-10 px-6 py-3 border rounded hover:text-purple-400 hover:bg-purple-400/10 transition-all shadow-[0_0_2px_#00ffff]"
                >
                    Quit / Back to Start ↑
                </button>
          </section>
        </div>
    )
}