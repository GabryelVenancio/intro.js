let x = [10,20,30,40];

const n = x.length;

console.log("len array:", n);

for (let i = 0; i < n && i !== 2; i++) {
    console.log(`indice $(i) tem o valor ${x[i]}`)
}