# MERN To-Do App

A simple To-Do application built with the MERN stack (MongoDB, Express.js, React, Node.js) for learning purposes. This project allows users to add and delete tasks, with data stored in a local MongoDB database.

## Project Structure
```
todo-app-mern/
├── backend/          # Express.js server and MongoDB setup
│   ├── server.js
│   ├── .env
│   └── package.json
├── frontend/         # React frontend
│   ├── public/
│   │   └── index.html
│   ├── src/
│   │   ├── App.js
│   │   ├── App.css
│   │   ├── index.js
│   │   ├── index.css
│   │   └── reportWebVitals.js
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
3. Start the React app:
   ```bash
   npm start
   ```

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
   npm start
   ```
4. Open `http://localhost:3000` in your browser to use the app.

## Features
- Add a new task.
- View all tasks.
- Delete a task.

## Learning Objectives
- Understand the MERN stack architecture.
- Set up a local MongoDB database.
- Build a RESTful API with Express.js.
- Create a React frontend with state management.
- Use Git for version control.

## License
MIT License