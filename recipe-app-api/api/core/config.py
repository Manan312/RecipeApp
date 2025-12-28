from pydantic_settings import BaseSettings
from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[1]  # points to /api
ENV_FILE = BASE_DIR / ".env"

class Settings(BaseSettings):
    Database_Connection: str
    JWT_SECRET_KEY: str
    JWT_ALGORITHM: str
    JWT_EXPIRE_MINUTES: int

    class Config:
        env_file = ENV_FILE
        case_sensitive = True

settings = Settings()
