import  { useCallback, useReducer } from 'react';

const httpReducer = (state, action) => {
    switch (action.type) {
        case 'SEND':
            return {
                data: null,
                status: 'pending',
                error: null
            }
        case 'SUCCESS':
            return {
                data: action.responseData,
                status: 'completed',
                error: null
            }
        case 'ERROR':
            return {
                data: null,
                status: 'completed',
                error: action.errorMessage || 'something went wrong'
            }
        default : {
            throw new Error('Invalid Action');
        }
    }
}


const useHttp = (requestFunction, startsWithPending = true) => {
    
    const [httpState, dispatch] = useReducer(httpReducer, {
        data: null,
        status: startsWithPending ? 'pending' : 'completed',
        error: null
    });

    const sendRequest = useCallback(async (...requestData) => {
        try {
            dispatch({ type: 'SEND' });
            const res = await requestFunction(...requestData);
            dispatch({ type: 'SUCCESS', responseData: res });
        }
        catch (err) {
            dispatch({ type: 'ERROR', errorMessage: err.message });
        }
    }, [requestFunction]);

    return { ...httpState, sendRequest };
}

export default useHttp;