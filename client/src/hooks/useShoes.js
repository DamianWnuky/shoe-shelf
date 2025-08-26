import { useState, useEffect } from 'react';
import { shoesAPI } from '../api/shoes.js';

export const useShoes = () => {
  const [shoes, setShoes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchShoes = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await shoesAPI.getAllShoes();
      setShoes(response.data);
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to fetch shoes');
      console.error('Error fetching shoes:', error);
    } finally {
      setLoading(false);
    }
  };

  const addShoe = async (shoeData) => {
    try {
      setError(null);
      const response = await shoesAPI.createShoe(shoeData);
      setShoes(prevShoes => [response.data, ...prevShoes]);
      return response.data;
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to add shoe');
      throw error;
    }
  };

  const updateShoe = async (id, shoeData) => {
    try {
      setError(null);
      const response = await shoesAPI.updateShoe(id, shoeData);
      setShoes(prevShoes => 
        prevShoes.map(shoe => 
          shoe.id === id ? response.data : shoe
        )
      );
      return response.data;
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to update shoe');
      throw error;
    }
  };

  const deleteShoe = async (id) => {
    try {
      setError(null);
      await shoesAPI.deleteShoe(id);
      setShoes(prevShoes => prevShoes.filter(shoe => shoe.id !== id));
    } catch (error) {
      setError(error.response?.data?.error || 'Failed to delete shoe');
      throw error;
    }
  };

  useEffect(() => {
    fetchShoes();
  }, []);

  return {
    shoes,
    loading,
    error,
    fetchShoes,
    addShoe,
    updateShoe,
    deleteShoe,
  };
};
