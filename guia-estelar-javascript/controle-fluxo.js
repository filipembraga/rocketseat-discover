//if...else
let temperature = 38

if (temperature >= 37){
    console.log("Febre")
} else if (temperature >=39){
    console.log("Febre alta")
} else{
    console.log("Saudável")
}

//switch
let option = 3

switch(option){
    case 1:
        console.log("X")
        break
    case 2:
        console.log("Y")
        break
    default:
        console.log("Fora de faixa")
        break
}

//throw 

function sayMyCity(city){
    if(city === ''){
        throw 'Preencha a cidade - informação obrigatória'
        //throw new Error("Preencha a cidade - informação obrigatória")
    }
    
    console.log("Depois do teste de erro")
}
//sayMyCity('') >>> Pararia a aplicação. Deve ser usado dentro do Try...catch

//try...catch
try {
    sayMyCity('')
} catch(e){
    console.log(e)
}
console.log("Após a função de erro")