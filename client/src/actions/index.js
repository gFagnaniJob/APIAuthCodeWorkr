import axios from 'axios';

import { AUTH_SIGN_UP, AUTH_ERROR } from './types';

/*
    ActionCreators -> return Actions ({ }) -> dispatched -> middlewares -> reducers
*/

export const signUp = data => {
    /*
            Step 1) Use the data and to make HTTP request to our BE and send it along
            Step 2) Take the BE's response (jwtToken is here now!)
            Step 3) Dispatch user just signed up (with jwtToken)
            Step 4) Save the jwtToken into our localStorage
    */
    return async dispatch => {
        try {
            const res = await axios.post('http://localhost:5000/users/signup', data)
            console.log('res', res);

            dispatch({
                type: AUTH_SIGN_UP,
                payload: res.data.token
            });

            localStorage.setItem('JWT_TOKEN', res.data.token);
        } catch (err) {
            dispatch({
                type: AUTH_ERROR,
                payload: 'Email is already in use'
            })
        }
    }
}