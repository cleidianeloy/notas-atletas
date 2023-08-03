let atletas = [
    {
      nome: "Cesar Abascal",
      notas: [10, 9.34, 8.42, 10, 7.88]
    },
    {
      nome: "Fernando Puntel",
      notas:  [8, 10, 10, 7, 9.33]
    },
    {
      nome: "Daiane Jelinsky",
      notas: [7, 10, 9.5, 9.5, 8]
    },
    {
      nome: "Bruno Castro",
      notas: [10, 10, 10, 9, 9.5]
    }
];
function ordena(notas){
    notas.sort()
    return notas.join(', ');
}
function media(notas){
    let soma = 0;
    notas.sort(function (a , b){
        if(a > b){
            return 1; 
        }else if(a < b){
            return -1;
        }
        return 0;
    })
    notas.forEach(function(nota, index){
        if(index !== 0 && index !== (notas.length - 1)){
            soma += nota;
        }
    })
    return soma / (notas.length - 2);
}
atletas.forEach(function(atleta){
    let nome = atleta.nome;
    let notas = atleta.notas;
    console.log(
        ` \n
         Atleta: ${nome} \n
         Notas Obtidas: ${ordena(notas)} \n
         Media Válida: ${media(notas)}`
    )
})
   