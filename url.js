const url=require('url');
const reqURL='http://127.0.0.1:5500/4F/Node/login.html?name=Dineshkumar&age=33';
const parseURL=url.parse(reqURL,true);
console.log(parseURL);
console.log(parseURL.query);