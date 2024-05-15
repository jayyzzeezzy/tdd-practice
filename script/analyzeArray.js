function analyzeArray(array) {
    array.sort();
    const max = array[array.length - 1];
    const min = array[0];
    const length = array.length;
    let sum = 0;
    for (let i = 0; i < length; i++) {
        sum += array[i];
    };
    const average = sum / length;

    return { average, min, max, length };
};

export { analyzeArray };