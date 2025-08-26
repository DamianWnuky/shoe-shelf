import apiClient from './client.js';

export const shoesAPI = {
  // Get all shoes for the authenticated user
  getAllShoes: async () => {
    const response = await apiClient.get('/shoes');
    return response.data;
  },

  // Get a specific shoe by ID
  getShoeById: async (id) => {
    const response = await apiClient.get(`/shoes/${id}`);
    return response.data;
  },

  // Create a new shoe
  createShoe: async (shoeData) => {
    const response = await apiClient.post('/shoes', shoeData);
    return response.data;
  },

  // Update a shoe
  updateShoe: async (id, shoeData) => {
    const response = await apiClient.put(`/shoes/${id}`, shoeData);
    return response.data;
  },

  // Delete a shoe
  deleteShoe: async (id) => {
    const response = await apiClient.delete(`/shoes/${id}`);
    return response.data;
  },
};
