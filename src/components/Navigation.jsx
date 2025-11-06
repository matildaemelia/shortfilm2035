export default function Navigation({ activeSection }) {
    const navItems = [
        { id: 'intro', label: 'Start' },
        { id: 'poster', label: 'Poster' },
        { id: 'about', label: 'About' },
        { id: 'world', label: '2035' },
        { id: 'glasses', label: 'The Glasses' },
        { id: 'rick', label: 'Companion #01' },
        { id: 'location', label: 'Archive Simulation #01' },
        { id: 'start', label: 'Film' },
        { id: 'team', label: 'Team' },
    ];

    return (
        <header className='rajdhani-medium fixed z-50 top-4 right-4 px-1 py-1 w-auto'>
            <nav className='flex flex-col space-y-2 text-sm sm:text-base tracking-widest text-right'>
                {navItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => {
                            const el = document.getElementById(item.id);
                            if (el) {
                                el.scrollIntoView({ behavior: 'smooth' });
                            }
                        }}
                        className={`transition text-sm sm:text-base tracking-widest ${
                            activeSection === item.id
                            ? 'text-purple-400 border-b-2 border-purple-400'
                            : 'text-gray-400 hover:text-purple-300'
                        }`}
                    >
                        {item.label}
                    </button>
                ))}
            </nav>
        </header>
    );
}