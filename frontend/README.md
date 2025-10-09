# Project — Run Backend & Frontend

Quick instructions to run both backend and frontend on macOS. Adjust commands to match the actual backend framework in the `backend` folder.

## Prerequisites
- Node.js (16+) and npm or yarn
- Python 3.8+ if backend is Python 
- A virtual environment for Python projects (recommended)
- Git (optional)

## Folder layout (expected)
- backend/      ← your API ( FastAPI)
- frontend/     ← React app (uses npm/yarn)

---

## Frontend (React)
1. Open a terminal and go to the frontend folder:
   ```
   cd "/Users/dorlensjanvier/DJ web dev2 in class assignment1/frontend"
   ```
2. Install dependencies:
   ```
   npm install
   # or
   yarn
   ```
3. Start dev server:
   ```
   npm start
   # or
   yarn start
   ```
4. Open the app in your browser:
   ```
   http://localhost:3000
   ```
Note: Your React app fetches the backend at `http://127.0.0.1:8000/items` by default. If your backend runs on a different host/port, update the URL in `frontend/src/App.jsx`.

---

## Backend — common commands

Replace `backend` with the actual backend folder name if different.

```

### FastAPI (uvicorn)
```
cd "/Users/dorlensjanvier/DJ web dev2 in class assignment1/backend"
python3 -m venv venv
source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload --host 127.0.0.1 --port 8000
```


### Node / Express
```
cd "/Users/dorlensjanvier/DJ web dev2 in class assignment1/backend/app"
npm install
npm run dev   # or npm start
# or
node index.js
```

---

## Verify the API
From a terminal:
```
curl http://127.0.0.1:8000/items
```
You should get JSON like:
```
{"Users":[{"id":1,"userName":"Dorlens"}, ...]}
```

If you see raw JSON in the browser, you likely opened the backend URL directly. Open the React frontend at http://localhost:3000 to see the UI.

---

## Common troubleshooting
- Make sure backend and frontend are running simultaneously.
- If CORS errors appear, enable CORS in your backend ( FastAPI CORSMiddleware, etc.).
- If the frontend fetches a different URL, update `frontend/src/App.jsx` to point to the correct backend host/port.
- Activate the Python venv before installing or running Python backends:
  ```
  source venv/bin/activate
  ```