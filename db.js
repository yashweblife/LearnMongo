const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;
const dbname = "todo_list";
const url = "mongodb//localhost:27017";
const mongoOptions = { useNewUrlParser: true };

const state = {
    db: null
}