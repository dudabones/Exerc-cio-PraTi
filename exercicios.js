// ---- EXERCÍCIO 1: Verificar se um número é par ou ímpar ----
function verificarParImpar(numero) {
    if (numero % 2 === 0) {
        return `${numero} é par`;
    } else {
        return `${numero} é ímpar`;
    }
}

console.log("\n1. Verificação de par ou ímpar:");
console.log(verificarParImpar(7));
console.log(verificarParImpar(10));

// ---- EXERCÍCIO 2: Classificar idade em categorias ----
function classificarIdade(idade) {
    if (idade <= 12) {
        return `${idade} anos: Criança`;
    } else if (idade <= 17) {
        return `${idade} anos: Adolescente`;
    } else if (idade <= 59) {
        return `${idade} anos: Adulto`;
    } else {
        return `${idade} anos: Idoso`;
    }
}

console.log("\n2. Classificação de idade:");
console.log(classificarIdade(8));
console.log(classificarIdade(15));
console.log(classificarIdade(35));
console.log(classificarIdade(70));

// ---- EXERCÍCIO 3: Classificar nota ----
function classificarNota(nota) {
    if (nota < 0 || nota > 10) {
        return `Nota ${nota}: Inválida`;
    } else if (nota >= 7) {
        return `Nota ${nota}: Aprovado`;
    } else if (nota >= 5) {
        return `Nota ${nota}: Recuperação`;
    } else {
        return `Nota ${nota}: Reprovado`;
    }
}

console.log("\n3. Classificação de nota:");
console.log(classificarNota(8.5));
console.log(classificarNota(6.0));
console.log(classificarNota(3.5));

// ---- EXERCÍCIO 4: Menu interativo usando switch-case ----
function menuInterativo(opcao) {
    switch (opcao) {
        case 1:
            return "Opção 1: Consultar saldo";
        case 2:
            return "Opção 2: Fazer um depósito";
        case 3:
            return "Opção 3: Fazer um saque";
        default:
            return "Opção inválida. Por favor, escolha entre 1 e 3.";
    }
}

console.log("\n4. Menu interativo:");
console.log(menuInterativo(1));
console.log(menuInterativo(2));
console.log(menuInterativo(3));
console.log(menuInterativo(4));

// ---- EXERCÍCIO 5: Calcular IMC ----
function calcularIMC(peso, altura) {
    const imc = peso / (altura * altura);
    
    if (imc < 18.5) {
        return `Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imc.toFixed(2)} - Baixo peso`;
    } else if (imc < 25) {
        return `Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imc.toFixed(2)} - Peso normal`;
    } else if (imc < 30) {
        return `Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imc.toFixed(2)} - Sobrepeso`;
    } else {
        return `Peso: ${peso}kg, Altura: ${altura}m, IMC: ${imc.toFixed(2)} - Obesidade`;
    }
}

console.log("\n5. Cálculo de IMC:");
console.log(calcularIMC(60, 1.70));
console.log(calcularIMC(85, 1.75));

// ---- EXERCÍCIO 6: Verificar tipo de triângulo ----
function verificarTriangulo(a, b, c) {
    // Verificar se os lados formam um triângulo
    if (a < b + c && b < a + c && c < a + b) {
        // Verificar o tipo de triângulo
        if (a === b && b === c) {
            return `Lados ${a}, ${b}, ${c}: Triângulo equilátero`;
        } else if (a === b || a === c || b === c) {
            return `Lados ${a}, ${b}, ${c}: Triângulo isósceles`;
        } else {
            return `Lados ${a}, ${b}, ${c}: Triângulo escaleno`;
        }
    } else {
        return `Lados ${a}, ${b}, ${c}: Não formam um triângulo`;
    }
}

console.log("\n6. Verificação de triângulo:");
console.log(verificarTriangulo(5, 5, 5));
console.log(verificarTriangulo(5, 5, 8));
console.log(verificarTriangulo(3, 4, 5));
console.log(verificarTriangulo(1, 1, 10));

// ---- EXERCÍCIO 7: Calcular valor de maçãs ----
function calcularValorMacas(quantidade) {
    const precoMenosDeUmaDuzia = 0.30;
    const precoUmaDuziaOuMais = 0.25;
    
    if (quantidade < 12) {
        const valor = quantidade * precoMenosDeUmaDuzia;
        return `${quantidade} maçãs: R$ ${valor.toFixed(2)} (R$ 0,30 cada)`;
    } else {
        const valor = quantidade * precoUmaDuziaOuMais;
        return `${quantidade} maçãs: R$ ${valor.toFixed(2)} (R$ 0,25 cada)`;
    }
}

console.log("\n7. Cálculo de maçãs:");
console.log(calcularValorMacas(6));
console.log(calcularValorMacas(12));

// ---- EXERCÍCIO 8: Ordenar valores em ordem crescente ----
function ordenarCrescente(valor1, valor2) {
    if (valor1 === valor2) {
        return `${valor1} e ${valor2}: Os valores são iguais`;
    } else if (valor1 < valor2) {
        return `Ordem crescente: ${valor1}, ${valor2}`;
    } else {
        return `Ordem crescente: ${valor2}, ${valor1}`;
    }
}

console.log("\n8. Ordenação crescente:");
console.log(ordenarCrescente(5, 10));
console.log(ordenarCrescente(15, 7));
console.log(ordenarCrescente(8, 8));

// ---- EXERCÍCIO 9: Contagem regressiva ----
function contagemRegressiva() {
    let resultado = "Contagem regressiva:";
    for (let i = 10; i >= 1; i--) {
        resultado += " " + i;
    }
    return resultado;
}

console.log("\n9. Contagem regressiva:");
console.log(contagemRegressiva());

// ---- EXERCÍCIO 10: Escrever número 10 vezes ----
function escreverDezVezes(numero) {
    let resultado = `O número ${numero} repetido 10 vezes:`;
    for (let i = 1; i <= 10; i++) {
        resultado += `\n${i}. ${numero}`;
    }
    return resultado;
}

console.log("\n10. Número repetido 10 vezes:");
console.log(escreverDezVezes(7));

// ---- EXERCÍCIO 11: Somar 5 números ----
function somarCincoNumeros(numeros) {
    if (numeros.length !== 5) {
        return "Erro: Forneça exatamente 5 números";
    }
    
    let soma = 0;
    let explicacao = "Soma: ";
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        explicacao += numeros[i];
        if (i < numeros.length - 1) {
            explicacao += " + ";
        }
    }
    
    explicacao += " = " + soma;
    return explicacao;
}

console.log("\n11. Soma de 5 números:");
console.log(somarCincoNumeros([10, 20, 30, 40, 50]));

// ---- EXERCÍCIO 12: Mostrar tabuada ----
function mostrarTabuada(numero) {
    if (numero < 1 || numero > 10) {
        return "Por favor, forneça um número entre 1 e 10";
    }
    
    let tabuada = `Tabuada do ${numero}:`;
    for (let i = 1; i <= 10; i++) {
        tabuada += `\n${numero} x ${i} = ${numero * i}`;
    }
    
    return tabuada;
}

console.log("\n12. Tabuada:");
console.log(mostrarTabuada(7));

// ---- EXERCÍCIO 13: Calcular média de números ----
function calcularMedia(numeros) {
    if (numeros.length === 0) {
        return "Nenhum número foi fornecido";
    }
    
    let soma = 0;
    let explicacao = "Números: ";
    
    for (let i = 0; i < numeros.length; i++) {
        soma += numeros[i];
        explicacao += numeros[i];
        if (i < numeros.length - 1) {
            explicacao += ", ";
        }
    }
    
    const media = soma / numeros.length;
    explicacao += `\nMédia: ${soma} ÷ ${numeros.length} = ${media.toFixed(2)}`;
    
    return explicacao;
}

console.log("\n13. Média de números:");
console.log(calcularMedia([7.5, 8.2, 6.3, 9.0, 4.5]));

// ---- EXERCÍCIO 14: Calcular fatorial ----
function calcularFatorial(numero) {
    if (numero < 0) {
        return "Não é possível calcular o fatorial de um número negativo";
    }
    
    if (numero === 0 || numero === 1) {
        return `${numero}! = 1`;
    }
    
    let fatorial = 1;
    let explicacao = `${numero}! = `;
    
    for (let i = numero; i >= 1; i--) {
        fatorial *= i;
        explicacao += i;
        if (i > 1) {
            explicacao += " × ";
        }
    }
    
    explicacao += ` = ${fatorial}`;
    return explicacao;
}

console.log("\n14. Fatorial:");
console.log(calcularFatorial(5));

// ---- EXERCÍCIO 15: Gerar sequência de Fibonacci ----
function gerarFibonacci() {
    const fibonacci = [0, 1];
    
    for (let i = 2; i < 10; i++) {
        fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
    }
    
    return `Primeiros 10 números da sequência de Fibonacci: ${fibonacci.join(', ')}`;
}

console.log("\n15. Sequência de Fibonacci:");
console.log(gerarFibonacci());

