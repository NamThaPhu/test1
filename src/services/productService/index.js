import httpRequest from '../../utils/httpRequest'

export const getProducts = async () => {
    try {
        const res = await httpRequest.get('/products');
        if (res.data === null) {
            window.location.href = '/404'
            return true
        }
        return res.data;
    } catch (err) { }
};