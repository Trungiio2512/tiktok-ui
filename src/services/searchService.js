import * as httpRequest from '~/until/httpRequest';
export const search = async (q, type = 'less') => {
    try {
        const res = await httpRequest.get('users/search', {
            params: {
                q,
                type,
            },
        });
        return res.data;
    } catch (error) {
        console.log('error');
    }
};

export const getProfileAccount = async (nickname) => {
    try {
        const res = await httpRequest.get(`users/@${nickname}`);

        return res;
    } catch (error) {
        console.log(error.response);
    }
};
