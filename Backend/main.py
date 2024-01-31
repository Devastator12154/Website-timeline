from fastapi import FastAPI
import uvicorn
from fastapi.middleware.cors import CORSMiddleware
from getmongo import get_database
import json
from pydantic import BaseModel
from fastapi.responses import JSONResponse


class Movie(BaseModel):
    title: str
    description: str
    SecondaryDescriptor: str
    
    
   
app = FastAPI()
origins = ["http://localhost:3000", "http://localhost", "http://127.0.0.1", "http://127.0.0.1:3000"]
app.add_middleware(CORSMiddleware,allow_origins=origins,allow_credentials=True,allow_methods=["*"],allow_headers=["*"])
dbname = get_database()
data = dbname["Movies"]
test = data["Test"]

@app.exception_handler(422)
async def handle_422_error(request, exc):

    print(request)
    return JSONResponse(status_code=422,content={"detail": exc.detail})

# data = [{"id": 0 , "title": "Top Gun", "description":"Tom Cruise", "SecondaryDescriptor":"Military movie"},
#             {"id": 1 , "title": "Pirates of The Carribean", "description":"Johnny Depp","SecondaryDescriptor":"Adventure movie"},
#             {"id": 2 , "title": "Terminator", "description":"Arnold Schwarzenegger","SecondaryDescriptor":"Action movie"}]
@app.get("/")
def index():
    return "hello"

@app.get("/movies")
def movies():
    movies = list(test.find({},{"_id":0}))
    print(movies)
    return movies
 
@app.get("/movies/{id}")
def movie(id):
    movie = test.find_one({"id":int(id)}, {"_id":0})
    return movie
    # for i in data:
    #     if i ["id"] == int(id):
    #         return i
    
@app.post("/movies")
def createMovie(movie:Movie):
    print(movie)
    
    return movie


    

if __name__ == "__main__":
    uvicorn.run(app,host="0.0.0.0",port=8000)
    dbname = get_database() # Get the database