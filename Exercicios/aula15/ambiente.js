let num = [1,2,3,4,5]
/*num.push(6)
num.sort()
console.log(num.length)*/

// posso mostrar as posições com um for

/*for (var pos=1; pos<num.length;pos+=1) {
    console.log(num[pos])
}

for (let n in num) {
    console.log(num[n])
} */

let n_pos = num.indexOf(3)
console.log(`O numero 3 está no array na posição ${n_pos}`)