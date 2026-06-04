@echo off
title Web Testing Simulator - Setup

echo.
echo ==================================================
echo          WEB TESTING SIMULATOR SETUP
echo ==================================================
echo.

echo Checking Python installation...
python --version >nul 2>&1
if errorlevel 1 (
echo.
echo ERROR: Python is not installed or not available in PATH.
echo Please install Python 3.11+ and try again.
pause
exit /b 1
)

echo Checking Node.js installation...
node --version >nul 2>&1
if errorlevel 1 (
echo.
echo ERROR: Node.js is not installed or not available in PATH.
echo Please install Node.js and try again.
pause
exit /b 1
)

echo.
echo ==================================================
echo Installing Backend Dependencies
echo ==================================================
echo.

cd backend

call npm install

if errorlevel 1 (
echo.
echo ERROR: Backend dependency installation failed.
pause
exit /b 1
)

cd ..

echo.
echo ==================================================
echo Installing Frontend Dependencies
echo ==================================================
echo.

cd frontend

call npm install

if errorlevel 1 (
echo.
echo ERROR: Frontend dependency installation failed.
pause
exit /b 1
)

cd ..

echo.
echo ==================================================
echo Setting Up NLP Service
echo ==================================================
echo.

cd nlp-service

if not exist venv (
echo Creating virtual environment...
python -m venv venv

if errorlevel 1 (
    echo.
    echo ERROR: Failed to create virtual environment.
    pause
    exit /b 1
)

)

call venv\Scripts\activate

if errorlevel 1 (
echo.
echo ERROR: Failed to activate virtual environment.
pause
exit /b 1
)

echo.
echo Upgrading pip...
python -m pip install --upgrade pip

if errorlevel 1 (
echo.
echo ERROR: Failed to upgrade pip.
pause
exit /b 1
)

echo.
echo Installing NLP dependencies...
python -m pip install -r requirements.txt

if errorlevel 1 (
echo.
echo ERROR: NLP dependency installation failed.
pause
exit /b 1
)

echo.
echo Installing SpaCy language model...
python -m spacy download en_core_web_sm

if errorlevel 1 (
echo.
echo ERROR: Failed to install SpaCy model.
pause
exit /b 1
)

cd ..

echo.
echo ==================================================
echo              SETUP COMPLETE
echo ==================================================
echo.
echo Next steps:
echo 1. Ensure backend/config/serviceAccountKey.json exists
echo 2. Run start-app.bat
echo 3. Open http://localhost:5173
echo.

pause
