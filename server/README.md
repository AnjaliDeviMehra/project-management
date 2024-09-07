# Setup Instructions

## Step 1. Clone the Repository and Navigate to the Server Directory

After cloning the project repository, you need to navigate to the server directory where the database setup and other server-related configurations are managed. Follow these steps:

Clone the Repository:

`git clone git@github.com:AnjaliDeviMehra/project-management.git`

Change Directory to Server:

`cd project-management/server`

In this directory, you will find the configuration files and scripts needed to set up and manage your database.

## Step 2: Install Dependencies

To get started with setting up the server, you need to install the project's dependencies. Run the following command in your terminal:

`npm install`

### Step 2: Configure Environment Variables

Create the .env File

You need to create a .env file in the /project-management/server directory. This file will store environment-specific variables.

### Create the `.env` File

1. **_ use `.env.sample` _**

   You can create the `.env` file by copying the sample file. Run the following command in your terminal:

   `cp .env.sample .env`

2. **_ Manually Adding Variables_**

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

3. **_Generate a Secret Key:_**

You'll need to generate a secret key.
Run the following command to generate a new secret key:

`node src/utils/generate_key.js`

Add the Secret Key to Your .env file:

Copy the generated secret key and paste it into your .env file. Ensure that your .env file contains the key in the following format:

`SECRET_KEY=your_generated_secret_key`

### Step 3: Run Database Migrations:

Apply the latest database migrations by running:

`npx knex migrate:latest`

This will set up the database schema according to the migration files provided in the project.

### Step 4: Run the Server:

Start the server using the following command:

`node --watch index.js`

This command will run the server and watch for any changes to automatically restart it.
