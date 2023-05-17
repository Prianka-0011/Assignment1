// //Question 1: 
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
// //Question 2: 
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



//Question 1:
// Code in object leteral
const student={
firstName:'',
lastName:'',
grades:[],
iputNewGrad:function(newGrad)
{
  this.grades.push(newGrad);
},
conputeAverageGrade:function()
{
 const totalGrade= this.grades.reduce((start,currrent)=>(start+currrent),0);
 const averageGrade=totalGrade/this.grades.length;
  return averageGrade;
}

}

const student1=Object.create(student);

student1.firstName="Prianka";
student1.lastName="Mondal";
student1.iputNewGrad(10);
student1.iputNewGrad(30);
student1.iputNewGrad(40);

const student2=Object.create(student);
student2.firstName="Iqbal";
student2.lastName="Hossain";
student2.iputNewGrad(50);
student2.iputNewGrad(30);
student2.iputNewGrad(40);

 const newStudentArr=[student1,student2];
 let totalGrade=0;
 newStudentArr.forEach(st=>{
  totalGrade +=st.conputeAverageGrade();
 })
 const totalAvegrade=totalGrade/newStudentArr.length
 console.log(totalAvegrade);

//Question 2:
//code in constructor function

function Student(firstName,lastName)
{
  this.firstName=firstName;
  this.lastName=lastName;
  this.grades=[];
  this.iputNewGrad=function(newGrade)
  {
    this.grades.push(newGrade);
  }
  this.computeAverageGrade()
  {
    const totalGrade=this.grades.reduce((start,current)=>start+current,0);
    const totalAverage=totalGrade/this.grades.length;
    return totalAvegrade;
  }

}

Array.prototype.sort = function() {
  for (let i = 0; i < this.length; i++) {
  for (let j = i + 1; j < this.length; j++) {
  if (this[i] > this[j]) {
  const temp = this[i];
  this[i] = this[j];
  this[j] = temp;
  }
  }
  }
  return this;
 };
 avgStudents.sort();
