// Алгоритм линейного поиска в массиве

const arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
//O(n) линейный
function searchNumber(arr, number) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === number) {
            return i;
        }
    }
    return false;
}
console.log(searchNumber(arr, 4));