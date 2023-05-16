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
 console.log(totalGrade)