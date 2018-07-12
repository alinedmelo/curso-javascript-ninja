/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = 'Copa do Mundo';
console.log(championship);

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [
    'Brasil',
    'França',
    'Bélgica',
    'Uruguai',
    'Inglaterra'
];

console.log( 'Times que estão participando do campeonato:', teams );

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/

var showTeamPosition = function(posicao) {

    var classificacao = teams[posicao -1];

    if(posicao > 5 || !posicao) {
        return `Não temos a informação do time que está nessa posição.`;
    } else {
        return `O time que está em ${posicao}º lugar é: ${teams[posicao -1]}`;
    }

};

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(1); //"O time que está em 1º lugar é: Brasil"
showTeamPosition(2); //"O time que está em 2º lugar é: França"
showTeamPosition(3); //"O time que está em 3º lugar é: Bélgica"
showTeamPosition(8); //"Não temos a informação do time que está nessa posição."
/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
var count = 20;

while(count <= 30) {
    console.log(count);
    count++;
} 

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/
var convertToHex = function(cor) {

    var vermelho = '#d61128',
           verde = '#0cd08c',
         laranja = '#f3700b',
            azul = '#1d89dc',
            rosa = '#ea1888';

    switch (cor) {
        case 'vermelho': 
            console.log('O hexadecimal para a cor ' + cor + ' é: ' + vermelho);
            break;
        
        case 'verde': 
            console.log('O hexadecimal para a cor ' + cor + ' é: ' + verde);
            break;

        case 'laranja': 
            console.log('O hexadecimal para a cor ' + cor + ' é: ' + laranja);
            break;

        case 'azul': 
            console.log('O hexadecimal para a cor ' + cor + ' é: ' + azul);
            break;

        case 'rosa': 
            console.log('O hexadecimal para a cor ' + cor + ' é: ' + rosa);
            break;
        default:
            console.log('Não temos o equivalente hexadecimal para ' + cor);
        
    }
    
};
/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex('vermelho')
convertToHex('preto')
convertToHex('azul')
convertToHex('roxo')
convertToHex('verde')
convertToHex('laranja')
convertToHex('branco')
convertToHex('rosa')