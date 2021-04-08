//Link to the question
//https://www.hackerrank.com/challenges/2d-array/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays

function hourglassSum(arr) {
    let highestSum = null;
  
    for (let i = 0; i <= 3; i++) {
      for (let j = 0; j <= 3; j++) {
        let sum = (
          arr[i][j] + arr[i][j + 1] + arr[i][j + 2] +
          arr[i + 1][j + 1] +
          arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
        );
  
        if (highestSum === null || sum > highestSum) {
          highestSum = sum;
        }
      }
    }
  
    return highestSum;
  }
  
  // Sample Input
  const matrix = [
    [1, 1, 1, 0, 0, 0],
    [0, 1, 0, 0, 0, 0],
    [1, 1, 1, 0, 0, 0],
    [0, 0, 2, 4, 4, 0],
    [0, 0, 0, 2, 0, 0],
    [0, 0, 1, 2, 4, 0]
  ];
  
  console.log(hourglassSum(matrix)); // Output = 19