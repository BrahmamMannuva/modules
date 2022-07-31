var greetings = require('./greetings.json')

function greet(){
    console.log(greetings.en)
    console.log('create module')
}
module.exports = greet