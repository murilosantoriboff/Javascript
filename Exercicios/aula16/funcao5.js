function fatorial(num) {
    if(num==1) {
        return 1
    }
    else {
        return num*fatorial(num-1)
    }
}

console.log(fatorial(5))

/* 
Forma Recusiva = Função chama função
5! = 5 x 4 x 3 x 2 x 1 = 120
5! = 5 x 4!

n! = n x (n-1)!
*/