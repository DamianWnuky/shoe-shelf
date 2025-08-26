#!/bin/bash

echo "🚀 Setting up Shoe Shelf Fullstack Application"
echo "=============================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js v16 or higher."
    exit 1
fi

echo "✅ Node.js version: $(node --version)"

# Backend Setup
echo ""
echo "📦 Setting up Backend..."
cd server

# Install dependencies
echo "Installing backend dependencies..."
npm install

# Create .env file if it doesn't exist
if [ ! -f .env ]; then
    echo "Creating .env file..."
    cp env.example .env
    echo "✅ .env file created"
else
    echo "✅ .env file already exists"
fi

# Generate Prisma client
echo "Generating Prisma client..."
npm run db:generate

# Push database schema
echo "Setting up database..."
npm run db:push

echo "✅ Backend setup complete!"
cd ..

# Frontend Setup
echo ""
echo "📦 Setting up Frontend..."
cd client

# Install dependencies
echo "Installing frontend dependencies..."
npm install

echo "✅ Frontend setup complete!"
cd ..

echo ""
echo "🎉 Setup Complete!"
echo "=================="
echo ""
echo "To start the application:"
echo ""
echo "1. Start the backend server:"
echo "   cd server && npm run dev"
echo ""
echo "2. In a new terminal, start the frontend:"
echo "   cd client && npm run dev"
echo ""
echo "3. Access the application:"
echo "   Frontend: http://localhost:3000"
echo "   Backend API: http://localhost:5000"
echo "   Health Check: http://localhost:5000/health"
echo ""
echo "Happy coding! 👟"
