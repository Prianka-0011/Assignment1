


// //Answer 1:
// function max(num1,num2)
// {
//     if(num1>num2)
//     {
//         return num1
//     }
//     return num2;
// }
// console.log("Max value is: "+max(12, 3)); // Output: 12
// console.log(max(20, 25)); // Output: 25

// //Answer 2:
// function findMaxInThree()
// {
//     let maxVal=-Infinity;
//     for(let i=0;i<arguments.length;i++)
//     {
//      if(maxVal<arguments[i])  
//      {
//         maxVal=arguments[i];
//      } 
//     }
//     return maxVal;
// }
// console.log("Max value in three value: "+findMaxInThree(45,4,10))
// // Answer 3:
// function isVowel(char) {
//     var vowels = "aeiouAEIOU";
//     if (vowels.includes(char)) {
//       return true;
//     } else {
//       return false;
//     }
//   }
//   console.log("The letter is Vowel: "+isVowel('b'));


//   //Answer 4:
//   function sum(nums) {
//     var total = 0;
//     for (var i = 0; i < nums.length; i++) {
//       total += nums[i];
//     }
//     return total;
//   }
  
//   function multiply(nums) {
//     var product = 1;
//     for (var i = 0; i < nums.length; i++) {
//       product *= nums[i];
//     }
//     return product;
//   }
 
//   console.log("The sum of this array elements"+sum([1,2,3,6]));  
//   console.log("The multiply of this array elements"+multiply([1,2,3,4]));  
  
//   //Answer 5:
//   function reverse(str) {
//     return str.split('').reverse().join('');
//   }
//   console.log("final reverse array  : "+reverse("jag testar")); 
  
//   //Answer 6:
//   function findLongestWord(words) {
//     let longest = 0;
//     for (let i = 0; i < words.length; i++) {
//       if (words[i].length > longest) {
//         longest = words[i].length;
//       }
//     }
//     return longest;
//   }
//   let wordArray = ["apple", "banana", "orange", "kiwi"];
// let longestWordLength = findLongestWord(wordArray);
// console.log("The longest word has length", longestWordLength);
// //Answer 8:
// function computeSumOfSquares(numbers) {
//     return numbers.map(num => num * num)
//                  .reduce((sum, square) => sum + square, 0);
//   }
// const numbers = [1, 2, 3];
// const sumOfSquares = computeSumOfSquares(numbers);
// console.log("Sum of Squarres"+sumOfSquares); // output: 14

// //Answer 9:
// function printOddNumbersOnly(arr) {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 !== 0) {
//         console.log(arr[i]);
//       }
//     }
//   }
//   const  printOddarr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// printOddNumbersOnly(printOddarr);
// //Answer 10:
// function computeSumOfSquaresOfEvensOnly(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] % 2 === 0) {
//         sum += arr[i] ** 2;
//       }
//     }
//     return sum;
//   }
//   const arrcomputeSum = [1, 2, 3, 4, 5];
// const result = computeSumOfSquaresOfEvensOnly(arrcomputeSum);
// console.log(result);
// //Answer 11:
// function sum(arr) {
//     return arr.reduce((accumulator, currentValue) => accumulator + currentValue);
//   }
  
//   function multiply(arr) {
//     return arr.reduce((accumulator, currentValue) => accumulator * currentValue);
//   }

//   const arr = [1, 2, 3, 4, 5];
//   const sumResult = sum(arr);
//   console.log(sumResult); // Output: 15
  
//   const multiplyResult = multiply(arr);
//   console.log(multiplyResult); // Output: 120
//   /// Answer 12
//   function printFibo(n, a, b) {
//     let fibo = [a, b];
    
    
//     for (let i = 2; i < n; i++) {
//       fibo[i] = fibo[i - 1] + fibo[i - 2];
//     }
    
    
//     console.log(fibo.join(", "));
//   }


  ///my
//   let str = 'Widget with id';
// console.log( str.indexOf('Widget') ); // 0, because 'Widget' is found at the beginning
// console.log( str.indexOf('widget') ); // -1, not found, the search is case-sensitive
// console.log( str.indexOf("id") ); // 1, "id" is found at the position 1 (..idget with id)


// //array practice
// let a=["Roby","Ruby"];
// a.push("Piku");
// console.log(a);//["Roby","Ruby","Piku"];
// a.unshift("Kelly");
// a.shift();
// console.log(a);//["Roby","Ruby","Piku"];
// x=1;
// var  a = 5;
// var b = 10;
// var c = function(a, b, c){
//   document.write("write x in side inside  anynnomus"+x+"      ,");
//   document.write("write a in side inside  anynnomus"+a+"       ,");
//   var f=function(a, b, c)
//   {
//     b = a;
//     document.write("write b in side inside another anynnomus"+b+"    ,");
//     b = c;
//     var x = 5;
//   }
//   f(a,b,c);
//   document.write("write b in side anynnomus"+b+"    ,");
//   var x = 10;
// }
// c(8,9,10);
// document.write("write b in side Global"+b+"    ,");
// document.write("write x in side Global"+x+"    ,");


// var foo=1;
// function bar()
// {
//   if(foo)
//   {
//     var foo=10;
//   }
//   alert(foo);
// }
// bar();


// var str="Prianka";
// var newString=`My name is : ${str} `;
// document.write(newString);
// const students = [
//   { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
//   { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
//   { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
//   { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
//   { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
//  ];
//  let newStList=students.filter(c=>c.courses.includes('cs303'));
//  document.write(newStList);
//  let s = "Connie Client";
//  let fName = s.substring(0, s.indexOf(" ")); // "Connie"
//  let len = s.length; // 13

//  document.write("length: "+len);

// let user = {
//   firstName: "John",
//   sayHi() {
//   document.write(`Hello, ${this.firstName}!`);
//   }
//   };
//   //user.sayHi();
//   setTimeout(()=>user.sayHi(), 1000); 



// const cs303Students = students
//   .filter(student => student.courses.includes('cs303'));

// const cs303AvgGrades = 
// students
// .filter(student => student.courses.includes('cs303')) .reduce((avgGrades, student) => {
//     avgGrades[student.name] = student.grades.reduce((sum, grade) => sum + grade) / student.grades.length;
//     return avgGrades;
//   }, {});

// console.log(cs303AvgGrades);
//  //document.write(newList)
// const numbers = [1, 5, 18, 2, 77, 108];
// const oddList=numbers.filter(c=>(c%2==1));
// document.write("Odd Number List: "+oddList);

// function askPassword(user, ok, fail) {
//   function wrapper() {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") {
//       ok.call(user);
//     } else {
//       fail.call(user);
//     }
//   }
//   return wrapper;
// }

// let user = {
//   name: 'Jonh',
//   loginOk() {
//     alert(`${this.name} logged in`);
//   },
//   loginFail() {
//     alert(`${this.name} failed to log in`);
//   },
// };

// let wrapper = askPassword(user, user.loginOk.bind(user), user.loginFail.bind(user));
// wrapper();

// let group = {
//   title: "Our Group",
//   students: ["John", "Pete", "Alice"],
//   showList: function() {
//     this.students.forEach(function(student) {
//       console.log(this.title + ": " + student);
//     }.bind(this));
//   }
// };

// group.showList();




 



const user1 = {
  salute: ""
  ,
  greet: function() {
  this.salute = "Hello";
  document.write(this.salute); //Hello
  const setFrench = function(newSalute) { //inner function
  this.salute = newSalute;
  };
  setFrench("Bonjour");
  document.write(this.salute); //Bonjour??
  }
  };
  user1.greet(); //Hello Hello ??



  function sum(arr)
  {
    let total=0;
    for(let i=0;i<arr.length;i++) {
       total+=arr[i];
    }
    return total;
  }
  
let res=sum([1,5,4,8,9]);
document.write(res);


class Employee{
  #fullname;
  salary;
  hireDate;
  static #counter=0;
  constructor(fullname, salary, hireDate)
  {
    this.#fullname=fullname;
    this.salary=salary;
    this.hireDate=hireDate;
  }
  calculateSalary()
  {
    return this.salary;
  }
  static getCounter()
  {
    return this.#counter;
  }
  static incCounter()
  {
    this.#counter+=1;
  }
  get fullname()
  {
    return this.#fullname;
  }
  set fullname(x)
  {
    return this.#fullname=x;
  }
  get salary()
  {
    this.salary;
  }
  set salary(x)
  {
    this.salary=x;;
  }
  get hireDate()
  {
    this.hireDate;
  }
  set hireDate(x)
  {
    this.hireDate=x;
  }
}
class Manager extends Employee {
  bonus;
  constructor(fullname,salary,hireDate)
  {
    super(fullname,salary,hireDate);
    this.bonus=0;
  }
  calculateSalary()
  {
    return 
  }
}