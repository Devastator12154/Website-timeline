from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
app = FastAPI()
origins = ["http://localhost:3000", "http://localhost", "http://127.0.0.1", "http://127.0.0.1:3000"]
app.add_middleware(CORSMiddleware,allow_origins=origins,allow_credentials=True,allow_methods=["*"],allow_headers=["*"])
data = [{"id": 0 , "title": "Top Gun", "description":"Tom Cruise", "SecondaryDescriptor":"Military movie"},
            {"id": 1 , "title": "Pirates of The Carribean", "description":"Johnny Depp","SecondaryDescriptor":"Adventure movie"},
            {"id": 2 , "title": "Terminator", "description":"Arnold Schwarzenegger","SecondaryDescriptor":"Action movie"}]
@app.get("/")
def index():
    return "hello"

@app.get("/movies")
def movies():
    return data
@app.get("/movies/{id}")
def movie(id):
    for i in data:
        if i ["id"] == int(id):
            return i
    

if __name__ == "__main__":
    uvicorn.run(app,host="0.0.0.0",port=8000)