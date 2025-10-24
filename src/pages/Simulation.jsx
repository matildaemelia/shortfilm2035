export default function Simulation() {
    return (
        <div className='flex flex-col items-center justify-center text-center space-y-6'>
            <h1 className='text-cyan-400 text-4xl font-bold'>Starting simulation...</h1>
            <video className='rounded-2xl shadow-lg w-3/4 border border-cyan-500' controls autoPlay>
                <source src='/film2035.mp4' type='video/mp4'/>
                Your browser does not support the video tag.
            </video>
        </div>
    );
}