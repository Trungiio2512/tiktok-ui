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

export const getProfileUser = async (nickname) => {
    try {
        const res = await httpRequest.get(`users/@${nickname}`);

        console.log(res);
    } catch (error) {
        console.log(error.response);
    }
};
