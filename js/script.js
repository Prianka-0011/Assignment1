


//Answer 1:
function max(num1,num2)
{
    if(num1>num2)
    {
        return num1
    }
    return num2;
}
console.log("Max value is: "+max(12, 3)); // Output: 12
console.log(max(20, 25)); // Output: 25

//Answer 2:
function findMaxInThree()
{
    let maxVal=-Infinity;
    for(let i=0;i<arguments.length;i++)
    {
     if(maxVal<arguments[i])  
     {
        maxVal=arguments[i];
     } 
    }
    return maxVal;
}
console.log("Max value in three value: "+findMaxInThree(45,4,10))
// Answer 3:
function isVowel(char) {
    var vowels = "aeiouAEIOU";
    if (vowels.includes(char)) {
      return true;
    } else {
      return false;
    }
  }
  console.log("The letter is Vowel: "+isVowel('b'));


  //Answer 4:
  function sum(nums) {
    var total = 0;
    for (var i = 0; i < nums.length; i++) {
      total += nums[i];
    }
    return total;
  }
  
  function multiply(nums) {
    var product = 1;
    for (var i = 0; i < nums.length; i++) {
      product *= nums[i];
    }
    return product;
  }
 
  console.log("The sum of this array elements"+sum([1,2,3,6]));  
  console.log("The multiply of this array elements"+multiply([1,2,3,4]));  
  
  //Answer 5:
  function reverse(str) {
    return str.split('').reverse().join('');
  }
  console.log("final reverse array  : "+reverse("jag testar")); 
  
  //Answer 6:
  function findLongestWord(words) {
    let longest = 0;
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longest) {
        longest = words[i].length;
      }
    }
    return longest;
  }
  let wordArray = ["apple", "banana", "orange", "kiwi"];
let longestWordLength = findLongestWord(wordArray);
console.log("The longest word has length", longestWordLength);
//Answer 8:
function computeSumOfSquares(numbers) {
    return numbers.map(num => num * num)
                 .reduce((sum, square) => sum + square, 0);
  }
const numbers = [1, 2, 3];
const sumOfSquares = computeSumOfSquares(numbers);
console.log("Sum of Squarres"+sumOfSquares); // output: 14

//Answer 9:
function printOddNumbersOnly(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 !== 0) {
        console.log(arr[i]);
      }
    }
  }
  const  printOddarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
printOddNumbersOnly(printOddarr);
//Answer 10:
function computeSumOfSquaresOfEvensOnly(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        sum += arr[i] ** 2;
      }
    }
    return sum;
  }
  const arrcomputeSum = [1, 2, 3, 4, 5];
const result = computeSumOfSquaresOfEvensOnly(arrcomputeSum);
console.log(result);
//Answer 11:
function sum(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
  }
  
  function multiply(arr) {
    return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
  }

  const arr = [1, 2, 3, 4, 5];
  const sumResult = sum(arr);
  console.log(sumResult); // Output: 15
  
  const multiplyResult = multiply(arr);
  console.log(multiplyResult); // Output: 120
  /// Answer 12
  function printFibo(n, a, b) {
    let fibo = [a, b];
    
    
    for (let i = 2; i < n; i++) {
      fibo[i] = fibo[i - 1] + fibo[i - 2];
    }
    
    
    console.log(fibo.join(", "));
  }