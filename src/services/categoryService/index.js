import httpRequest from '../../utils/httpRequest'

export const getCategories = async () => {
    try {
        const res = await httpRequest.get('/categories');
        return res.data;
    } catch (err) { }
};

export const getProducts = async (id) => {
    try {
        const res = await httpRequest.get('/categories/' + id);
        return res.data.products
    } catch (err) { }
};