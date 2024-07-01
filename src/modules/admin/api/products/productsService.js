import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const productApi = axios.create({
    baseURL: `${API}/product`
});

export const createProduct = async (product) => {
    try {
        const response = await productApi.post('/create', product);
        return response.data;
    } catch (error) {
        console.error('Error creating product:', error);
        throw error;
    }
};

export const updateProduct = async (productId, updatedProduct) => {
    try {
        const response = await productApi.put(`/update/${productId}`, updatedProduct);
        return response.data;
    } catch (error) {
        console.error('Error updating product:', error);
        throw error;
    }
};

export const deleteProduct = async (productId) => {
    try {
        const response = await productApi.delete(`/delete/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting product:', error);
        throw error;
    }
};

export const getProduct = async (productId) => {
    try {
        const response = await productApi.get(`/get/${productId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching product:', error);
        throw error;
    }
};

export const getAllProducts = async () => {
    try {
        const response = await productApi.get('/getAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error;
    }
};
