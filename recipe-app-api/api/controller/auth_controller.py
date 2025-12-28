from fastapi import APIRouter, Depends, HTTPException
from fastapi.security import OAuth2PasswordRequestForm
from api.core.security import create_access_token
from api.models.LoginModel import LoginModel, SignUpModel
from api.db.repos.auth_repo import AuthRepository
router = APIRouter(
    prefix="/auth",
    tags=["Auth"]
)

@router.post("/login")
async def login(data:LoginModel):
    user=await AuthRepository.login(data)
    if user is None:
        raise HTTPException(status_code=401, detail="Invalid credentials")

    token = create_access_token(
        data={"sub": data.username}
    )

    return {
        "access_token": token,
        "token_type": "bearer",
        "username":user["fullname"]
    }

@router.post("/signup")
async def signup(data:SignUpModel):
    if AuthRepository.checkuser(data):
        raise HTTPException(status_code=409, detail="UserName already exists")
    user=await AuthRepository.signup(data)
    if user is False:
        raise HTTPException(status_code=400, detail="User could not be created")

    return HTTPException(status_code=201, detail="User created successfully")