# Before Reading

This chapter cover two fundamental concepts: binary search and Big O notation. I'm already familiar with both, but I want to review carefully to strengthen my undersating.

# After reading

Here are some points I'd like to discuss.

## Time Complexity Analysis

Big O notation describes an upper bound on how an algorithm's resource usage grows as the input size increases. It's commonly used to describe an algorithm's worst-case time complexity.

Even if an algorithm finds the answer on its first operation, that doens't necessarily represent its worst-case time complexity. We need to consider how the number of operations grows as the input gets larger.

For example, binary search has a best-case time complexity of O(1), but its worst-case time complexity is O(log n).

The way the big O notation works is it measures the number of operations an algorithm needs on its worst-case scenario.

## Implementation

My implementation is saved in binary-search.ts.

It's a simple implementation of binary search, which requires a sorted array. It uses two indices, low and high, to represent the boundaries of the current search interval.

As long as low is less than or equal to high, the algorithm repeats the following steps:

1. Calculate the middle index using `Math.floor((low + high) / 2);`, then retrieve the value at that position with arr[middle].
2. Check whether the value matches our target.
3. If it matches, return the index store in middle.
4. If the value is smaller thant the target, move the lower boundary to middle + 1, excluding the left half of the current search interval.
5. Otherwise, move the upper boundary to middle - 1, excluding the right half.
6. If the target isn't found after the loop finishes, return null.

The key idea is that each iteration eliminates approximately half of the remaining search interval.

Instead of checking every element, we repeatedly narrow down the search until we find the target or determine that it isn't present.

This gives binary search a worst-case time complexity of **O(log n)** and an auxiliary space complexity of **O(1)**.

## What I got wrong

I made a few mistakes during my first implementation.

The most important one was forgetting to use Math.floor() when calculating the middle index. Without it, the result could be a decimal number, which isn't a valid array index.

I also mixed up the lower and upper boundaries in step 4 of my original explanation, even though the implementation itself handled them correctly.

Finally, I made a few spelling and grammar mistakes in my notes. My English is a little rusty, but I'm confident it'll improve with practice.

```
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
```