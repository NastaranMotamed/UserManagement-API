
# User Management API

A simple API for user registration and login with JWT authentication, built using Node.js, Express, and MongoDB.

## Features
- **User Registration**: Create a new user with username, email, and password.
- **User Login**: Authenticate a user by email and password.
- **JWT Authentication**: Secure authentication using JWT.
- **Password Hashing**: Store passwords securely with bcryptjs.

## Technologies Used
- **Node.js**, **Express**, **MongoDB**, **Mongoose**, **bcryptjs**, **jsonwebtoken**, **dotenv**

## Setup

### Prerequisites
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/try/download/community)

### Install Dependencies
Clone the repository and install dependencies:

```bash
git clone https://github.com/NastaranMotamed/User-Management.git
cd user-management-api
npm install
```

### Environment Variables
Create a `.env` file:

```env
JWT_SECRET=your_secret_key
```

### Run the Application
Start the app:

```bash
npm start
```

For development mode with auto-reloading:

```bash
npm run dev
```

## API Endpoints

### `POST /api/users/register`
Create a new user.

**Request**:
```json
{
  "username": "user123",
  "email": "user123@example.com",
  "password": "password123"
}
```

**Response**:
- Status: `201 Created`
- Body: `"User created successfully"`

### `POST /api/users/login`
Login to get a JWT token.

**Request**:
```json
{
  "email": "user123@example.com",
  "password": "password123"
}
```

**Response**:
- Status: `200 OK`
- Body: 
```json
{
  "token": "your_jwt_token_here"
}
```

## Folder Structure
```
user-management-api/
│
├── controllers/
│   └── userController.js    # Handles user registration and login
│
├── models/
│   └── User.js              # Mongoose model for User
│
├── routes/
│   └── userRoutes.js        # User registration and login routes
│
├── .env                     # Environment variables (e.g., JWT_SECRET)
├── app.js                   # Main server file
├── package.json             # Dependencies and metadata
└── README.md                # This file
```

## License
MIT License - see the [LICENSE](LICENSE) file for details.
