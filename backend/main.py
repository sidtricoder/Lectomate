from fastapi import FastAPI, File, UploadFile, HTTPException
import app.models.file_details as fd
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import os
from typing import List
import uvicorn
from dotenv import load_dotenv

load_dotenv()

# Get configuration from environment variables
ALLOWED_ORIGINS = os.getenv("ALLOWED_ORIGINS", "http://localhost:5173").split(",")
HOST = os.getenv("HOST", "0.0.0.0")
PORT = int(os.getenv("PORT", 8080))

app = FastAPI(
    title = "Lectomate API",
    description="Backend API for AI-powered lecture generation",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=ALLOWED_ORIGINS,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)

@app.get("/")
async def root():
    return {"message" : "Lectomate backend is running!"}

@app.get("/health")
async def health_check():
    return {"status": "healthy", "service": "lectomate"}

#File upload endpoint for PDF and Powerpoint
@app.post("/upload/document")
async def upload_document(file: UploadFile=File(...)):
    allowed_types = ["application/pdf"]
    
    if file.content_type not in allowed_types:
        raise HTTPException(status_code=400, detail="Invalid file type. Only PDF files are allowed.")
    
    fd.print_file(file)
    
    return {
        "message" : "Document uploaded successfully",
        "filename" : file.filename,
        "content_type" : file.content_type,
        "size" : file.size
    }

# Voice sample upload endpoint
@app.post("/upload/voice")
async def upload_voice_sample(file: UploadFile = File(...)):
    # Validate audio file
    allowed_audio_types = ["audio/wav", "audio/mp3", "audio/mpeg", "audio/m4a"]


    
    if file.content_type not in allowed_audio_types:
        raise HTTPException(status_code=400, detail="Invalid audio file type.")
    
    return {
        "message": "Voice sample uploaded successfully",
        "filename": file.filename,
        "content_type": file.content_type,
        "size": file.size
    }

@app.post("/generate/script")
async def generate_script():
    return {
        "message" : "Script generation endpoint - LangChain integration coming soon",
        "status" : "placeholder"
    }

if __name__ == "__main__":
    uvicorn.run(app, host=HOST, port=PORT)