const colors = require('colors');
const bcrypt = require('bcryptjs');

bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash("makers", salt, function(err, hash) {
        // Store hash in your password DB. 
        console.log("passwordnya jadi ".rainbow, hash.red)
    });
});