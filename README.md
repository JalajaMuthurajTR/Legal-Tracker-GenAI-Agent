# Legal-Tracker-GenAI-Agent

Legal-Tracker-GenAI-Agent is an AI-powered legal tracking system that streamlines document analysis, case tracking, and legal insights using modern web technologies.

## 📂 Project Structure

```
Legal-Tracker-GenAI-Agent/
│── backend/     # FastAPI backend
│── frontend/    # Next.js 15 frontend
│── README.md    # Project documentation
```

### 🚀 Tech Stack
- **Frontend**: [Next.js 15](https://nextjs.org/) (React, TypeScript)
- **Backend**: [FastAPI](https://fastapi.tiangolo.com/) (Python, Uvicorn)

## 🛠️ Setup Instructions

### 🔧 Backend (FastAPI)

1. **Create and activate virtual environment**
   ```sh
   python -m venv myenv
   source myenv/bin/activate  # On macOS/Linux
   myenv\Scripts\activate     # On Windows
   ```
2. **Install dependencies**
   ```sh
   pip install -r requirements.txt
   ```
3. **Run the FastAPI server**
   ```sh
   uvicorn app.main:app --reload
   ```
4. **API Documentation**
   - Interactive API docs available at: [http://localhost:8000/docs](http://127.0.0.1:8000/docs)

### 🎨 Frontend (Next.js 15)

1. **Navigate to the frontend directory**
   ```sh
   cd frontend
   ```
2. **Install dependencies**
   ```sh
   npm install
   ```
3. **Run the development server**
   ```sh
   npm run dev
   ```
4. **Access the frontend**
   - Open [http://localhost:3000](http://localhost:3000) in your browser.