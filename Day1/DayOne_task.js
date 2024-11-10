// Today's Goals (Arrays) :

// -Learn Big O Analysis to find Time and Space complexity

// -Array Data Structure Crash Course

// Question 1: Sorted Squared Array - You are given an array of Integers in which each subsequent value is not less than the previous value.
//  Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

// Question 2: Monotonic Array - An array is monotonic if it is either monotone increasing or monotone decreasing.
//  An array is monotone increasing if all its elements from left to right are non-decreasing.
//  An array is monotone decreasing if all  its elements from left to right are non-increasing.
//  Given an integer array return true if the given array is monotonic, or false otherwise.

// Question 1 // Method 1 : - Brute force method
// Time Complexity = O(nlogn)
// Space Complexity  = O(n)

const arr = [-3, 1, 3, 7];
function sortedSquarredArray(array) {
  //write code here.make sure to return desired array
  const newArray = new Array(array.length).fill(0);
  for (let i = 0; i < array.length; i++) {
    newArray[i] = array[i] * array[i];
  }
  newArray.sort((a, b) => a - b);

  return newArray;
}
sortedSquarredArray(arr);

// Question 1 // Method 2
// Time Complexity = O(n)
// Space Complexity = O(n)

function sortedSquarredArray1(array) {
  //write code here.make sure to return desired array
  const newArray = new Array(array.length).fill(0);
  let pointerLeft = 0;
  let pointerRight = array.length - 1;

  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquare = Math.pow(array[pointerLeft], 2);
    const rightSquare = Math.pow(array[pointerRight], 2);

    if (leftSquare > rightSquare) {
      newArray[i] = leftSquare;
      pointerLeft++;
    } else {
      newArray[i] = rightSquare;
      pointerRight--;
    }
  }

  return newArray;
}
sortedSquarredArray1(arr);

// Question 1 // Method 3 Other
// Time Complexity = O(nlogn)
// Space Complexity  = O(n)

function sortedSquarredArray2(array) {
  const newArray = array.map((item) => Math.pow(item, 2));
  newArray.sort((a, b) => a - b);
  return newArray;
}

sortedSquarredArray1(arr);
