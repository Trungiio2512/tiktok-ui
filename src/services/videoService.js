import * as httpRequest from '~/until/httpRequest';

export const getListVideo = async (type = 'for-you', page = 2) => {
    try {
        const res = await httpRequest.get('videos', {
            params: {
                type,
                page,
            },
        });
        return res.data;
    } catch (error) {}
};
