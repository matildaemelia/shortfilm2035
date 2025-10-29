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
        className='flex flex-col items-center justify-center min-h-screen text-center space-y-8 text-white'
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        >

            {/* Titel */}
            <motion.h1 className='font-pixel text-4xl font-bold text-purple-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>
                Choose Your Adventure
            </motion.h1>

            <p className='text-gray-400 text-lg max-w-x1'>
                At Gröna Lund, your choices define your experience. What will you do first?
            </p>

            {/* Alternativ */}
            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                {activities.map((a, i) => (
                    <div key={i} className='relative group'>
                        <button
                            disabled={!a.unlocked}
                            onClick={() => a.unlocked && setActivity(a.name)}
                            className={`px-8 py-4 rounded-xl text-lg font-semibold border-2 transition-all duration-300
                            ${
                                a.unlocked
                                ? activity === a.name
                                    ? 'bg-green-400 text-black shadow-[0_0_20px_#86efac]'
                                    : 'border-green-400 text-green-300 hover:bg-green-300/60 hover:text-black transition-all'
                                : 'border-gray-600 text-gray-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            {a.name}
                        </button>

                        {!a.unlocked && (
                            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <div className='text-gray-200 text-sm px-3 py-1 rounded shadow-lg border border-gray-700'>
                                    🔒
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            <motion.p className='text-gray-200 text-lg max-w-x1'>
            ↓ Click start to experience life in 2035 ↓
            </motion.p>
            {activity ? (
                <Link
                    to='/simulation'
                    className='hover:bg-purple-300 hover:text-black transition px-8 py-3 rounded-lg shadow-lg mt-8 text-white font-medium font-pixel'
                >
                    Start
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