mongoose-bcrypt-compare
=======================

Utility for checking multiple passwords hashed in bcrypt.  Enables you to check if a certain string is already used as a password.

## Installation

npm install mongoose-bcrypt-compare

## Dependencies
bcrypt

## Usage

```javascript
checkEachHash(passwordToCompare, dbResultSet, showLog)

passwordToCompare -> is the string password to be compared to the hash
dbResultSet -> the json result set (the actual hashed password)
showLog -> shows the log in the node.js server

returns-> true/false

var compare = require('mongoose-bcrypt-compare');

// where `hash` is a json result from db
PasswordModel.find({}, {_id: 0, password: 1}, function(err, hash){
  if(!err) {
    var result = '';
    result = compare.checkEachHash(req.body.findpwd, hash, 1);
    res.render('findpassword', {check_password: result});
  }
});
```

## Release History
0.1.2 - initial release<br>
0.1.3 - added show log<br>
0.1.4 - just edit readme
