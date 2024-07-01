import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

const authApi = axios.create({
    baseURL: `${API}/category`
});

export const createCategory = async (category) => {
    try {
        const response = await authApi.post('/create', category);
        return response.data;
    } catch (error) {
        console.error('Error creating category:', error);
        throw error;
    }
};

export const updateCategory = async (categoryId, updatedCategory) => {
    try {
        const response = await authApi.put(`/update/${categoryId}`, updatedCategory);
        return response.data;
    } catch (error) {
        console.error('Error updating category:', error);
        throw error;
    }
};

export const deleteCategory = async (categoryId) => {
    try {
        const response = await authApi.delete(`/delete/${categoryId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting category:', error);
        throw error;
    }
};

export const getAllCategories = async () => {
    try {
        const response = await authApi.get('/getAll');
        return response.data;
    } catch (error) {
        console.error('Error fetching categories:', error);
        throw error;
    }
};
