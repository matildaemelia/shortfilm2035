import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
    const [friend, setFriend ] = useState(null);
    const [location, setLocation] = useState(null);

    const unlocked = {
        friends: true,
        location: !!friend,
        simulation: !!friend && !!location,
    };

    return (
        <GameContext.Provider value={{ friend, setFriend, location, setLocation, unlocked }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    return useContext(GameContext);
}