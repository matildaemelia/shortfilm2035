import BackButton from "../components/BackButton";

export default function Simulation() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center space-y-6'>
            <h1 className='font-pixel text-3xl font-bold text-purple-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>Welcome to your future</h1>
            <video className='rounded-2xl shadow-lg w-3/4 border border-green-300' controls autoPlay>
                <source src='./C0080.MP4' type='video/MP4'/>
                Your browser does not support the video tag.
            </video>
            <BackButton toHome={true} />
        </div>
    );
}