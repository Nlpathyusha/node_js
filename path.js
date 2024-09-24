const path = require('path')
const filepath = 'C:\\Users\\vignan\\Documents\\FSD\\path.js'
console.log("Directory: ", path.dirname(filepath))
console.log("File Name: ", path.basename(filepath))
console.log("Extension Name: ", path.extname(filepath))
const newFilePath = path.join(__dirname, 'os.js')
console.log(newFilePath)