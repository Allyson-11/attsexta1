let array = ['maria', 'joao', 'lucas']

for (let index = 0;index < array.length; index++) {
    const element = array[index];
    console.log('o elemento é', element)
}

let arrayDados = [10,20,30,40,50]

for(let index = 0; index < arrayDados.length; index++){
    const element = arrayDados[index];
    if (element === 40) {
        console.log('0 numero 40 foi encontrado')
        break
    }
}


let condition = true
while(condition) {
    console.log('entrou no while')
    condition = false
}
