// console.log( "Widget with id".includes("Widget") ); // true
// console.log( "HellByeo".indexOf("Bye") ); // false



// function  sum(arr)
// {
//     let total=0;
//     for(let i=0;i<arr.length;i++)
//     {
//         total+=arr[i];
//     }
//     return total;
// }
// let res=sum([1,6,9,3,4]);
// console.log(res);


// function defaultFun(num2=0,num3=0)
// {
//     let res=num2+num3;
//     return res;
// }
// console.log(defaultFun());
// function odNumber(num)
// {
//     if(num%2===0) {
//         console.log("Number are even");
//     }else {
//         console.log("Number are odd");
//     }
    
// }
// const fact =function factorial(n) {
//     return n < 2 ? 1 : n*factorial(n-1);
// }
// console.log(fact(10));
// function findMax()
// {
//     let max=-Infinity
//     for(let i=0;i<arguments.length;i++)
//     {
//         if(arguments[i]>max)
//         {
//             max=arguments[i];
//         }
//     }
//     return max;
// }
// console.log(findMax(1, 5, 8, 9, 10));
// const multiple2=(num1,num2)=>{
//     let p=num1*num2;
//     return p*3;
// }
// console.log(multiple2(9,7));


// let fruits=["Apple"];
// fruits.push("Banana");
// fruits.push("Mango");
// console.log(fruits);
// fruits.pop();
// console.log(fruits);
// fruits.shift()
// console.log(fruits);
// fruits.unshift("Kafi");
// fruits.unshift("Prianka");
// fruits.push("Soma");
// console.log(fruits);
// fruits.splice(2,2,fruits)
// console.log(fruits);

// let fruitTw=["Soma","Kafi"];
// fruitTw.slice(0,3)
// console.log(fruitTw);

// var a =10;
// function f() {
// var b = 30;
//   function B() {
//     console.log("b"+b);
//     var c = a+b;
//     return c;
//   }
//   b = 20;
//   return B;
// }

// let myFunc = f();
//  const x = myFunc();       // 20
//  console.log(x);           // 30
// // console.log(a);          //10
// const y = myFunc();     //20
// console.log("Y"+y);         //30


// let fruitTw=["Soma","Kafi"];
// let fruitTw2=["borkt"];
// let newarr=fruitTw2.concat(fruitTw)
// //fruitTw.slice(1,3)
// console.log(newarr);


// const numbers = [1, 5, 18, 2, 77, 108];

// const firstEvenNumber = numbers.find(num => num % 2 === 0);
// console.log(firstEvenNumber); // 18

// const indexOfFirstEvenNumber = numbers.findIndex(num => num % 2 === 0);
// console.log(indexOfFirstEvenNumber); // 2


// function calc(multiplier, base, ...numbers) {
//   var temp = numbers.reduce((accum, num) => accum + num, base);
//   return multiplier * temp;
//   }
//   var total = calc(2, 3, 2, 3, 5);
//   console.log("total: " + total);
  


// //   let arr1 = [3, 5, 1];
// // alert( Math.max(arr) ); // NaN
// //Math.max(arr[0], arr[1], arr[2]) //5
// let arr2 = [3, 5, 1];
// console.log( Math.max(...arr2));


// var a, b, c, d, e;
// a = [1,2,3];
// b = "dog";
// c = [42, "cat"];
// // Using the concat method.
// d = a.concat(b, c); // [1, 2, 3, “dog”, 42, “cat”]
// // Using the spread operator.
// e = [...a, b, ...c]; // [1, 2, 3, “dog”, 42, “cat”]
// console.log(e);




// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200
//   };

//   let { title, width, height } = options;
//   console.log(title); // Menu

//   console.log(width); // 100
//   console.log(height); // 200
  // function b() {
  //   function a() {
  //   console.log(x);
  //   }
  //   const x = 10;
  //   a();
  //   }
  //   const x = 20;
  //   b();
    

  const students = [
    { name: 'Quincy', grades: [99, 88], courses:['cs301', 'cs303']},
    { name: 'Jason', grades: [29, 38], courses:['cs201', 'cs203']},
    { name: 'Alexis', grades: [79, 78], courses:['cs105', 'cs211'] },
    { name: 'Sam', grades: [91, 82], courses:['cs445', 'cs303'] },
    { name: 'Katie', grades: [66, 77], courses:['cs303', 'cs477'] }
   ];
//const studentsList=   students.filter(c=>c.courses.cotains('cs303')).reduce((str,current)=>);