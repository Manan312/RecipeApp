import re
from api.db.database import MongoClient
from api.db.base import searlize, searlize_docs
from api.models.RecipeModel import RecipeModel
from api.models.RecipeModel import RecipeFetchModel

class RecipeRepository:

    @staticmethod
    async def get_recipes_by_Query(payload:RecipeFetchModel):
        db=await MongoClient.get_database()
        query = {}
        if payload.recipeName and payload.recipeName.strip():
            query["name"] = {"$regex": re.escape(payload.recipeName), "$options": "i"}

        if payload.MealTime and payload.MealTime.strip():
            query["mealTime"] = payload.MealTime

        if payload.Cuisine and payload.Cuisine.strip():
            query["cuisine"] = payload.Cuisine  
        skip = (payload.page - 1) * payload.page_size

        recipes = await db.recipes.find(query) \
            .skip(skip) \
            .limit(payload.page_size) \
            .to_list(length=payload.page_size)
        print(recipes)
        return searlize_docs(recipes)
    
    @staticmethod
    async def get_recipe_by_Query(payload:RecipeFetchModel):
        db=await MongoClient.get_database()
        print(payload)
        query = {}

        if payload.recipeName:
            query["name"] = {
                "$regex": re.escape(payload.recipeName),
                "$options": "i"
            }

        if payload.MealTime:
            query["mealTime"] = payload.MealTime

        if payload.Cuisine:
            query["cuisine"] = payload.Cuisine
        print(query)
        recipe = await db.recipes.find_one(query)

        if not recipe:
            return None

        return searlize(recipe)
    
    @staticmethod
    async def get_all_recipes():
        db=await MongoClient.get_database()
        page = 1        # 1, 2, 3...
        page_size = 6
        skip = (page - 1) * page_size
        recipes = await db.recipes.find().skip(skip).limit(page_size).to_list(length=page_size)
        if recipes:
            return searlize_docs(recipes)
        return None
    
    @staticmethod
    async def add_recipe(data:RecipeModel):
        db=await MongoClient.get_database()
        result = await db.recipes.insert_one(data.dict())
        return str(result.inserted_id)
    
    @staticmethod
    async def edit_recipe(data:RecipeModel):
        db=await MongoClient.get_database()
        result = await db.recipes.update_one({"name": data.name}, {"$set": data.dict()})
        return str(result.upserted_id)