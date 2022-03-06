const path = require('path');

// base file name
console.log(path.basename(__filename))

//Directory name
console.log(path.dirname(__filename));
console.log(path.extname(__filename));

//Create path object
console.log(path.parse(__filename))

// Concatenate paths
console.log(path.join(__dirname,'test','hello.html'));
