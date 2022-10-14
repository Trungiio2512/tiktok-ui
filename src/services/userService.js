import * as httpRequest from '~/until/httpRequest';
export const getSuggeted = async (page = 1, per_page = 5) => {
    try {
        const res = await httpRequest.get('users/suggested', {
            params: {
                page: page,
                per_page: per_page,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error.response);
    }
};

export const getListFollower = async (page = 1, token) => {
    try {
        const res = await httpRequest.get('me/followings', {
            params: {
                page,
            },
            headers: {
                token: 'Bearer ' + token,
            },
        });
        return res.data;
    } catch (error) {
        console.log(error.response);
    }
};
