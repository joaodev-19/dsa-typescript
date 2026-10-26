function binarySearch(arr: number[], target: number): number | null {
    let low = 0;
    let high = arr.length - 1;

    while (low <= high) {
        const middle = Math.floor((low + high) / 2);
        const guess = arr[middle];

        if (guess === target) {
            return middle;
        } else if (guess > target) {
            high = middle - 1;
        } else {
            low = middle + 1;
        }
    }

    return null;
}

const arr = [1, 3, 5, 7, 9];
console.log(binarySearch(arr, 1)); // Result: 0;
console.log(binarySearch(arr, 9)); // Result: 4;
console.log(binarySearch([], 5));  // Result: null;