/* Prototype

- prototype-based language
- prototype chain
- __proto__
*/

console.log("Filipe".length)
console.log("Filipe".toUpperCase())
console.log(23.3456798.toPrecision(3))

// Type conversion (typecasting) x Type coersion

console.log('9' + 5 ) //typecasting
console.log(Number('9') + 5) //type coersion

//Manipulating data
let string = "123"
console.log(Number(string))

let number = 321
console.log(String(number))
console.log(String(number).length)

let number2 = 512351235.2372342
console.log(number2)
console.log(number2.toFixed(2))
console.log(number2.toFixed(2).replace(".",",")) //This change to String the variable

//Searching words in phrases
let phrase = "Eu irei ser um ótimo desenvolvedor"
console.log(phrase.includes("jogador"))
console.log(phrase.includes("desenvolvedor"))

//Separating strings
let arraySplit1 = phrase.split() //Without cutting parameter
let arraySplit2 = phrase.split(" ") //With parameter
console.log(arraySplit1)
console.log(arraySplit2)

//Joining
let phraseWithUnderscore = arraySplit2.join("_") //Joining
console.log(phraseWithUnderscore)

//Counting array elements
let myArray = [
    "C#",
    "C++",
    "Python",
    "Java",
    "Ruby"
]
console.log(myArray.length)

//Changing string for arrays
let word = "Desenvolvimento"
console.log(Array.from(word))

//Manipulating arrays
let techs = ["html", "css","js"]
console.log(techs)

techs.push("nodejs") //Add item at the end
console.log(techs)
techs.unshift("sql") //Add item at the start
console.log(techs)
techs.pop() //Remove item at the end
console.log(techs)
techs.shift() //Remove item at the start
console.log(techs)

console.log(techs.indexOf('css')) //Searching index of items
console.log(techs.slice(1,3)) //Get some items
techs.splice(1,1) //Remove some items
console.log(techs) 
