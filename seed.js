require('dotenv').load();
var mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB);

var Post = mongoose.connection.collection('posts');

var posts = [
  {
    "title": "Cross-Dimensional Televisions",
    "body": "I find television to be excruciatingly boring. You see the same stuff over and over again. That's why I decided to build a television that has access to all channels across all dimensions. Such a television literally",
    "url": "cross-dimensional-televisions",
    "created_at": new Date("2015-09-23T21:42:42.819Z")
  },
  { 
    "title": "Concentrated Dark Matter",
    "body": "Concentrated Dark Matter was a fuel that I invented to travel faster than anyone else in the universe. The Zigerions wanted the secret to making this fuel badly, and constantly tried to trick my grandson and I",
    "url": "concentrated-dark-matter",
    "created_at": new Date("2015-09-22T21:42:42.819Z")
  },
  {
    "title": "Mega Tree Seeds",
    "body": "Dimension 35-C has the perfect conditions for growing Mega Trees. The seeds can be used to briefly make someone incredibly intelligent. Unfortunately in order to get past intergalactic customs, Morty had to hide...",
    "url": "mega-tree-seeds",
    "created_at": new Date("2015-09-21T21:42:42.819Z")
  }
];


Post.drop();

posts.forEach(function(post) {
  Post.insert(post);
});

// hack hack hack
setTimeout(function() {
  process.exit();
}, 5000);
