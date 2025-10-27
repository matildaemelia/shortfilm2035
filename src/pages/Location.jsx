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
            <h1 className='text-5xl font-bold text-cyan-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>Select location</h1>
            
            <div className='flex justify-center gap-6'>
                {locations.map((l) => (
                    <button
                    key={l.name}
                    disabled={!l.unlocked}
                    onClick={() => l.unlocked && setLocation(l.name)}
                    className={`px-8 py-4 rounded-xl text-lg font-semibold border-2 transition-all
                    ${
                        l.unlocked
                        ? location === l.name
                        ? 'bg-cyan-400 text-black shadow-[0_0_20px_#00ffff]'
                        : 'border-cyan-400 text-cyan-300 hover:bg-cyan-600 hover:text-black'
                        : 'border-gray-600 text-gray-600 cursor-not-allowed opacity-50'
                    }`}
                    >
                        {l.name}
                    </button>
                ))}
            </div>
            {location ? (
                <Link to='/activities' className='bg-cyan-400 hover:bg-cyan-300 transition px-8 py-3 rounded-lg shadow-lg mt-8 text-black font-semibold'>Continue</Link>
            ) : (
                <p className='text-gray-500 italic mt-8'>Choose a location to continue</p>
            )}
            <BackButton />
        </motion.div>
    );
}