import { useReducer, useEffect } from 'react';
import axios from 'axios';

const initialState = {
    data: [],
    isLoading: false,
    error: null
};

function reducer(state, action) {
    const { type, payload } = action;
    switch (type) {
        case 'DATA':
            return { ...state, data: payload };
        case 'LOADING':
            return { ...state, isLoading: payload };
        case 'ERROR':
            return { ...state, error: payload };
        default:
            return state;
    }
}

export const useFetch = (url) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'LOADING', payload: true });
            try {
                const response = await axios.get(url);
                dispatch({ type: 'DATA', payload: response.data.products });
            } catch (err) {
                dispatch({ type: 'ERROR', payload: err.message || "Xatolik yuz berdi" });
            } finally {
                dispatch({ type: 'LOADING', payload: false });
            }
        };

        fetchData();
    }, [url]);

    return state;
};