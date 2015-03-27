mongoose-bcrypt-compare
=======================

Makes checking bcrypt hashed passwords easier. 

## Installation

npm install mongoose-bcrypt-compare

## Dependencies
bcrypt

## Usage

```javascript
checkEachHash(passwordToCompare, dbResultSet)

var compare = require('mongoose-bcrypt-compare');

// where `hash` is a result from db
PasswordModel.find({}, {_id: 0, password: 1}, function(err, hash){
  if(!err) {
    var result = '';
    result = compare.checkEachHash(req.body.findpwd, hash);
    res.render('findpassword', {check_password: result});
  }
});
```

## Release History

*0.1.1 - initial release
