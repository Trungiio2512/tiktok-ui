import { userLogin } from '~/redux/authSlice';
import * as httpRequest from '~/until/httpRequest';

export const loginUser = async (dispatch, user) => {
    try {
        const res = await httpRequest.post('auth/login', user);
        dispatch(userLogin(res));
        // return res;
    } catch (error) {
        console.log(error.response);
    }
};
