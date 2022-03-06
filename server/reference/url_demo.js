const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);

//Serialized query
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

//Add param
myUrl.searchParams.append('abc','123');
console.log(myUrl.searchParams);

// loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name} and ${value}`));
