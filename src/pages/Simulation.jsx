export default function Simulation() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center space-y-6'>
            <h1 className='text-5xl font-bold text-cyan-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>Starting simulation...</h1>
            <video className='rounded-2xl shadow-lg w-3/4 border border-cyan-500' controls autoPlay>
                <source src='/film2035.mp4' type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}