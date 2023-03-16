//Question-3: Do the below programs in arrow functions.

//Question 3-a: Print odd numbers in an array

let odd_array=[];

//arrow function to check for odd. odd number gives a remainder 1 when divided by 2
var oddcheck= (num_array)=> {
 for(num of num_array){
    num%2===1? odd_array.push(num):null;
 }
}

//prompt to take input
let user_input=prompt("Q-3a:Print all the odd numbers in the array. Please enter an array of numbers separated by comma so that I can print odd numbers from it")
console.log("user input",user_input);
let user_array=user_input.split(",");


oddcheck(user_array);
console.log("The odd numbers in the array are:",odd_array);



/*OUTPUT

user input 1,2,3,4,5,6,7,8,9 script-3.js:13:9
The odd numbers in the array are: 
Array(5) [ "1", "3", "5", "7", "9" ]

*/

//Question 3-b: Convert all the strings to title caps in a string array

let titlecase_array=[]; //array which holds title case version of the user input

//arrow function
let changeToTitlecase = (string_array) => {
for(string of string_array){
   //using the replace function to replace the 1st character of a string after changing it to upper case
   titlecase_array.push(string.replace(string.charAt(0),string.charAt(0).toUpperCase()))
}
}

//prompt to take input from user
let user_input_1=prompt("Q-3b: Convert all the strings in the array to titlecase. Please enter an array of strings separated by comma so that I can change it to titlecase");
console.log("user input",user_input_1);
let user_array_1=user_input_1.split(",");

changeToTitlecase(user_array_1);
console.log("The titlecase version of the strings:",titlecase_array);

/*OUTPUT

user input sneha,smitha,rita 
The titlecase version of the strings: 
Array(3) [ "Sneha", "Smitha", "Rita" ]

*/


//Question 3-c: Sum of all numbers in an array

var summation=(num_array)=>{
   let total=0;

   //arrow function
   for(num of num_array){
       total+=parseInt(num);
   }
   return total;
}

//prompt to take user input
let user_input_2=prompt("Q-3c: Sum of all the numbers in an array. Please enter an array of numbers separated by comma so that I can add them all");
console.log("user input",user_input_2);
let user_array_2=user_input_2.split(",");

console.log("the summation of numbers in the input array:",summation(user_array_2));

/* OUTPUT

user input 1,2,3,4,5,6,7,8,9 
the summation of numbers in the input array: 45

*/



//Question 3-d: Return all the prime numbers in an array

let prime_array=[];

//arrow function
let checkPrime = (num_array)=>{

   let isPrime=true;

   for(num of num_array){
      // number 1 is neither prime not composite
      if(num!=1){
         //prime number is the one which is divisible by 1 and itself
         for(let i=2; i<num;i++){
            if(num % i==0) {
               isPrime=false;
               break;}
         }
         isPrime==true ? prime_array.push(num):null;
         isPrime=true;
      }

      //skip the iteration of the loop and continue to the next number in the array
      else continue;
   }
}

//prompt to take user input
let user_input_3=prompt("Q-3d: Return all the prime numbers in an array. Please enter an array of numbers separated by comma so that I can freturn the prime numbers from it");
console.log("user input",user_input_3);
let user_array_3=user_input_3.split(",");

checkPrime(user_array_3);
console.log("The prime numbers in the array are:",prime_array);

/*
OUTPUT

user input 1,2,3,4,5,6,7,8,9 
The prime numbers in the array are: 
Array(4) [ "2", "3", "5", "7" ]

*/

//Question 3-e: Return all the palindromes in an array

let rightmost; 
let result=0;
let pal_array=[];

//arrow function - it reverses the number given and if original number and reversed number are same then it is a palindrome.
var checkPal = (num_array)=>{

for(num of num_array){
   let dupnum = num; //duplicate number

   //logic to reverse the number
   while(dupnum!=0){
     
      //holds the rightmost digit of the number
      rightmost = dupnum%10; 
     
      //moving the rightmost digit leftwards to reverse the number
      result = result*10+ rightmost; //result holds the reversed number
     
      //removing the rightmost digit from the duplicate number
      dupnum = Math.floor(dupnum/10);
   }
   
   //if reversed number matches with the original number, it is pushed to palindrome array.
   result==num ? pal_array.push(num):null;
   result=0;
}
}

//prompt to take user input
let user_input_4=prompt("Q-3e: Return all the palindromes in an array. Please enter an array of numbers separated by comma so that I can return palindromes from it");
console.log("user input",user_input_4);
let user_array_4=user_input_4.split(",");

checkPal(user_array_4);
console.log("The palindromes in the array are",pal_array);



/*OUTPUT

user input 10001,34543,9876,23432 
The palindromes in the array are 
Array(3) [ "10001", "34543", "23432" ]

*/











