
// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!Array.isArray(matrix) || matrix.length == 0) {
        return [];
    }

    let res = new Array();
    for (let i = 0; i < matrix.length; i = i + 2) {
        for (let z = 0; z < matrix[i].length; z++) {
            res.push(matrix[i][z]);
        }
        if (i < matrix.length - 1) {
            for (let z = matrix[i + 1].length - 1; z >= 0; z--) {
                res.push(matrix[i + 1][z]);
            }
        }
    }
  return res;
}
