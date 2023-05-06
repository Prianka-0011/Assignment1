// function redirectToProduct() {
//     console.log('I am here to redirect product page')
//     window.location.href = 'http://localhost:5500/productpage.html';
//   }
// const passwordInput = document.getElementById('password');
// const submitBtn = document.getElementById('submitBtn');

// // Check if password meets criteria on input change
// passwordInput.addEventListener('input', function() {
//   const password = passwordInput.value;
//   const hasNumber = /\d/.test(password);
//   const hasLowercase = /[a-z]/.test(password);
//   const hasUppercase = /[A-Z]/.test(password);
//   const isValidLength = password.length >= 10;

//   if (hasNumber && hasLowercase && hasUppercase && isValidLength) {
//     submitBtn.removeAttribute('disabled');
//   } else {
//     submitBtn.setAttribute('disabled', true);
//   }
// });



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