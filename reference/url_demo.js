const url = require('url');

const myUrl = new URL('http://mywebsite.com/hello.html?id=100&status=active');

//serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host
console.log(myUrl.host);

// Hostname
console.log(myUrl.hostname);

// search Params
console.log(myUrl.searchParams);

// Protocol
console.log(myUrl.protocol);

