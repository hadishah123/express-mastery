# 04 – Databases

This section introduces database integration with Express using MongoDB and Mongoose.

You’ll move from a mock database to a real persistent database and structure your app using a clean MVC architecture.

```bash
04-databases/
├── config/
│   └── db.js              # Database connection logic
├── models/
│   └── User.js            # Mongoose model
├── controllers/
│   └── userController.js  # Business logic
├── routes/
│   └── userRoutes.js      # Route definitions
├── .env
├── server.js
├── package.json
└── README.md

```
---

## 📚 Concepts Covered

- Connecting to MongoDB
- Mongoose schemas & models
- CRUD operations with database
- MVC structure (Model–View–Controller pattern)
- Environment variables using dotenv
- Basic error handling
- Async/Await with database queries

---

## 🧠 How Data Flows
Understanding the request lifecycle is critical:
```bash
Client → Route → Controller → Model → Database → Response
```

--- 

# ⚙️ Setup Instructions
### 1️⃣ Install Dependencies
```bash
npm install
```
### 2️⃣ Configure Environment Variables

Create a .env file:
```bash
PORT=3000
MONGO_URI=mongodb://127.0.0.1:27017/express-mastery
```

`If using MongoDB Atlas, replace the MONGO_URI with your cloud connection string.`

### ▶️ Run the Server
```bash
npm run dev
```
Server will start at:
```bash
http://localhost:3000
```

## 🧪 Testing Your API 
Run:
```bash
npm run dev
```
Test using Postman:
- POST → http://localhost:3000/api/users
  - Postman: body>JSON format add:
```bash
{
    "name": "Hadi",
    "email": "hadi@email.com",
    "gender": "male",
    "age": 25
}
```
- GET → http://localhost:3000/api/users
- GET by ID → /api/users/:id
- PUT → /api/users/:id
- DELETE → /api/users/:id



## Goal
Understand how data flows:
```bash
Client → Route → Controller → Model → Database → Response
```