import { useGame } from '../context/GameContext';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import BackButton from '../components/BackButton';

export default function Friends() {
    const { friend, setFriend } = useGame();

    const friends = [
        { name: 'Rick', unlocked: true, image: '/Rick.jpg' },
        { name: 'Ana', unlocked: false },
        { name: 'Sam', unlocked: false },
    ];
    

    return (
        <motion.div 
        className='flex flex-col items-center justify-center min-h-screen text-center space-y-8 text-white'
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1}}
        >
            {/* Titel */}
            <motion.h1 className='font-pixel text-4xl font-bold text-purple-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>
                Select Friend
            </motion.h1>
            <motion.p>
                With who do you want to spend your time today?
            </motion.p>

            {/* Alternativ */}
            <div className='flex flex-wrap justify-center gap-6 mt-6'>
                {friends.map((f, i) => (
                    <div key={i} className='relative group'>
                        <button
                            key={f.name}
                            disabled={!f.unlocked}
                            onClick={() => f.unlocked && setFriend(f.name)}
                            className={`px-8 py-4 rounded-xl text-lg font-semibold border-2 transition-all duration-300
                            ${
                                f.unlocked
                                ? friend === f.name
                                ? 'bg-green-400 text-black shadow-[0_0_20px_#86efac]'
                                : 'border-green-400 text-green-300 hover:bg-green-300/60 hover:text-black transition-all'
                                : 'border-gray-600 text-gray-600 cursor-not-allowed opacity-50'
                            }`}
                        >
                            {f.name}
                        </button>
                        {!f.unlocked && (
                            <div className='absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                <div className='text-gray-200 text-sm px-3 py-1 rounded shadow-lg border border-gray-700'>
                                    🔒
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bild visas när Rick är vald */}
            {friend === 'Rick' && (
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    className='mt-10 flex flex-col items-center'
                >
                    <img
                        src='./Rick.jpg'
                        alt='Rick'
                        className='w-48 h-50 object-cover rounded-2xl shadow-[0_0_20px_#86efac]'
                    />
                </motion.div>
            )}

            {friend ? (
            <Link to='/location' className='hover:bg-purple-300 hover:text-black transition px-8 py-3 rounded-lg shadow-lg mt-8 text-white font-medium'>Continue →</Link>
            ) : (
                <p className='text-gray-500 italic mt-8'>Choose a friend to continue</p>
            )}
            <BackButton />
        </motion.div>
    );
}