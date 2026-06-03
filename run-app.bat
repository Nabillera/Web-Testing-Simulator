@echo off
title Web Testing Simulator

echo Starting Web Testing Simulator...
echo.

set ROOT=%~dp0

echo Starting Backend...
start "Backend" cmd /k "cd /d "%ROOT%backend" && npm start"

timeout /t 2 >nul

echo Starting NLP Service...
start "NLP Service" cmd /k "cd /d "%ROOT%nlp-service" && call venv\Scripts\activate && python -m uvicorn app.main:app --reload"

timeout /t 2 >nul

echo Starting Frontend...
start "Frontend" cmd /k "cd /d "%ROOT%frontend" && npm run dev"

echo.
echo ========================================
echo All services launched
echo ========================================
echo.
echo Frontend: http://localhost:5173
echo Backend:  http://localhost:5000
echo NLP:      http://localhost:8000
echo.
echo Do not close the opened terminal windows.
echo.

pause