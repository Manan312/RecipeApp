from pydantic import BaseModel,Field

class IngredientModel(BaseModel):
    item: str
    quantity: str

class RecipeDetailsModel(BaseModel):
    id: str = Field(alias="_id")
    name:str|None=""
    mealTime:str|None=""
    cuisine:str|None=""
    calories:int
    description:str=""
    ingredients:list[IngredientModel]|None=[]
    steps:list[str]|None=[]

class RecipeFetchModel(BaseModel):
    id:int|None=0
    recipeName:str|None=""
    Cuisine:str|None=""
    MealTime:str|None=""
    page:int=1
    page_size:int=9
    
class RecipeModel(BaseModel):
    id:int|None=0
    name:str|None=""
    mealTime:str|None=""
    cuisine:str|None=""
    calories:int
    description:str=""

