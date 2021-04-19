/* String - Cadeia de caracteres

-Formas de escrever:
" " > Aspas duplas;
' ' > Aspas simples;
` ` > Template literals ou template string (permite saltar linha).
*/

console.log('Escrevendo com aspas')
console.log("Escrevendo com aspas duplas")
console.log(`Escrevendo com crase`)
console.log(`
Escrevendo com quebra de linha
`)
console.log(`Interpolando ${8 + 8}`)

/* Number - números
- Podem ser inteiros, reais (float), NoN (not a numbar), infinitos (Infinity)
*/

console.log(12.5/12)
console.log(12.5/"textando dividir pelo texto") //Retornará NaN para sinalizar que o resultando não é o esperado (number)
console.log(12.5 === Infinity)

/*  Boolean - Verdadeiro ou Falso

True 
False
*/

console.log(true)
console.log(false)

/* undefined - Indefinido <> Nulo

null - objeto que não possui nada dentro.
*/

console.log(undefined)
console.log(null)

/* objetos - dados estruturais.
-Têm propriedades/atributos;
-Têm funcionalidades/métodos;
*/

console.log({
    name:"Nome Exemplo",
    idade: 38,
    andar: function(){
        console.log('Estou andando')
    }
})

// arrays (vetores) - são uma lista/agrupamento de dados.

console.log([
    "C#",
    "Java",
    "Python",
    "C++"
]) 
