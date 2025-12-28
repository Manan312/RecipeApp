# 🍽️ Recipe App

A full-stack Recipe Application where users can search, filter, and explore recipes by meal time, cuisine, and ingredients.

---

## 🚀 Tech Stack

### Frontend
- React (Functional Components, Hooks)
- React Router
- Axios
- CSS (Responsive Design)

### Backend
- FastAPI
- MongoDB
- Motor (Async MongoDB Driver)
- Pydantic
- Uvicorn

---

## 📁 Project Structure

```text
RecipeApp/
│
├── recipe-app/                     # React Frontend
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── api/
│   │   │   └── middleware.js
│   │   │
│   │   ├── assets/
│   │   │   └── react.svg
│   │   │
│   │   ├── components/
│   │   │   ├── HomeComponents/
│   │   │   ├── card/
│   │   │   ├── footer/
│   │   │   ├── header/
│   │   │   └── navbar/
│   │   │
│   │   ├── pages/
│   │   │   ├── about/
│   │   │   ├── contact/
│   │   │   ├── home/
│   │   │   ├── login/
│   │   │   ├── signup/
│   │   │   ├── recipes/
│   │   │   ├── recipe-details/
│   │   │   └── notfound/
│   │   │
│   │   ├── router/
│   │   │   ├── AppRouter.jsx
│   │   │   └── PrivateRouter.jsx
│   │   │
│   │   ├── layout/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── index.html
│   ├── package.json
│   └── .gitignore
│
├── recipe-app-api/                # FastAPI Backend
│   ├── api/
│   │   ├── controller/
│   │   │   ├── auth_controller.py
│   │   │   └── recipe_controller.py
│   │   │
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   │
│   │   ├── db/
│   │   │   ├── database.py
│   │   │   └── repos/
│   │   │
│   │   ├── models/
│   │   │   ├── LoginModel.py
│   │   │   └── RecipeModel.py
│   │   │
│   │   └── main.py
│   │
│   └── .gitignore
│
└── README.md

```

## ✨ Features

- 🔍 Search recipes by name
- 🍳 Filter recipes by meal time
- 🌍 Filter by cuisine
- 📋 View recipe ingredients & steps
- 📱 Fully responsive UI
- ⚡ FastAPI async backend
- 🗄️ MongoDB NoSQL database

---

## 🖥️ Frontend Setup (React)

```bash
cd frontend
npm install
npm start
Frontend runs at:


http://localhost:3000
⚙️ Backend Setup (FastAPI + MongoDB)
1️⃣ Create Virtual Environment

cd backend
python -m venv venv
source venv/bin/activate   # Windows: venv\Scripts\activate
2️⃣ Install Dependencies

pip install -r requirements.txt
3️⃣ Environment Variables
Create a .env file using .env.example:

MONGO_URI=mongodb://localhost:27017
DATABASE_NAME=recipe_db
4️⃣ Run Backend Server

uvicorn app.main:app --reload
Backend runs at:

http://localhost:8000
```
📡 API Endpoints
🍽️ Recipes
| Method | Endpoint            | Description                          |
| ------ | ------------------- | ------------------------------------ |
| GET    | `/getrecipes`       | Fetch all recipes                    |
| GET    | `/getrecipeDetails` | Get detailed information of a recipe |



🔐 Authentication
| Method | Endpoint  | Description       |
| ------ | --------- | ----------------- |
| POST   | `/login`  | User login        |
| POST   | `/signup` | User registration |

Swagger UI:

http://localhost:8000/docs
🗃️ MongoDB Document Structure
json
Copy code
{
  "name": "Pancakes",
  "mealTime": "Breakfast",
  "cuisine": "Continental",
  "calories": 350,
  "ingredients": [
    { "item": "Flour", "quantity": "1 cup" },
    { "item": "Milk", "quantity": "1/2 cup" }
  ],
  "steps": [
    "Mix all ingredients",
    "Heat the pan",
    "Cook until golden brown"
  ]
}
🔒 Best Practices
Environment variables for sensitive data

Async database operations

Clean separation of concerns

Scalable architecture

🧪 Testing (Optional)

pytest
📌 Future Enhancements
User authentication (JWT)

Favorite recipes

Admin recipe management

Image upload support

Pagination & caching

🤝 Contributing
Fork the repository

Create a feature branch

Commit your changes

Open a Pull Request

📄 License
This project is licensed under the MIT License.

## 👤 Author

- **Manan Garg**
- Software Engineer
- Tech Stack: React | FastAPI | MongoDB | .NET | SQL Server


