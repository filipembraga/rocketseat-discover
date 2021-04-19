//for
for(let i=0; i<10; i++){
    console.log(i)
}

for(let i=15; i>0; i--){
    if(i===5){
        break //interrompe o laço e segue a leitura do código
        //continue //interrompe nesse ponto e retorna ao laço na próxima iteração
    }
    console.log(i)
}
console.log("Fim do For")

//while
let i=0
while(i<10){
    console.log(i)
    i++
}
console.log("Fim do While")

//for...of 
let developer = 'Filipe'
let techs = ['C#', 'Java', 'Python', 'Ruby']

for (let char of developer){
    console.log(char)
}

for (let name of techs){
    console.log(name)
}

//for...in
let person = {
    name: 'Bruno Braga',
    age: 30,
    weight: 75.4
}

for (let property in person){
    console.log(property)
    console.log(person[property])
}
