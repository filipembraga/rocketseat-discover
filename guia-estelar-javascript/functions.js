//function statement
function createPhrases(){
    console.log("É preciso amar...")
    console.log("As pessoas como se não houvesse amanhã")
    console.log("Porque se você parar, pra pensar, na verdade não há")
}

//execute
createPhrases()

//Arguments and parameters
//Function expression
const sum = function(number1, number2) //Parameters
{
    console.log(number1+number2)
}

sum(5,7) //Arguments

//Returning values
numberX = 30
numberY = 50
console.log(`a soma é ${sum(numberX,numberY)}`) //Without return

const sum_with_return = function(number1, number2)
{
    let total = number1+number2
    return total //Stop execution
}

console.log(`a soma é ${sum_with_return(numberX,numberY)}`) //With return

//Function hoisting
sayMyName()

function sayMyName(){
    console.log("Filipe Braga")
}

//Arrow function - another way of writing
const sayMyName2 = () => {
    console.log("Filipe Braga")
}

sayMyName2()

//Callback function
function sayMyAge(age){
    console.log('Antes de executar a Callback')
    age()
    console.log('Depois de executar a Callback') 
}

sayMyAge(
    () => {
        console.log('Estou na Callback')
    }
)

/* Construction functions

Structure: Function() new
- Expression new;
- Create new object;
*/

function Person(name){
    this.name = name
    this.walk = function(){
        return this.name + " está parado."
    }
}

const pessoa1 = new Person("Filipe")
console.log(pessoa1.walk()) 