//new - create new object
let person = new String("Filipe Braga")
let isHuman = new Boolean(true)
console.log(person, isHuman)

//typeof - return type
console.log(typeof person, typeof "Desenvolvedor")

//delete - delete 
const user = {
    id: 1,
    age: 38,
    senha: "1234fgh"
}
console.log(user)
delete user.senha
console.log(user)

//arithmetic operators
console.log(5 * 3)
console.log(5 / 3)
console.log(5 + 3)
console.log(5 - 3)
console.log(5 % 3)
let increment = 0
console.log(++increment)
console.log(--increment)
console.log(5 ** 3)

//comparative operators >>> == === != !== > >= < <= 
let one = 1
console.log(one == 1)
console.log(one == "1")
console.log(one === 1)
console.log(one === "1")//=== compare types

//assignmente operators
let w
w = 1
console.log(w)
console.log(w += 100)
console.log(w -= 1)
console.log(w *= 2)
console.log(w /= 2)
console.log(w %= 27)
console.log(w **= 4)

/* logic operators
- AND &&
- OR ||
- NOT ! 
*/

/* conditional operator (ternary)
- Structure:
Condition ? value1 : value2
*/
let study = true
let practice = true
const niceDevelopment = study && practice ? "Está no caminho certo!" : "Vai dar ruim!"

console.log(niceDevelopment)