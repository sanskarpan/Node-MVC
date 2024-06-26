# User API (MVC Architecture)

### Prerequisites
- Node.js
- MongoDB

### Installation
1. Clone the repository:
    ```bash
    git clone https://github.com/sanskarpan/Node-MVC
    ```
2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and add your MongoDB URI and JWT secret:
    ```plaintext
    MONGODB_URI=mongodb://localhost:27017/worko
    JWT_SECRET=your_jwt_secret
    PORT=3000
    ```

4. Start the server:
    ```bash
    npm start
    ```

### Running Tests
```bash
npm test
```

### API Endpoints
- **GET** /api/worko/user - List users
- **GET** /api/worko/user/:userId - Get user details
- **POST** /api/worko/user - Create user
- **PUT** /api/worko/user/:userId - Update user
- **DELETE** /api/worko/user/:userId - Soft delete user



### Conclusion
This guide covers the setting up of a Node.js project with MVC architecture, implementing CRUD operations, adding validation, writing unit tests, and preparing a README file. Please adjust the code to suit your specific requirements and environment.

