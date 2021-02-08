const matrixExample = [
    [1, 2, 3, 4],
    [4, 5, 6, 5],
    [7, 8, 9, 7],
    [7, 8, 9, 7]
];

function sumUpDiagonals1(matrix) {
    let result1 = 0;
    matrix.forEach((item, i) => result1 += item[i]);

    let result2 = 0;
    matrix.reverse().forEach((item, i) => result2 += item[i]);

    // реверс влияет на оригинал, делаем реверс обратно
    matrix.reverse();

    return [result1, result2];
}

function sumUpDiagonals2(matrix) {
    let result1 = 0;
    matrix.forEach((item, i) => result1 += item[i]);

    let result2 = 0;
    const matrix2 = [];
    while (matrix.length) matrix2.push(matrix.pop());
    matrix2.forEach((item, i) => result2 += item[i]);

    // та же история, делаем "реверс" обратно
    while (matrix2.length) matrix.push(matrix2.pop());

    return [result1, result2];
}

function sumUpDiagonals3(matrix) {
    let result1 = 0;
    matrix.forEach((item, i) => result1 += item[i]);

    let result2 = 0;
    matrix.forEach((item, i) => result2 += item[matrix.length - i - 1]);
    // здесь я не трогаю оригинал, реверс не требуется

    return [result1, result2];
}


console.log(sumUpDiagonals2(matrixExample));
console.log(sumUpDiagonals1(matrixExample));
console.log(sumUpDiagonals3(matrixExample));
