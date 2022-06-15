
const children = (row, column, array, acumulator, arrayResult) => {
    let nextColumn = column + 1;
    if (acumulator === undefined) {
        acumulator = array[row][column];
    }

    if (arrayResult === undefined) {
        arrayResult = [];
    }

    let ac1 = acumulator;
    let ac2 = acumulator;
    let ac3 = acumulator;

    if (nextColumn < array[row].length) {
        if (row > 0) {
            ac1 += array[row - 1][nextColumn];
            arrayResult.push(ac1);
            children(row - 1, nextColumn, array, ac1, arrayResult);
        }

        ac2 += array[row][nextColumn];
        arrayResult.push(ac2);
        children(row, nextColumn, array, ac2, arrayResult);

        if (row < array.length - 1) {
            ac3 += array[row + 1][nextColumn];
            arrayResult.push(ac3);
            children(row + 1, nextColumn, array, ac3, arrayResult);
        }
    }

    return arrayResult;
}

const traverseWithMoreBananas = (array) => {
    const pathValue = [];
    for (let n = 0; n < array.length; n++) {
        pathValue.push(Math.max(...children(n, 0, array)));
    }
    return Math.max(...pathValue);
}

exports.traverseWithMoreBananas = traverseWithMoreBananas;