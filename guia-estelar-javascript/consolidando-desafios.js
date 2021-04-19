/* Transformar notas escolares

Crie algoritmo para tranformar notas em sistema numérico para notas em caracteres (A,B, C...):
- de 90 para cima - A;
- entre 80 e 89 - B;
- entre 70 e 79 - C;
- entre 60 e 69 - D;
- menor que 60 - E. 
*/

function getNota (nota){
    let conceito;

    console.log(`A nota total foi: ${nota}`)
    if(nota < 60 && nota >= 0){
        conceito = "E"
    } else if(nota < 70 && nota >= 0){
        conceito = "D"
    } else if(nota < 80 && nota >= 0){
        conceito = "C"
    } else if(nota < 90 && nota >= 0){
        conceito = "B"
    } else if(nota <= 100 && nota >= 0){
        conceito = "A"
    } else{
        conceito = "Inválido"
    }

    return conceito
}

console.log(getNota(100))
console.log(getNota(120))
console.log(getNota(80))
console.log(getNota(59))
console.log(getNota(-1))

