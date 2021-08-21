exports.min = function min(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let result = Math.min(...array);
    return result;
};

exports.max = function max(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    let result = Math.max(...array);
    return result;
};

exports.avg = function avg(array) {
    if (!array || array.length === 0) {
        return 0;
    }

    const numbers = [...array];
    let totalSum = 0;

    for (let i in numbers) {
        totalSum += numbers[i];
    }

    let numsCnt = numbers.length;
    if (!numsCnt) return 0;

    return totalSum / numsCnt;
};
