let amigo = {
    nome:'Murilo',
    peso:67.5,
    sexo:'M',
    engordar(p=0) {
        this.peso += p
        console.log('Engordou')
    }
}
console.log(amigo.peso)
amigo.engordar(2)
console.log(amigo.peso)
