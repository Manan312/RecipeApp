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

recipe-app/
│
├── frontend/
│   ├── public/
│   │   └── index.html
│   │
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/
│   │   │   └── layout/
│   │   │
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   ├── Recipes/
│   │   │   ├── RecipeDetails/
│   │   │   └── Auth/
│   │   │
│   │   ├── services/
│   │   │   └── api.js
│   │   │
│   │   ├── styles/
│   │   │   ├── global.css
│   │   │   └── variables.css
│   │   │
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   └── package.json
│
├── backend/
│   ├── app/
│   │   ├── routers/
│   │   │   ├── recipes.py
│   │   │   └── auth.py
│   │   │
│   │   ├── models/
│   │   │   ├── recipe_model.py
│   │   │   └── user_model.py
│   │   │
│   │   ├── schemas/
│   │   │   ├── recipe_schema.py
│   │   │   └── user_schema.py
│   │   │
│   │   ├── services/
│   │   │   ├── recipe_service.py
│   │   │   └── auth_service.py
│   │   │
│   │   ├── core/
│   │   │   ├── config.py
│   │   │   └── security.py
│   │   │
│   │   ├── database.py
│   │   └── main.py
│   │
│   ├── requirements.txt
│   └── .env.example
│
├── .gitignore
└── README.md



---

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

👤 Author
Manan Garg
Software Engineer
Tech Stack: React | FastAPI | MongoDB | .NET | SQL Server
