const ExerciciosItems = [
    {
        introducao: "O Hello World é uma frase que todo programador apresenta como sinal de sucesso de seu primeiro programa. Vamos manter o objetivo, mas com uma execução diferente. Crie um programa que apresente 4 vezes a frase “Hello, World!”, cada qual de uma forma distinta, conforme a saída abaixo.",

        dica: "Dica 01",
        problema: "Para realizar uma quebra de linha, utilize o comando \n.",
        solucao: "Por exemplo: o comando printf('Exemplo\n01'); imprime a seguinte saída:",
        ExImg: ".png../../../public/img/Exemplo01.png",

        funcao: "1. Função print()",
        explixacao: "Está contida na biblioteca stidio.h e possibilita ao programador apresentar na tela os valores resultantes de expressões, variáveis ou simplistemente uma caddeia de caracteres (sting). Sua sintaxe possui duas forma:",
        expm: 'printf("cadeia_de_caracteres"); printf("expressão_de_controle", argumentos);',

        codigoApoioTitulo: "4 Operações Matemáticas",
        paragrafo: "Construa um algoritmo que represente as 4 operações básicas da matemática.",
        codigo: '#include <stdio.h> int main (void) { int numero1, numero2, soma, subtracao, multiplicacao; float divisao; printf("Digite o primeiro numero:\n"); scanf("%d", &numero1); printf("Digite o segundo numero:\n"); scanf("%d", &numero2); soma = numero1 + numero2; subtracao = numero1 - numero2; multiplicacao = numero1 * numero2; divisao = numero1 / numero2; printf("\nA soma eh %d", soma); printf("\nA subtracao eh %d", subtracao); printf("\nA multiplicacao eh %d", multiplicacao); printf("\nA divisao eh %f", divisao); return (0); }',
    },

    {
        introducao: "Crie um programa que receba três notas do usuário e calcule a média aritmética dos valores fornecidos.",

        dica: "Dica 01",
        problema: "Para realizar o cálculo da média aritmética, você vai precisar de 3 notas, representativas das notas em cada unidade para o estudante. Perceba que o tipo mais adequado para se representar notas em um algoritmo é o float.",
        solucao: "",
        ExImg: "",

        funcao: "1. Função print()",
        explixacao: "Está contida na biblioteca stidio.h e possibilita ao programador apresentar na tela os valores resultantes de expressões, variáveis ou simplistemente uma caddeia de caracteres (sting). Sua sintaxe possui duas forma:",
        expm: 'printf("cadeia_de_caracteres"); printf("expressão_de_controle", argumentos);',

        codigoApoioTitulo: "4 Operações Matemáticas",
        paragrafo: "Construa um algoritmo que represente as 4 operações básicas da matemática.",
        codigo: '#include <stdio.h> int main (void) { int numero1, numero2, soma, subtracao, multiplicacao; float divisao; printf("Digite o primeiro numero:\n"); scanf("%d", &numero1); printf("Digite o segundo numero:\n"); scanf("%d", &numero2); soma = numero1 + numero2; subtracao = numero1 - numero2; multiplicacao = numero1 * numero2; divisao = numero1 / numero2; printf("\nA soma eh %d", soma); printf("\nA subtracao eh %d", subtracao); printf("\nA multiplicacao eh %d", multiplicacao); printf("\nA divisao eh %f", divisao); return (0); }',
    },
    
  ];
  
export default ExerciciosItems;