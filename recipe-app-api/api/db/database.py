from motor.motor_asyncio import AsyncIOMotorClient, AsyncIOMotorDatabase
from api.core.config import settings
from fastapi import HTTPException, status
import pymongo.errors


class MongoClient:
    _client: AsyncIOMotorClient | None = None

    @classmethod
    async def get_client(cls) -> AsyncIOMotorClient:
        try:
            if cls._client is None:
                cls._client = AsyncIOMotorClient(
                    settings.Database_Connection,
                    serverSelectionTimeoutMS=3000  # ⏱ fail fast (3s)
                )

                # 🔥 Force connection test (ASYNC)
                await cls._client.admin.command("ping")

            return cls._client

        except pymongo.errors.ServerSelectionTimeoutError:
            raise HTTPException(
                status_code=status.HTTP_503_SERVICE_UNAVAILABLE,
                detail="Database connection failed"
            )

        except Exception as e:
            raise HTTPException(
                status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
                detail=f"Unexpected database error: {str(e)}"
            )

    @classmethod
    async def get_database(cls) -> AsyncIOMotorDatabase:
        client = await cls.get_client()
        return client.get_database("recipe-app")
