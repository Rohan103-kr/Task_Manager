# Mini Task Manager App

A simple full-stack web application to manage tasks. Built with React (Frontend) and Node.js + Express (Backend).

## Live Links
- **Frontend (Vercel):** [INSERT_VERCEL_LINK_HERE]
- **Backend (Render):** [INSERT_RENDER_LINK_HERE]

> **Note to Reviewer:** Please replace `[INSERT_VERCEL_LINK_HERE]` and `[INSERT_RENDER_LINK_HERE]` with the live deployment links after you deploy the app.

## Features
- Add, view, and delete tasks.
- **Bonus Feature:** Toggle tasks as complete or incomplete.
- Clean and intentional glassmorphism UI.
- RESTful API with in-memory storage.

## Folder Structure
```text
project-root/
│
├── client/                 # Frontend React Application (Vite)
│   ├── src/
│   │   ├── components/     # Reusable React components (TaskInput, TaskList, TaskItem)
│   │   ├── App.jsx         # Main application component & API integration
│   │   ├── main.jsx        # Entry point for React
│   │   └── index.css       # Global styles, variables, and animations
│   ├── package.json        # Frontend dependencies & scripts
│   └── vite.config.js      # Vite configuration
│
└── server/                 # Backend Node.js/Express API
    ├── index.js            # Main Express server, middleware, and route handlers
    └── package.json        # Backend dependencies & scripts
```

## How to Run Locally

### Prerequisites
- Node.js installed on your machine.

### 1. Setup the Backend
1. Open a terminal and navigate to the `server` directory:
   ```bash
   cd server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Express server:
   ```bash
   npm run dev
   ```
   *(The server will start on http://localhost:5000)*

### 2. Setup the Frontend
1. Open a **new** terminal window and navigate to the `client` directory:
   ```bash
   cd client
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```
4. Open your browser and go to the local URL provided by Vite (usually `http://localhost:5173`).

## Assumptions & Decisions Made
- **In-Memory Storage:** As instructed, the backend uses a plain JavaScript array (`let tasks = []`) for storage. Tasks will be lost if the server restarts.
- **Deployment Ready:** In `client/src/App.jsx`, the API URL uses `import.meta.env.VITE_API_URL` to support production deployments (like Vercel), with a fallback to `http://localhost:5000/tasks` for local development.
- **Styling Approach:** A custom, responsive "glassmorphism" design was built using pure CSS (`index.css`) rather than relying on heavy component libraries (like Tailwind or Material UI) to ensure clean code and "intentional, basic styling" that still looks very premium.
- **Icons:** Used `lucide-react` for lightweight, beautiful SVG icons.
- **Optimistic UI Updates:** The frontend implements optimistic updates for toggling completion status and deleting tasks. It updates the local state immediately for a snappy user experience, and reverts if the API call fails.
