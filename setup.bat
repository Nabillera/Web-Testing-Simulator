@echo off
title Web Testing Simulator - Setup

echo ========================================
echo Web Testing Simulator Setup
echo ========================================
echo.

echo Checking Python...
python --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Python is not installed or not in PATH.
    pause
    exit /b
)

echo Checking Node.js...
node --version >nul 2>&1
if errorlevel 1 (
    echo ERROR: Node.js is not installed or not in PATH.
    pause
    exit /b
)

echo.
echo ========================================
echo Installing Backend Dependencies
echo ========================================
cd backend
call npm install

echo.
echo ========================================
echo Installing Frontend Dependencies
echo ========================================
cd ..\frontend
call npm install

echo.
echo ========================================
echo Setting up NLP Environment
echo ========================================
cd ..\nlp-service

if not exist venv (
    echo Creating virtual environment...
    python -m venv venv
)

call venv\Scripts\activate

echo Installing NLP dependencies...
python -m pip install --upgrade pip
python -m pip install -r requirements.txt

echo.
echo ========================================
echo Setup Complete
echo ========================================
echo.
echo You can now run start-app.bat
echo.

pause