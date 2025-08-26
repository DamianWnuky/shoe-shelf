import { useState } from 'react';
import Layout from '../components/Layout.jsx';
import AddShoeForm from '../components/AddShoeForm.jsx';
import ShoeList from '../components/ShoeList.jsx';
import { useShoes } from '../hooks/useShoes.js';

const Dashboard = () => {
  const { shoes, loading, error, addShoe, deleteShoe } = useShoes();
  const [isAddingShoe, setIsAddingShoe] = useState(false);

  const handleAddShoe = async (shoeData) => {
    setIsAddingShoe(true);
    try {
      await addShoe(shoeData);
    } finally {
      setIsAddingShoe(false);
    }
  };

  return (
    <Layout>
      <div className="space-y-6">
        {/* Header */}
        <div className="bg-white p-6 rounded-lg shadow-sm border">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">
            Your Shoe Collection
          </h1>
          <p className="text-gray-600">
            Manage and organize your personal shoe collection
          </p>
        </div>

        {/* Add Shoe Form */}
        <AddShoeForm onAddShoe={handleAddShoe} loading={isAddingShoe} />

        {/* Shoe List */}
        <ShoeList
          shoes={shoes}
          loading={loading}
          error={error}
          onDelete={deleteShoe}
        />
      </div>
    </Layout>
  );
};

export default Dashboard;
