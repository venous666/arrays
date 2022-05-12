let nomes= ["cebolinha", "do contra", "monica"]
console.log("Arrey completo",nomes)
console.log("Arrey na posiçao 0",nomes[0])
console.log("Arrey na posiçao 0",nomes[1])
console.log("Arrey na posiçao 0",nomes[2])

console.log("tamanho do array",nomes.length)

for(let i = 0; i < nomes.length; i++){
console.log(nomes[i])

}
for(let i in nomes){
console.log(nomes[i])

}
for(let nome of nomes){
console.log(nome, nome.length)
}