# MERN To-Do App

A simple To-Do application built with the MERN stack (MongoDB, Express.js, React, Node.js) for learning purposes. This project allows users to add and delete tasks, with data stored in a local MongoDB database.

## Tech Stack
- **Frontend**: React 18 with Vite (fast build tool and dev server)
- **Backend**: Express.js with Node.js
- **Database**: MongoDB (local)
- **Development**: Hot Module Replacement (HMR) for instant updates

## Project Structure
```
todo-app-mern/
├── backend/          # Express.js server and MongoDB setup
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/         # React frontend with Vite
│   ├── App.jsx       # Main App component
│   ├── App.css       # App styles
│   ├── main.jsx      # Entry point
│   ├── index.html    # HTML template
│   ├── vite.config.js # Vite configuration
│   └── package.json
├── .gitignore
└── README.md         # This file
```

## Prerequisites
- Node.js and npm installed
- MongoDB installed and running locally (default port 27017)
- Git installed (for version control)

## Setup Instructions

### Backend
1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` folder with:
   ```env
   MONGO_URI=mongodb://localhost:27017/todoapp
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

### Frontend
1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server (Vite):
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173` (Vite's default port)

### MongoDB
- Ensure MongoDB is running locally:
  ```bash
  mongod
  ```
- The app uses a database named `todoapp` with a `tasks` collection.

## Running the App
1. Start MongoDB in one terminal:
   ```bash
   mongod
   ```
2. Start the backend server in another terminal:
   ```bash
   cd backend
   npm start
   ```
3. Start the frontend in another terminal:
   ```bash
   cd frontend
   npm run dev
   ```
4. Open `http://localhost:5173` in your browser to use the app.

## Features
- Add a new task.
- View all tasks.
- Delete a task.

## Learning Objectives
- Understand the MERN stack architecture.
- Set up a local MongoDB database.
- Build a RESTful API with Express.js.
- Create a React frontend with state management.
- Use modern build tools (Vite) for faster development.
- Use Git for version control.

## Development Notes
- The frontend was migrated from Create React App to Vite for improved performance and faster development experience.
- Vite provides instant Hot Module Replacement (HMR) and lightning-fast builds.
- Dependencies are managed via `package.json` and should not be committed to version control.

## License
MIT License