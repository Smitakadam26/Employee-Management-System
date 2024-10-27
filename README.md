The Employee Management System is a web-based application developed using MySQL, Node.js, and React. It features separate dashboards for administrators and employees, allowing for efficient management of employee data. The system provides secure login and logout functionality to ensure that only authorized users have access to the application.

Prerequisites

Node.js (12.x or later)

MySQL server

npm (Node package manager)

Install the required packages:

npm  install

Initialize the database tables by running:

npm run 

This will start the Node.js server, and you can access the application in your web browser by visiting http://localhost:3000.

Project Structure

backend/: Contains the Node.js server code and API routes.

frontend/: Contains the React code for the admin and employee dashboards.

Admin Dashboard

Accessible at /admin

Features include employee add,delete ,edit and all information handling, department category handle ,admin profile

Employee Dashboard

Accessible at /employee

Features include viewing personal information , edit the information.

Authentication

Login: Users can log in using their credentials at the /login route.

Logout: Users can log out by clicking the "Logout" button available on the dashboards.
