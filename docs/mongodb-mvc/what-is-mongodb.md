# What is MongoDB?

According to Wikipedia: MongoDB is a cross-platform document-oriented database.
Classified as  a NoSQL database, MongoDB eschews the traditional table-based
relational database structure in favor of JSON-like documents with dynamic
schemas (MongoDB calls the format BSON), making the  integration of data in
certain types of applications easier and faster.

In essence MongoDB lets us store *documents*, which are really just JSON objects.

e.g., Here is a piece of JSON (actually BSON, because you can't have things
like ISODate(...) in JSON) that we could store in MongoDB.

```javascript
{
  "title": "Cross-Dimensional Televisions",
  "body": "I find television to be excruciatingly boring...",
  "url": "cross-dimensional-televisions",
  "created_at": ISODate("2015-09-21T21:42:42.819Z")
}
```

## Installing MongoDB

The best way to learn MongoDB is to play around with it, so let's install it!

[Install Link](http://docs.mongodb.org/manual/tutorial/install-mongodb-on-os-x/)

> This is for Mac, you can select your platform as necessary.

Make sure to follow all of the instructions, you're likely going to have to change
the ownership of `/data/db` with `chown`.

These are the commands you'll likely have to run on Mac.

```bash
$ sudo mkdir -p /data/db
$ sudo chown `whoami` /data/db
```

## Running MongoDB

Awesome, now you have MongoDB installed. Now we need to get it started. To start
the MongoDB daemon (so it will keep running in the background) run:

```bash
$ mongod
```

## Connecting to MongoDB

Assuming you have MongoDB running you're now going to want to connect with it
so that you can actually play around with it. To connect to MongoDB and run
the MongoDB shell run:

```bash
$ mongo
```

> I highly suggest you install [mongo-hacker](https://github.com/TylerBrock/mongo-hacker)
which will add sytax highlighting and formatting to the MongoDB shell.

## Common Commands

Here are some common commands you'll probably want to run in the MongoDB shell.

```bash
# show all the databases
show dbs

# select a database
use <database name>

# show all of the collections inside the database
show collections

# find all of the documents in a collection
db.<collection name>.find({})

# find all of the documents in a collection with a certain key-value on them
db.<collection name>.find({ "<key>": "<value>" })

# insert a document into a collection
db.<collection name>.insert(<json object>)

# insert our example at the top into a collection called posts in a database called boilercamp
use boilercamp
db.posts.insert({"title": "Cross-Dimensional Televisions","body": "I find television to be excruciatingly boring.","url": "cross-dimensional-televisions","created_at": ISODate("2015-09-21T21:42:42.819Z")})
```
