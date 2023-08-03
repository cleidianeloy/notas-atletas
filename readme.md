<h1>Projeto para certificação do DEVSTART</h2>
<h2>O desafio consiste em:</h2>

<p>
    Crie uma aplicação capaz de receber o nome e as notas de um atleta, calcular a média e apresentar ao usuário.
</p>
<p>
    Você deverá criar uma função capaz de receber uma matriz de objetos contendo o nome do atleta e as cinco notas atribuídas. A sua função deverá calcular a média das notas sem considerar a maior e menor nota do atleta. Por fim, deverá apresentar ao usuário o nome de cada atleta, seguido das notas e da média calculada.
</p>
<p>
    Utilize a seguinte entrada:
</p>

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

<p>
    A saída deve ser:
</p>

         Atleta: Cesar Abascal
         Notas Obtidas: 10, 10, 7.88, 8.42, 9.34
         Media Válida: 9.253333333333332

         Atleta: Fernando Puntel
         Notas Obtidas: 10, 10, 7, 8, 9.33
         Media Válida: 9.11

         Atleta: Daiane Jelinsky
         Notas Obtidas: 10, 7, 8, 9.5, 9.5
         Media Válida: 9

         Atleta: Bruno Castro
         Notas Obtidas: 10, 10, 10, 9, 9.5
         Media Válida: 9.833333333333334
