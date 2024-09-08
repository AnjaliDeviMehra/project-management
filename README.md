# Project Title : Project Management App

## Overview

The project management app streamlines task tracking, and optimize project workflows through intuitive design and robust features, ultimately increasing project efficiency and success rates.

### Problem

A Project Management app is needed to help teams organize their project progress tracking and task allocation. Centralizing task management improves efficiency, enhances team coordination, and ensures the project stays on track and is completed before the deadline.

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
3. Axios
4. SASS
5. Node.js
6. Express.js
7. MySQL
8. Knex.js
9. Dnd Kit

### Sitemap

1. Signup Page:- allows users to sign up
2. Login Page:- allows users to login
3. Dashboard:- Users can create a new project and view existing projects
4. Task board:- users can view tasks

### Database

Tables:

1. Users
2. Projects
3. Tasks

The user's table and Projects will be linked through a junction table and tasks will be connected to both users and projects through userId and projectId respectively.

### Auth

users are able to signup and login (using jwt for authentication and bcrypt to hash passwords)

# Setup Instructions

Clone the Repository:

`git clone git@github.com:AnjaliDeviMehra/project-management.git`

## Client Setup Instructions

To set up the client-side of the project, follow these steps:

1. **Navigate to the Client Directory:**

   Go to the `projectmanagement/client` directory:

   `cd projectmanagement/client`

   Run the following command to install all necessary dependencies for the client:

   `npm install`

2. **Create .env File:**

   Create a new .env file in project-management/client directory or copy the existing .env.sample file:

   `cp .env.sample .env`

   Open the .env file and add the base URL for your API:

   `VITE_APP_BASE_URL=http://localhost:your-server-port`

   Example: http://localhost:8080;

   Replace your-server-port with the actual port your server is running at.

## Server Setup Instructions

1. **Clone the Repository and Navigate to the Server Directory**

   Navigate to the server directory where the database setup and other server-related configurations are managed. Follow these steps:

   Change Directory to Server:

   `cd project-management/server`

   In this directory, you will find the configuration files and scripts needed to set up and manage your database.

2. **Install Dependencies**

   To get started with setting up the server,please install the project's dependencies. Run the following command in your terminal:

`npm install`

3. **Configure Environment Variables**

   Create the .env File

   Create a .env file in the /project-management/server directory. This file will store environment-specific variables.

**Create the `.env` File**

1. **use `.env.sample`**

   You can create the `.env` file by copying the sample file. Run the following command in your terminal:

   `cp .env.sample .env`

2. **Manually Adding Variables**

   You can also create the .env file manually. To do this:

   Create a new file named .env in the /project-management/server directory of your project.

   Open the .env file and add the following environment variables:

   PORT=your_port_number
   DB_HOST=your_database_host
   DB_NAME=your_database_name(create a empty database before this step and use the name of you database here)
   DB_USER=your_database_user
   DB_PASSWORD=your_database_password
   SECRET_KEY=your_secret_key

   Replace the placeholder values with the actual values for your environment.

3. **Generate a Secret Key:**

   You'll need to generate a secret key.
   Run the following command to generate a new secret key:

   `node src/utils/generate_key.js`

   Add the Secret Key to Your .env file:

   Copy the generated secret key and paste it into your .env file. Ensure that your .env file contains the key in the following format:

   `SECRET_KEY=your_generated_secret_key`

4. **Run Database Migrations**

   Apply the latest database migrations by running:

   `npx knex migrate:latest`

   This will set up the database schema according to the migration files provided in the project.

5. **Run the Server**

   Start the server using the following command:

   `node --watch index.js`

   This command will run the server and watch for any changes to automatically restart it.
