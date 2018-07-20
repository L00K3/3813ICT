//import { helloWorld } from 'hello-world-npm'

//Task 1
console.log("Hello World, Node.js")

//Task 2
let myString = "Hello@World, Node.js Stringsss"
let badWord = "bad word"
let mistype = "Spwlling"

//Task 3
myString = myString.replace(/@/, " ")
myString = myString.replace(/(s(?=s))+/, "")

//Task 4
if (badWord.match(/(bad word)/) != null) {
    badWord = badWord.replace(/(bad word)/, "****")
}

//Task 5
//console.log(helloWorld())