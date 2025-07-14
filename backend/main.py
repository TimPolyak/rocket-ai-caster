from fastapi import FastAPI, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware
import json

app = FastAPI()
app.add_middleware(CORSMiddleware, allow_origins=["*"], allow_methods=["*"], allow_headers=["*"])

@app.post("/analyze")
async def analyze(file: UploadFile = File(...), player: str = "Unknown", tone: str = "Energetic"):
    return {"message": "Uploaded successfully", "player": player, "tone": tone}
