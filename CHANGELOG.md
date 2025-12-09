# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-12-09

### Added
- Initial release of MERN To-Do App
- Add new tasks functionality
- View all tasks functionality
- Delete tasks functionality
- MongoDB integration for data persistence
- RESTful API with Express.js backend
- React frontend with Vite build tool
- Hot Module Replacement (HMR) for development

### Changed
- Migrated frontend from Create React App to Vite for improved performance
- Restructured frontend to use flat file structure (removed src/ directory)
- Updated frontend entry point to `main.jsx`
- Changed component files to use `.jsx` extension

### Technical Details
- **Frontend**: React 18 with Vite
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (local)
- **API Endpoints**: 
  - GET `/tasks` - Fetch all tasks
  - POST `/tasks` - Create new task
  - DELETE `/tasks/:id` - Delete task by ID

[1.0.0]: https://github.com/adem-fennani/to-do-app-MERN/releases/tag/v1.0.0
