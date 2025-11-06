import BackButton from "../components/BackButton";

export default function Simulation() {
    return (
        <div className='flex flex-col items-center justify-center min-h-screen text-center space-y-6'>
            <h1 className='font-pixel text-3xl font-bold text-purple-400 tracking-widest drop-shadow-[0_0_15px_#00ffff]'>Welcome</h1>
            <p className='font-pixel text-sm'>We generated your future for you...</p>
            <div className="w-11/12 aspect-video rounded-2xl overflow-hidden shadow-[0_0_40px_#00ffff55] border border-cyan-900">
                <iframe
                title="vimeo-player"
                src="https://player.vimeo.com/video/1132292779?h=ff30de4a07"
                width="640" 
                height="360" 
                frameborder="0" 
                referrerpolicy="strict-origin-when-cross-origin" allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share"
                allowFullScreen
                className="w-full h-full"
                ></iframe>
            </div>
            <BackButton toHome={true} />
        </div>
    );
}