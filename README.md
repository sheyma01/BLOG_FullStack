# BLOG_FullStack
# Blogging Platform

## Project Overview
This project is a full-stack blogging platform developed as part of a course in Client-Side 
Frameworks. It allows users to perform CRUD operations for blogs and user accounts.

## Architecture

### Frontend
The frontend is developed using ReactJS. The main components are:
- `App.js`: Main application component
- `Home.js`, `Create.js`, `BlogDetails.js`, etc.: UI components for various functionalities
- `useFetch.js`: A custom React hook for fetching data from the server

### Backend
The backend is developed using Node.js and Express.js. The main files are:
- `server.js`: The main server file where the application starts
- `BlogModel.js`: Contains the schema definition for blogs
- `blogController.js`: Handles the logic for blog-related operations
- `blog.js`: Defines the routes for CRUD operations on blogs

## Technologies Used
- Frontend: ReactJS
- Backend: Node.js, Express.js
- Database: MongoDB (Schema defined in `BlogModel.js`)
- Others: Custom React hooks, RESTful API design

## Features
- Create a new user account with unique email verification
- Create, read, update, and delete blog entries
- View a list of all blogs with minimal details
- View detailed information about a specific blog
- Fetch and display the author information (first name, last name) for each blog

## How to Run
1. Navigate to the backend folder and run `npm install` to install backend dependencies.
2. Run `npm start` to start the backend server.
3. Navigate to the frontend folder and run `npm install` to install frontend dependencies.
4. Run `npm start` to start the frontend application.

