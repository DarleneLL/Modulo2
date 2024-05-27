//função que retorna uma outra função que incrementa um valor interno 
//e retorna o valor atualizado a cada chamada.

function contador() {
    let count = 0; // Valor interno do contador

    // Retorna uma função que incrementa o contador e retorna o valor atualizado
    return function() {
        return ++count;
    };
}

let contador1 = contador();
console.log(contador1()); // 1
console.log(contador1()); // 2
console.log(contador1()); // 3

let contador2 = contador();
console.log(contador2()); // 1
console.log(contador2()); // 2