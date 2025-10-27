import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import BackButton from '../components/BackButton';

export default function Activities() {
    const [activity, setActivity] = useState(null);
    const activities = [
       { name: 'Arcade', unlocked: true },
       { name: 'Roller Coaster', unlocked: false },
       { name: 'Haunted House', unlocked: false }
    ];

    return (
        <motion.div
        className='flex flex-col items-center justify-center min-h-screen text-center space-y-8 bg-black text-white'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        >

            {/* Titel */}
            <motion.h1 className='text-5xl font-bold text-cyan-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>
                Choose Your Adventure
            </motion.h1>

            <p className='text-gray-400 text-lg max-w-x1'>
                At Gröna Lund, your choices define your experience. What will you do first?
            </p>

            {/* Alternativ */}
            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                {activities.map((a, i) => (
                    <button
                    key={i}
                    disabled={!a.unlocked}
                    onClick={() => a.unlocked && setActivity(a.name)}
                    className={`px-8 py-4 rounded-xl text-lg font-semibold border-2 transition-all duration-300
                    ${
                        a.unlocked
                        ? activity === a.name
                        ? 'bg-cyan-400 text-black shadow-[0_0_20px_#00ffff]'
                        : 'border-cyan-400 text-cyan-300 hover:bg-cyan-600 hover:text-black'
                        : 'border-gray-600 text-gray-600 cursor-not-allowed opacity-50'
                    }`}
                    >
                        {a.name}
                    </button>
                ))}
            </div>
            {activity ? (
                <Link
                to='/simulation'
                className='bg-cyan-400 hover:bg-cyan-300 transition px-8 py-3 rounded-lg shadow-lg mt-8 text-black font-semibold'
                >
                    Start Simulation
                </Link>
            ) : (
                <p className='text-gray-500 italic mt-8'>Choose an activity to continue</p>
            )}
            <div className='mt-16 z-10'>
                <BackButton />
            </div>
        </motion.div>
    )
}