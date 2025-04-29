# 🛠️ Backend API Project - Express & MySQL

This is a simple backend project built using **Node.js (Express)** and **MySQL**, featuring **JWT-based authentication**.

## 📌 Main Features

- ✅ User registration with password encryption using `bcrypt`
- ✅ Login and generate **JWT tokens**
- ✅ Token verification middleware for protected routes
- ✅ CRUD operations for products
- ✅ MySQL integration (managed via DBeaver)
- ✅ API testing using Insomnia

## 🧰 Technologies Used

- **Node.js**
- **Express.js**
- **MySQL**
- **JWT (jsonwebtoken)**
- **Bcrypt**
- **DBeaver** (for database management)
- **Insomnia** (for API testing)

## 🚀 Getting Started

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure the database connection in `.env` or directly in the connection file:
   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase
   JWT_SECRET=your_jwt_secret
   ```

4. Run the server:
   ```bash
   node app.js
   ```

5. The server will be available at:
   ```
   http://localhost:3000
   ```

## 📫 Contact

If you want to ask questions or collaborate, feel free to open an issue or pull request.

---

> This project is great for beginners who want to learn backend development from scratch, including authentication and product management.
