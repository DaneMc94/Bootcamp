let x = -5; let y = 8

console.log(x)
VM374:1 -5
undefined
let z = 6
undefined
//printing the answer to the calculation
console.log(x + y * z)
43

let x= 55; let y = 9
//printing the answer to the calculation
console.log((x + y) % y)
VM951:1 1

let x= 20; let y= -3; let z= 5; let a= 8
//printing the answer to the calculation
console.log(x + y * z / a)
VM1116:1 18.125

let x= 5; let y= 15; let z= 3; let a= 2; let b= 8
//printing the answer to the calculation
console.log(x + y / z * a - b % z)
13

JS program for dividing 2 numbers and displaying the result

HTML
<form>
Input the first number : <input type="text" id="firstNumber" /><br>
Input the second number: <input type="text" id="secondNumber" /><br>
<input type="button" onClick="divideBy()" Value="Divide" />
</form>
<p>The division of the first number and the second number is: <br>
<span id = "result"></span>
</p>

// Define a function to divide two numbers and display the result
function divideBy() {
    // Get the values of the input fields with the ids "firstNumber" and "secondNumber"
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;

    // Set the inner HTML of the element with the id "result" to the quotient of the two numbers
    document.getElementById("result").innerHTML = num1 / num2;
} 