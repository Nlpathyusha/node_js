const os = require('os')
console.log("Platform: ", os.platform())
console.log("Total Memory: ", os.totalmem())
console.log("Free Memory: ", os.freemem())
console.log("No of ccd ore: ",os.cpus().length)