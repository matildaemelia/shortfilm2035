import { useGame } from '../context/GameContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

export default function Location() {
    const { location, setLocation, unlocked } = useGame();

    const locations = [
        { name: 'Gröna Lund', unlocked: true },
        { name: 'Skansen', unlocked: false },
        { name: 'Liseberg', unlocked: false },
    ];

    if (!unlocked.location) {
        return (
            <div className='flex flex-col items-center justify-center min-h-screen text-center text-gray-500'>
                <p>You must choose a friend first.</p>
            </div>
        );
    }

    return (
        <motion.div
        className='flex flex-col items-center justify-center min-h-screen text-center space-y-8 text-white'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        >
            <motion.h1 className='font-pixel text-4xl font-bold text-purple-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>
                Select Location
            </motion.h1>
            <motion.p>
                Where do you want to spend today?
            </motion.p>
            
            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                {locations.map((l, i) => (
                    <div key={i} className='relative group'>
                        <button
                            key={l.name}
                            disabled={!l.unlocked}
                            onClick={() => l.unlocked && setLocation(l.name)}
                            className={`px-8 py-4 rounded-xl text-lg font-semibold border-2 transition-all duration-300
                            ${
                                l.unlocked
                                ? location === l.name
                                ? 'bg-green-400 text-black shadow-[0_0_20px_#86efac]'
                                : 'border-green-400 text-green-300 hover:bg-green-300/60 hover:text-black transition-all'
                                : 'border-gray-600 text-gray-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            {l.name}
                        </button>
                        {!l.unlocked && (
                            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <div className='text-gray-200 text-sm px-3 py-1 rounded shadow-lg border border-gray-700'>
                                    🔒
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
            {location ? (
                <Link to='/activities' className='hover:bg-purple-300 hover:text-black transition px-8 py-3 rounded-lg shadow-lg mt-8 text-white font-medium'>Continue →</Link>
            ) : (
                <p className='text-gray-500 italic mt-8'>Choose a location to continue</p>
            )}
            <BackButton />
        </motion.div>
    );
}