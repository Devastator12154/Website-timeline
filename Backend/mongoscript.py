from getmongo import get_database
import json
import bson

dbname = get_database()
data = dbname["Movies"]
test = data["Test"]
raw = test.find_one({"id":1}, {"_id":0})
hope = json.dumps(raw)
print(hope)