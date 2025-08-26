const ShoeCard = ({ shoe, onDelete }) => {
  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this shoe?')) {
      try {
        await onDelete(shoe.id);
      } catch (error) {
        console.error('Error deleting shoe:', error);
      }
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-1">
            {shoe.name}
          </h3>
          <p className="text-sm text-gray-600 mb-2">
            Brand: <span className="font-medium">{shoe.brand}</span>
          </p>
          <p className="text-xs text-gray-500">
            Added: {formatDate(shoe.createdAt)}
          </p>
        </div>
        
        <button
          onClick={handleDelete}
          className="ml-4 text-red-600 hover:text-red-800 p-1 rounded-full hover:bg-red-50 transition-colors"
          title="Delete shoe"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {shoe.brand}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShoeCard;
