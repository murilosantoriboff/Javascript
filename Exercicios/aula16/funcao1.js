function par_impar(num) {
    if (num%2==0) {
        return 'Par'
    } else {
        return 'Impar'
    }
}

teste1 = par_impar(8)
teste2 = par_impar(3)
console.log(teste1, teste2)