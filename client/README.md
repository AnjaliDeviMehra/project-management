## Client Setup Instructions

To set up the client-side of the project, follow these steps:

1. **Navigate to the Client Directory:**

   Go to the `projectmanagement/client` directory:

   `cd projectmanagement/client`

   Run the following command to install all necessary dependencies for the client:

`npm install`

2. **Create or Update the .env File:**

Create a new .env file in project-management/client directory or copy the existing .env.sample file:

`cp .env.sample .env`

Open the .env file and add the base URL for your API:

`VITE_APP_BASE_URL=http://localhost:your-server-port`

example: http://localhost:8080;

Replace your-server-port with the actual port your server is running at.
