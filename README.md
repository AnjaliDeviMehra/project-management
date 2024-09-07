# Project Title : Project Management App

## Overview

The project management app streamlines task tracking, and optimize project workflows through intuitive design and robust features, ultimately increasing project efficiency and success rates.

### Problem

A Project Management app is needed to help teams organize their project progress tracking and task allocation. Centralizing task management improves efficiency, enhances team coordination, and ensures the project stays on track and is completed before the deadline.

### User Profile

This application will be used by project managers and team members to keep track of their ongoing projects.

### Features

This app includes the following functionality

1. Login
2. Signup
3. Add, view, update, delete projects
4. Add, view, update, delete task
5. Updating the status of an ongoing task using kanban board

### Tech Stack

1. React
2. React Router
3. axios
4. sass
5. Node.js
6. Express
7. Database
8. Dnd kit

### Sitemap

1. Signup Page:- allows users to sign up
2. Login Page:- allows users to login
3. Dashboard:- Users can create a new project and view existing projects
4. Task board:- user can view tasks

### Database

Tables:
1.Users
2.Projects
3.Tasks

The user's table and Projects will be linked through a junction table and tasks will be connected to both users and projects through userId and projectId respectively.

### Auth

users are able to signup and login (using jwt for authentication and bcrypt to hash passwords)
