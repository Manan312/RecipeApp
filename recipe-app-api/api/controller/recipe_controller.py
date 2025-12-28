from fastapi import APIRouter,HTTPException,Depends
from api.core.security import get_current_user,verify_token
from api.models.RecipeModel import RecipeModel,RecipeFetchModel,RecipeDetailsModel
from api.db.repos.recipe_repo import RecipeRepository

router=APIRouter(
    prefix="/recipes",
    tags=["Recipe"]
)

@router.get("/")
def userTest():
    return {"Hello","User"}


@router.post("/getrecipes",response_model=list[RecipeModel])
async def getRecipe(payload: RecipeFetchModel):
    recipes=await RecipeRepository.get_recipes_by_Query(payload)
    print(recipes)
    return recipes


@router.post("/getrecipeDetails",response_model=RecipeDetailsModel,dependencies=[Depends(verify_token)])
async def getRecipeDetails(payload: RecipeFetchModel):
    recipes=await RecipeRepository.get_recipe_by_Query(payload)
    if recipes is None:
        raise HTTPException(
            status_code=404,
            detail="Recipe not found"
        )
    return recipes