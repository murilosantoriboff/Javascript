function fatorial(num) {
    f = 1
    for(let cont=1;cont<=num;cont+=1) {
        f *= cont
    }
    return f
}

teste1 = fatorial(5)
teste2 = fatorial(7)
console.log(teste1, teste2)