/**
 * Function to find a peak of a given array, utilizing the Divide and Conquer strategy.
 * @param arr Array to find a peak of.
 * @returns The position on the array where a peak is located. Returns -1 if no peak is found.
 */
function peakFindingDivide(arr: number[]): number {

  if (arr.length === 0) {
    return -1;
  }
  if (arr.length === 1) {
    return arr[0];
  }

  let middle = Math.floor(arr.length / 2);
  // console.log('Middle: ' + middle);
  // console.log(arr);

  if (arr[middle + 1] > arr[middle]) {
    return peakFindingDivide(arr.splice(arr[middle], arr.length));
  } else if (arr[middle - 1] > arr[middle]) {
    return peakFindingDivide(arr.splice(0, arr[middle]));
  } else {
    return arr[middle];
  }
}

function main() {

  console.log('Testing Peak Finding implementation\n');

  // let arr1 = [51, 10, 23, 56, 85, 10, 1, 33, 4, 8, 20, 13, 33, 45, 62, 30, 41];
  // console.log('Testing array 1, should return 20');
  // console.log(`Actual result: ${peakFindingDivide(arr1)}`);

  // let arr2 = [1, 1, 1, 1, 1, 1, 1];
  // console.log('\nTesting array 2, should return 1');
  // console.log(`Actual result: ${peakFindingDivide(arr2)}`);

  // let arr3 = [] as number[];
  // console.log('\nTesting array 3, should return -1');
  // console.log(`Actual result: ${peakFindingDivide(arr3)}`);

  let arr4 = [] as number[];
  for (let index = 0; index < 100_000; index++) {
    arr4.push(index);
  }
  console.log('\nTesting array 4, should return 100.000');
  console.log(`Actual result: ${peakFindingDivide(arr4)}`);

  // let arr5 = [9, 8, 7, 6, 5, 4, 3, 2, 1];
  // console.log('\nTesting array 5, should return 9');
  // console.log(`Actual result: ${peakFindingDivide(arr5)}`);
}

main();