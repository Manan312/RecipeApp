from pydantic import BaseModel

class LoginModel(BaseModel):
    username:str
    password:str


class SignUpModel(BaseModel):
    username: str
    password: str
    email: str
    fullname: str