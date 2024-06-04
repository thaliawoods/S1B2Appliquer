// En JS ou Python, implémenter un bubble sort triant cette liste de 20 entiers :
// [2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42].

let bubbleSort = (inputArr) => {
    let len = inputArr.length;
    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (inputArr[j] > inputArr[j + 1]) {
                let tmp = inputArr[j];
                inputArr[j] = inputArr[j + 1];
                inputArr[j + 1] = tmp;
            }
        }
    }
    return inputArr;
};

console.log(bubbleSort([2, 54, 7, 38, 22, 13, 19, 45, 31, 77, 98, 5, 12, 28, 81, 26, 72, 4, 20, 42]))