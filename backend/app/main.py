from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel


app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

items = [
    {"id": 1, "userName": "Dorlens"},
    {"id": 2, "userName": "Justin"},
    {"id": 3, "userName": "Mike"},
]
class User(BaseModel):
    userName: str
@app.get("/")
def read_root():
    return "Hello" "World"
@app.get("/items")
def get_items():
    return {"Users": items}

@app.post("/items")
def add_users(new_user:User):
    new_id = len(items) + 1
    new_user = {"id": new_id, "userName": new_user.userName}
    items.append(new_user)
    return {"user": new_user}


@app.delete("/items/{user_id}")
def delete_item(user_id: int):
    global items
    for user in items:
        if user["id"] == user_id:
            items = [u for u in items if u["id"] != user_id]
            return {"message": f"User {user_id} deleted"}
        raise HTTPException(status_code=404, detail="User not found")