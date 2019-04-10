install json server db
- npm install json-server --save 
creater db.json file as 
{
    "title": {"name": "Car manager"},
  "posts": [
    {
      "id": 1,
      "title": "json-server123",
      "author": "typicode"
    }
  ]
}
run json db server 
-json-server --watch ./src/app/db.json