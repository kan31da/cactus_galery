import { useState } from "react"

export const useSessionStorage = (userData, initialValue) => {


    const [state, setState] = useState(() => {

        const dataStateSerialized = sessionStorage.getItem(userData);

        if (dataStateSerialized) {
            const dataState = JSON.parse(dataStateSerialized)

            return dataState;
        }

        return initialValue
    });

    const setSessionState = (value) => {
        setState(value);

        sessionStorage.setItem(userData, JSON.stringify(value));
    }

    return [
        state,
        setSessionState,
    ];
};