import { createContext, useContext, useState } from 'react';

const GameContext = createContext();

export function GameProvider({ children }) {
    const [friend, setFriend ] = useState(null);
    const [location, setLocation] = useState(null);
    const [activity, setActivity] = useState(null);

    const unlocked = {
        friends: true,
        location: !!friend,
        activity: !!location,
        simulation: !!friend && !!location && !!activity,
    };

    return (
        <GameContext.Provider value={{ friend, setFriend, location, setLocation, activity, setActivity, unlocked }}>
            {children}
        </GameContext.Provider>
    );
}

export function useGame() {
    return useContext(GameContext);
}