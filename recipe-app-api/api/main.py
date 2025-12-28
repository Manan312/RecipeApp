from fastapi import FastAPI
from api.controller.recipe_controller import router as user_router
from api.controller.recipe_controller import router as recipe_router
from api.controller.auth_controller import router as auth_router
from api.core.config import settings
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",   # CRA
        "http://localhost:5173",
        "http://127.0.0.1:3000",
        "http://127.0.0.1:5173",   # Vite
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(user_router)
app.include_router(recipe_router)
app.include_router(auth_router)
@app.get("/")
async def read_root():
    return {"Hello": "World"}
