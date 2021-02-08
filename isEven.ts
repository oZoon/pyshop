function isEven(num: number): Boolean {
    // Returns True if **num** is even or False if it is odd.
    return Boolean(num % 2);
}

[
    {value: 0, result: true},
    {value: 1, result: false},
    {value: 2, result: true},
    {value: -2, result: true},
    {value: 0.1, result: false},
    {value: -0.1, result: false},
    {value: NaN, result: false},
    {value: Infinity, result: false},
    {value: -Infinity, result: false},
    // '',
    // null,
    // undefined,
    // [],
    // {},
    // 'string',
    // '0',
    // '1',
    // '-1',
    // '2',
    // '-2',
    // new Function(),
    // new Boolean(),
    // new Boolean(true),
    // new Boolean(false),
    // Symbol('0'),
    // Symbol('1'),
    // Symbol('-1'),
    // Error(),
    // new EvalError(),
    // new RangeError(),
    // new ReferenceError(),
    // new SyntaxError(),
    // new TypeError(),
    // new URIError(),
    // new Number(),
    // new Date(),
    // new String(),
    // new Proxy({}, {}),
    // Symbol(),
].forEach(item => {
    console.log(`value: '${item.value}', is even: ${isEven(item.value) === item.result}`);
})
