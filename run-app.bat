@echo off

start cmd /k "cd backend && npm start"

start cmd /k "cd nlp-service && venv\Scripts\activate && python -m uvicorn app.main:app --reload"

start cmd /k "cd frontend && npm run dev"