# 🚀 Shoe Shelf Setup Guide

This guide will walk you through setting up the Shoe Shelf fullstack application step by step.

## 📋 Prerequisites

- **Node.js** (v16 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- **Git** (optional, for version control)

## 🛠️ Quick Setup (Automated)

### For Windows:
```bash
# Run the setup script
setup.bat
```

### For macOS/Linux:
```bash
# Make the script executable
chmod +x setup.sh

# Run the setup script
./setup.sh
```

## 📝 Manual Setup (Step by Step)

### Step 1: Backend Setup

1. **Navigate to the server directory:**
   ```bash
   cd server
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create environment file:**
   ```bash
   # Copy the example environment file
   cp env.example .env
   ```

4. **Generate Prisma client:**
   ```bash
   npm run db:generate
   ```

5. **Set up the database:**
   ```bash
   npm run db:push
   ```

6. **Start the development server:**
   ```bash
   npm run dev
   ```

   The backend should now be running on `http://localhost:5000`

### Step 2: Frontend Setup

1. **Open a new terminal and navigate to the client directory:**
   ```bash
   cd client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the development server:**
   ```bash
   npm run dev
   ```

   The frontend should now be running on `http://localhost:3000`

## 🧪 Testing the Application

1. **Open your browser** and go to `http://localhost:3000`

2. **Register a new account:**
   - Click "Sign up here" on the login page
   - Fill in your details (name, email, password)
   - Click "Create account"

3. **Login to your account:**
   - Use the credentials you just created
   - Click "Sign in"

4. **Add your first shoe:**
   - Fill in the shoe name (e.g., "Air Jordan 1")
   - Fill in the brand (e.g., "Nike")
   - Click "Add Shoe"

5. **Manage your collection:**
   - View all your shoes in the grid
   - Delete shoes using the trash icon
   - Add more shoes as needed

## 🔧 Available Commands

### Backend Commands (in `server/` directory)
```bash
npm start          # Start production server
npm run dev        # Start development server with auto-reload
npm run db:generate # Generate Prisma client
npm run db:push    # Push database schema changes
npm run db:studio  # Open Prisma Studio (database GUI)
```

### Frontend Commands (in `client/` directory)
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🌐 API Endpoints

Once the backend is running, you can test these endpoints:

### Health Check
- `GET http://localhost:5000/health`

### Authentication
- `POST http://localhost:5000/api/auth/register`
- `POST http://localhost:5000/api/auth/login`
- `GET http://localhost:5000/api/auth/me` (requires authentication)

### Shoes Management
- `GET http://localhost:5000/api/shoes` (requires authentication)
- `POST http://localhost:5000/api/shoes` (requires authentication)
- `DELETE http://localhost:5000/api/shoes/:id` (requires authentication)

## 🔒 Environment Variables

The application uses these environment variables (configured in `server/.env`):

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# JWT Configuration
JWT_SECRET=your-super-secret-jwt-key-change-in-production
JWT_EXPIRES_IN=7d

# Database Configuration
DATABASE_URL="file:./dev.db"

# CORS Configuration
CORS_ORIGIN=http://localhost:3000
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
   - Backend: Change `PORT` in `server/.env`
   - Frontend: Change port in `client/vite.config.js`

2. **Database errors:**
   - Run `npm run db:push` in the server directory
   - Check that the `.env` file exists and has correct `DATABASE_URL`

3. **CORS errors:**
   - Ensure both frontend and backend are running
   - Check `CORS_ORIGIN` in `server/.env` matches frontend URL

4. **Module not found errors:**
   - Run `npm install` in both `server/` and `client/` directories
   - Delete `node_modules` and `package-lock.json`, then run `npm install`

### Getting Help

If you encounter issues:

1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify environment variables are set correctly
4. Check that both servers are running on the correct ports

## 📁 Project Structure

```
shoe-shelf/
├── server/                 # Backend application
│   ├── .env               # Environment variables
│   ├── package.json       # Backend dependencies
│   ├── server.js          # Main server file
│   ├── routes/            # API routes
│   ├── controllers/       # Request handlers
│   ├── services/          # Business logic
│   ├── middleware/        # Express middleware
│   ├── utils/             # Utility functions
│   ├── db/                # Database configuration
│   └── prisma/            # Database schema
├── client/                # Frontend application
│   ├── package.json       # Frontend dependencies
│   ├── index.html         # Main HTML file
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── src/               # React source code
├── setup.sh               # Linux/macOS setup script
├── setup.bat              # Windows setup script
└── README.md              # Project documentation
```

## 🎉 Success!

Once everything is set up, you should have:

- ✅ Backend API running on `http://localhost:5000`
- ✅ Frontend application running on `http://localhost:3000`
- ✅ Database initialized with Prisma
- ✅ JWT authentication working
- ✅ Full CRUD operations for shoes

Happy coding! 👟
