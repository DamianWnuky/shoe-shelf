# 👟 Shoe Shelf - Fullstack Mini-App

A modern fullstack application for managing your personal shoe collection, built with Node.js, Express, Prisma, SQLite, React, and JWT authentication.

## 🏗️ Architecture

### Backend (Server)
```
server/
├── .env                    # Environment variables
├── package.json           # Dependencies and scripts
├── server.js              # Main Express server
├── routes/                # API route definitions
│   ├── auth.routes.js     # Authentication routes
│   └── shoes.routes.js    # Shoe management routes
├── controllers/           # Request handlers
│   ├── auth.controller.js # Auth logic
│   └── shoes.controller.js # Shoe CRUD logic
├── services/              # Business logic layer
│   ├── auth.service.js    # Authentication service
│   └── shoe.service.js    # Shoe management service
├── middleware/            # Express middleware
│   ├── auth.js           # JWT authentication
│   └── errorHandler.js   # Global error handling
├── utils/                 # Utility functions
│   ├── errors.js         # Custom error classes
│   └── validation.js     # Request validation
├── db/                    # Database configuration
│   └── prisma.js         # Prisma client setup
└── prisma/               # Database schema
    └── schema.prisma     # Prisma schema definition
```

### Frontend (Client)
```
client/
├── package.json          # Dependencies and scripts
├── index.html           # Main HTML file
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── src/
    ├── main.jsx         # React entry point
    ├── App.jsx          # Main app component
    ├── api/             # API client functions
    │   ├── client.js    # Axios configuration
    │   ├── auth.js      # Auth API functions
    │   └── shoes.js     # Shoes API functions
    ├── components/      # Reusable components
    │   ├── Layout.jsx   # Main layout
    │   ├── AddShoeForm.jsx # Add shoe form
    │   ├── ShoeList.jsx # Shoe list display
    │   └── ShoeCard.jsx # Individual shoe card
    ├── pages/           # Page components
    │   ├── Login.jsx    # Login page
    │   ├── Register.jsx # Registration page
    │   └── Dashboard.jsx # Main dashboard
    ├── hooks/           # Custom React hooks
    │   ├── useAuth.js   # Authentication hook
    │   └── useShoes.js  # Shoes management hook
    └── styles/          # Styling
        └── index.css    # Main CSS file
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### 1. Clone and Setup
```bash
git clone <repository-url>
cd shoe-shelf
```

### 2. Backend Setup
```bash
cd server

# Install dependencies
npm install

# Copy environment file
cp env.example .env

# Generate Prisma client
npm run db:generate

# Push database schema
npm run db:push

# Start development server
npm run dev
```

### 3. Frontend Setup
```bash
cd client

# Install dependencies
npm install

# Start development server
npm run dev
```

### 4. Access the Application
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000
- Health Check: http://localhost:5000/health

## 🔧 Configuration

### Environment Variables (server/.env)
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

## 📚 API Endpoints

### Authentication
- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user (protected)

### Shoes Management
- `GET /api/shoes` - Get all shoes (protected)
- `GET /api/shoes/:id` - Get specific shoe (protected)
- `POST /api/shoes` - Create new shoe (protected)
- `PUT /api/shoes/:id` - Update shoe (protected)
- `DELETE /api/shoes/:id` - Delete shoe (protected)

## 🛠️ Features

### Backend Features
- ✅ JWT Authentication with bcrypt password hashing
- ✅ Prisma ORM with SQLite database
- ✅ Express.js REST API with proper error handling
- ✅ Request validation with express-validator
- ✅ CORS configuration for frontend integration
- ✅ Security middleware (helmet)
- ✅ Clean architecture with separation of concerns
- ✅ Custom error classes and global error handling

### Frontend Features
- ✅ React 18 with modern hooks
- ✅ React Router for navigation
- ✅ Context API for state management
- ✅ Custom hooks for API integration
- ✅ Tailwind CSS for styling
- ✅ Responsive design
- ✅ Form validation
- ✅ Loading states and error handling
- ✅ Protected routes

### User Experience
- ✅ User registration and login
- ✅ Protected dashboard
- ✅ Add new shoes to collection
- ✅ View all shoes in a grid layout
- ✅ Delete shoes with confirmation
- ✅ Responsive design for mobile and desktop
- ✅ Clean and modern UI

## 🧪 Testing the Application

1. **Register a new account** at http://localhost:3000/register
2. **Login** with your credentials
3. **Add shoes** to your collection using the form
4. **View and manage** your shoe collection
5. **Delete shoes** as needed

## 📦 Available Scripts

### Backend (server/)
```bash
npm start          # Start production server
npm run dev        # Start development server with nodemon
npm run db:generate # Generate Prisma client
npm run db:push    # Push database schema changes
npm run db:studio  # Open Prisma Studio
```

### Frontend (client/)
```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## 🔒 Security Features

- JWT token-based authentication
- Password hashing with bcrypt
- CORS protection
- Helmet security headers
- Input validation and sanitization
- Protected API endpoints
- Secure token storage in localStorage

## 🎨 UI/UX Features

- Modern, clean design with Tailwind CSS
- Responsive layout for all devices
- Loading states and error handling
- Form validation with user feedback
- Confirmation dialogs for destructive actions
- Smooth animations and transitions
- Intuitive navigation

## 🚀 Deployment

### Backend Deployment
1. Set up environment variables for production
2. Run `npm run db:push` to set up database
3. Start with `npm start`

### Frontend Deployment
1. Run `npm run build`
2. Deploy the `dist` folder to your hosting service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the ISC License.

---

**Built with ❤️ using modern web technologies**
