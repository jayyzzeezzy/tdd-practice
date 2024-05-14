const calculator = (function () {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    return { add, sub}
})();

export { calculator };