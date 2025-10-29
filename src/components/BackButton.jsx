import { useNavigate } from "react-router-dom";

export default function BackButton({ toHome = false }) {
    const navigate = useNavigate();

    return (
        <button
        onClick={() => (toHome ? navigate('/') : navigate(-1))}
        className="mt-10 px-6 py-3 border rounded border-cyan-400 hover:text-purple-400 hover:bg-purple-400/10 transition-all shadow-[0_0_15px_#00ffff]"
        >
            {toHome ? 'Quit/Back to Start ←' : '← Back'}
        </button>
    )
}