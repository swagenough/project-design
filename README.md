
# Product Management System

Welcome to the Product Management System! This project is a scalable web service system that efficiently manages users, products, and updates. Built with modern technologies, it ensures secure authentication, seamless data handling, and a user-friendly interface.

## Features

- **User Authentication**: Secure user registration and login using JWT and bcrypt.
- **Product Management**: CRUD operations for managing products associated with users.
- **Update Tracking**: Keep track of product updates with detailed information and statuses.
- **Update Points**: Manage specific points within updates for better tracking and organization.
- **API Security**: Protected routes to ensure only authenticated users can access certain endpoints.

## Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT, bcrypt
- **Environment Management**: dotenv
- **API Logging**: morgan
- **CORS Handling**: cors
- **TypeScript**: Ensuring type safety and better development experience


## Getting Started

1. **Clone the repository**:
    ```sh
    git clone https://github.com/yourusername/course-management-system.git
    cd course-management-system
    ```

2. **Install dependencies**:
    ```sh
    npm install
    ```

3. **Set up environment variables**:
    Create a 

.env

 file in the root directory and add your database URL and JWT secret:
    ```
    DATABASE_URL=your_database_url
    JWT_SECRET=your_jwt_secret
    ```

4. **Run migrations**:
    ```sh
    npx prisma migrate dev
    ```

5. **Start the development server**:
    ```sh
    npm run dev
    ```

6. **Access the application**:
    Open your browser and navigate to `http://localhost:3001`.


## License

This project is licensed under the ISC License.

---
