//Grouping declarations
let person, age, isHuman

person = "Francisco"
age = 32
isHuman = true

//Grouping writing 
console.log(person, age, isHuman)

//Concatenating variables
console.log("O "+ person +" tem " + age + ' anos.')

//Interpolating values
console.log(`O ${person} tem ${age} anos.`)

//Object

const user = {
    name: "Silvio",
    age: 25,
    weight: 93.1,
    isAdmin: false
}

console.log(user.age) //Imprime apenas a idade

const animals = [
    "Tigre",
    "Leão",
    "Crocodilo",
    "Cobra"
]

console.log(animals)
console.log(animals[1]) //Imprimindo segundo elemento do array
console.log(animals.length) //Imprimindo tamanho do array 