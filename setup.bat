@echo off
echo 🚀 Setting up Shoe Shelf Fullstack Application
echo ==============================================

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ❌ Node.js is not installed. Please install Node.js v16 or higher.
    pause
    exit /b 1
)

echo ✅ Node.js version: 
node --version

REM Backend Setup
echo.
echo 📦 Setting up Backend...
cd server

REM Install dependencies
echo Installing backend dependencies...
call npm install

REM Create .env file if it doesn't exist
if not exist .env (
    echo Creating .env file...
    copy env.example .env
    echo ✅ .env file created
) else (
    echo ✅ .env file already exists
)

REM Generate Prisma client
echo Generating Prisma client...
call npm run db:generate

REM Push database schema
echo Setting up database...
call npm run db:push

echo ✅ Backend setup complete!
cd ..

REM Frontend Setup
echo.
echo 📦 Setting up Frontend...
cd client

REM Install dependencies
echo Installing frontend dependencies...
call npm install

echo ✅ Frontend setup complete!
cd ..

echo.
echo 🎉 Setup Complete!
echo ==================
echo.
echo To start the application:
echo.
echo 1. Start the backend server:
echo    cd server ^&^& npm run dev
echo.
echo 2. In a new terminal, start the frontend:
echo    cd client ^&^& npm run dev
echo.
echo 3. Access the application:
echo    Frontend: http://localhost:3000
echo    Backend API: http://localhost:5000
echo    Health Check: http://localhost:5000/health
echo.
echo Happy coding! 👟
pause
