# Full-Stack Application: React.js + ASP.NET Core Web API + SQL Server

## 📋 Overview

This is a full-stack application that replicates the core features of **Instagram** with a **React.js** frontend and a **.NET Core Web API (v8)** backend, connected to a **SQL Server** database.

The app includes functionalities like user authentication, photo uploads, likes, comments, and a feed showcasing posts from other users.

---

## ✨ Features

- **Frontend**: Built with **React.js** for a dynamic and responsive user interface.
- **Backend**: Developed using **ASP.NET Core Web API 8**, providing secure and efficient endpoints.
- **Database**: Uses **SQL Server** for data storage and management.
- **Authentication**: Bycrypt(currently will change to jwt later ) for secure user login and registration.
- **Image Handling**: Upload and display user photos with support for captions.
- **Feed**: Displays posts from followed users in chronological order.
- **Responsive Design**: Optimized for mobile devices currently.

## Support This Project

If you find this project helpful, you can support it by making a donation:
[![Donate](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/ncp/payment/HKG73CGX6E5LC)

## 📂 Project Structure

```
### Frontend (React.js)

frontend/
├── public/
├── src/
│ ├── Api/
│ ├── components/
│ ├── icons/
│ ├── pages/
│ ├── services/
│ ├── utils/
│ ├── App.tsx
│ └── main.tsx
├── package.json
├── eslint.config.js
├── tailwind.config.js
├── postcss.config.js
├── index.html
└── README.md
```

```
### Backend (ASP.NET Core Web API)

backend/
├── Src/
│ ├── Controllers/
│ ├── Models/
│ ├── DB/
│ ├── Services/
│ └── Middlewares/
├── Program.cs
├── README.md
└── appsettings.json

```

---

## 🛠️ Technologies Used

- **Frontend**: React.js, Axios, React Router, Redux Toolkit
- **Backend**: ASP.NET Core Web API 8
- **Database**: SQL Server
- **Other Tools**: Postman, Swagger for API documentation

---

## ⚙️ Prerequisites

- **Node.js** (v18+)
- **.NET SDK** (v8)
- **SQL Server** (any compatible version)
- **npm** or **yarn**
- **Visual Studio** or any IDE with .NET Core support
- **Postman** (optional, for API testing)

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

---

### 2. Set Up the Frontend

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
   The React app should now be running on `http://localhost:3000`.

---

### 3. Set Up the Backend

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```
2. Update the connection string in `appsettings.json`:

   ```json
   "ConnectionStrings": {
       "DefaultConnection": "Server=YOUR_SERVER;Initial Catalog=YOUR_DATABASE;TrustServerCertificate=True;Trusted_Connection=True"

   ```

3. Apply migrations and seed the database (if applicable):
   ```bash
   dotnet ef database update
   ```
4. Start the backend server:
   ```bash
   dotnet run
   ```
   The Web API should now be running on `http://localhost:7272` (or another specified port).

---

### 4. Connect Frontend to Backend

- Update/Check the API base URL in your React app (e.g., `src/Api/AxiosInstance.js`):
  ```javascript
  basrUrl = 'http://localhost:7272/api';
  ```

---

## 🧪 Testing the Application

- **Frontend**: Access the React app at `http://localhost:3000`.
- **API Testing**: Use **Postman** or **Swagger** to test backend endpoints:
  - Swagger UI: `http://localhost:7272/swagger`
- **Database**: Verify the data in your SQL Server database using tools like **SQL Server Management Studio (SSMS)**.

---

<!-- ## 🌐 Deployment

### Backend

- Deploy the **ASP.NET Core Web API** to [Azure App Service/AWS/Heroku/etc.].
- Ensure the SQL Server database is accessible from the deployed backend. -->

### Frontend

- Build the React app:
  ```bash
  npm run build
  ```
  <!-- - Deploy the `build` folder to [Vercel/Netlify/etc.]. -->

---

## 📖 API Documentation

Use the Swagger UI for API documentation and testing:

```
http://localhost:7272/swagger
```

---

## 👨‍💻 Author

- **Name**: Satmeet Singh
- **GitHub**: [GitHub Profile](https://github.com/SatmeetSingh)
- **LinkedIn**: [LinkedIn Profile](https://www.linkedin.com/in/satmeet-singh-a025a516a/)
