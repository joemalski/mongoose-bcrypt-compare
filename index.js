/*
  Author: Joel F. Malinao
  Package Name: mongoose-bcrypt-compare
  Dependency Package: bcrypt
*/
var bcrypt = require('bcrypt');

var checkEachHash = function(pwdToCompare, hash){
  var status = '';
  for(var attr in hash){      
    status = checkPassword(pwdToCompare, hash[attr].password);
    if(status == true) 
      return status;
    else if(attr >= hash.length - 1){
      return status;
    }
  } 
}

// private function, compares the specific hash
function checkPassword(pwdToCompare, hashedPassword){
  // a lot easier to use than the async version
  var returnRes = bcrypt.compareSync(pwdToCompare, hashedPassword, function(err, result){
    if(!err){
      return result;
    } else {
      console.log('bcrypt error: ' + err);
    }
  });
  return returnRes;
}

module.exports.checkEachHash = checkEachHash;