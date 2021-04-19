//var
var clima = "Quente"
clima = "Frio" //Reatribuição de valor

console.log(clima)

//let
var clima = "Quente"

console.log(clima)

//const - Não pode mudar ao longo da aplicação.
const pi = 3.14

console.log(pi)
//pi = 5 < Comentado pois retorna "Assignment to constant variable"

/* Vendo o tipo da variável:
- Podemos usar typeof conforme exemplos abaixo
*/

console.log(typeof clima)
console.log(typeof pi)

/*Trabalhando o conceito de Block statement
- Delimitação pelas {} dos blocos
- var é global e local
- let e const são apenas locais
*/

//var
//Escopo global
console.log("Existe x antes do bloco?", x) //Devido hoisting já aparece a variável, como undefined, pois a elevação subiu a criação dela.

{ //Escopo local 
    var x = 0
}
//Escopo global

console.log("Existe x depois do bloco?", x)

//let
//Escopo global
//console.log("Existe y antes do bloco?", y)  << Comentada pois retornaria erro y not defined

{ //Escopo local 
    let y = 0
}
//Escopo global

//console.log("Existe y depois do bloco?", y)  << Comentada pois retornaria erro y not defined 