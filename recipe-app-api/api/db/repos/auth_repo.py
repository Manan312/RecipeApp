from api.db.database import MongoClient
from api.db.base import searlize
from api.models.LoginModel import LoginModel, SignUpModel


class AuthRepository:

    @staticmethod
    async def login(data:LoginModel):
        db=await MongoClient.get_database()
        #usehashing
        user=await db.users.find_one({"username":data.username})
        if user:
            if user["password"]==data.password:
                return searlize(user)
            else:
                return None
        return None
    @staticmethod
    async def signup(data:SignUpModel):
        db=await MongoClient.get_database()
        #usehashing
        user=await db.users.insert_one(data.dict())
        if user:
            new_user=await db.users.find_one({"_id":user.inserted_id})
            if new_user:
                return True
            else:
                return False
        return False
    @staticmethod
    async def checkuser(data:SignUpModel)-> bool:
        db=await MongoClient.get_database()
        #usehashing
        user=await db.users.find_one({"username":data.username})
        if user:
            return False
        else:
           return True
