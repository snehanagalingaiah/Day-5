//Creating IIFE functions that are anonymous 

//Question-1a: Print odd numbers in an array

//prompt to take input from user
let user_input=prompt("Q-1a:Print all the odd numbers in the array. Please enter an array of numbers separated by comma so that I can print odd numbers from it")
console.log("user input",user_input);
let user_array=user_input.split(",");

//IIFE
(function(num_array){
    let odd_array=[];
    for(num of num_array){
        num%2===1? odd_array.push(num):null;
     }
     console.log("The odd numbers in the array are:",odd_array);

})(user_array);

/*
OUTPUT:
user input 1,2,3,4,5 
The odd numbers in the array are: 
Array(3) [ "1", "3", "5" ]
 */


//Question-1b: Convert all the strings to title caps in a string array

//prompt to take input from user
let user_input_1=prompt("Q-1b: Convert all the strings in the array to titlecase. Please enter an array of strings separated by comma so that I can change it to titlecase");
console.log("user input",user_input_1);
let user_array_1=user_input_1.split(",");

//IIFE
(function(string_array){

    let titlecase_array=[];
    for(string of string_array){
        //using the replace function to replace the 1st character of a string after changing it to upper case
        titlecase_array.push(string.replace(string.charAt(0),string.charAt(0).toUpperCase()))
     }

     console.log("The titlecase version of the strings:",titlecase_array);

})(user_array_1);

/*
OUTPUT:

user input sneha,smitha,rita 
The titlecase version of the strings: 
Array(3) [ "Sneha", "Smitha", "Rita" ]
*/


//Question-1c: Sum of all numbers in an array

//prompt to take user input
let user_input_2=prompt("Q-1c: Sum of all the numbers in an array. Please enter an array of numbers separated by comma so that I can add them all");
console.log("user input",user_input_2);
let user_array_2=user_input_2.split(",");

(function(num_array){
    let total=0;

   //arrow function
   for(num of num_array){
       total+=parseInt(num);
   }
   console.log("the summation of numbers in the input array:",total);
})(user_array_2);

/*
OUTPUT

user input 1,2,3,4,5,6,7,8,9 
the summation of numbers in the input array: 45
*/ 

//Question-1d:Return all the prime numbers in an array

//prompt to take user input
let user_input_3=prompt("Q-1d: Return all the prime numbers in an array. Please enter an array of numbers separated by comma so that I can freturn the prime numbers from it");
console.log("user input",user_input_3);
let user_array_3=user_input_3.split(",");

(function(num_array){

    let prime_array=[];
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
    console.log("The prime numbers in the array are:",prime_array);

})(user_array_3);

/*
OUTPUT
user input 1,2,3,4,5,6,7,8,9 
The prime numbers in the array are: 
Array(4) [ "2", "3", "5", "7" ]
*/

//Question-1e: Return all the palindromes in an array

//prompt to take user input
let user_input_4=prompt("Q-1e: Return all the palindromes in an array. Please enter an array of numbers separated by comma so that I can return palindromes from it");
console.log("user input",user_input_4);
let user_array_4=user_input_4.split(",");

(function(num_array){

    let rightmost; 
    let result=0;
    let pal_array=[];


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

     console.log("The palindromes in the array are",pal_array);

})(user_array_4);



/*
OUTPUT
user input 1001,12321,3456,78987,9876 

The palindromes in the array are 
Array(3) [ "1001", "12321", "78987" ]
*/

//Question-1f Return median of two sorted arrays of the same size.
//prompt to take user input

let user_input_array1=prompt("Q-1e: Return median of two sorted arrays of the same size.. Please enter the 1st sorted array of numbers separated by comma");
console.log("user input-1st sorted array",user_input_array1);
let user_array1=user_input_array1.split(",");

let user_input_array2=prompt("Q-1e: Return median of two sorted arrays of the same size.. Please enter the 2nd sorted array of numbers of the same length as the previous one separated by comma");
console.log("user input-2nd sorted array",user_input_array2);
let user_array2=user_input_array2.split(",");

(function(array1,array2){

    let sorted_array=[];

    let sorted= (array1,array2)=>{
        let sorted_array =[];  //array that will hold merged elements from both array1 and array2 in a sorted manner
        let indexArray1=0;  
        let indexArray2=0;
        
        //logic to merge elements from both arrays in a sorted manner
        while(indexArray1 < array1.length  && indexArray2 < array2.length){
            //comparing elements from both arrays and finding the least of them and pushing it ito sorted_array

            if(parseInt(array1[indexArray1]) < parseInt(array2[indexArray2])){
                sorted_array.push(parseInt(array1[indexArray1]));
               indexArray1++;
                
            }
            else{
                sorted_array.push(parseInt(array2[indexArray2]));
                indexArray2++;
            }
        }

        //if one of the two arrays hasn't been traversed completely run through it and push it into the sorted_array
        if(indexArray1 < array1.length){
            sorted_array=sorted_array.concat(array1.slice(indexArray1)) ;            
        }
        if(indexArray2 < array2.length){
            sorted_array= sorted_array.concat(array2.slice(indexArray2)) ;       
        }
        return sorted_array;
    }

    array1.length==array2.length? sorted_array=sorted(array1,array2) : null;   
    //finding the middle elements from the sorted_array and dividing it by 2.
   let median = (sorted_array[array1.length-1] + sorted_array[array1.length])/2;
   console.log(`the median for ${sorted_array} is ${median}`);
})(user_array1,user_array2);

/*
OUTPUT

user input-1st sorted array 5,19,23 
user input-2nd sorted array 8,22,65 
the median for 5,8,19,22,23,65 is 20.5
*/


//Question-1g Remove duplicates from an array

//prompt to take user input
let user_input_5=prompt("Q-1g: Remove duplicates from an array. Please enter an array of numbers,strings,alphabets separated by comma so that I can return an array with unique elements from it");
console.log("user input",user_input_5);
let user_array_5=user_input_5.split(",");

(function(input_array){
 let unique=[];
 input_array.forEach((item)=>{

    unique.includes(item)? null: unique.push(item);
})
console.log("The array after removing duplicates",unique);

})(user_array_5);

/*
OUTPUT
user input 1,2,3,4,5,4,3,2,1 
The array after removing duplicates 
Array(5) [ "1", "2", "3", "4", "5" ]
*/

//Question-1h Rotate an array K times.

//prompt to take user input
let user_input_7=prompt("Q-1g: Rotate an array K times. Please enter an array of numbers separated by comma so that I can rotate it");
console.log("user input",user_input_7);
let user_array_7=user_input_7.split(",");
let k = parseInt(prompt("Q-1g: Rotate an array K times. Please enter the number of times you want to rotate"));

(function(user_array,k){

    //to handle cases where rotation times is larger than the length of the array. suppose you have to rotate 101 times in an array of size 5, in atual you will need to rotate only once it will be same as 101 times rotation
    k = k % user_array.length;

    //to handle cases where rotation times is negative. suppose you have to rotate -1 times on array of length 5. in acctual if you rotate 4 times its the same as -1 times rotation
    if(k<0)  k = k + user_array.length;

    let reverse = (li,ri)=>{
        let temp;
        while(li < ri){
              temp=user_array[li];
              user_array[li]=user_array[ri];
              user_array[ri]=temp;
              li++;
              ri--;
        }
        
    }

    //reversing the first(left) part ie. array.length-k elements
    reverse( 0, user_array.length-k-1);

    //reversing the second(right) part ie. k no. of elements
    reverse( user_array.length-k, user_array.length-1);

    //reversing the entire array
    reverse( 0, user_array.length-1);

   console.log(`After performing ${k} rotations, the rotated array is ${user_array}`);

})(user_array_7,k);


/*
OUTPUT

user input 1,3,5,7,9 
After performing 2 rotations, the rotated array is 7,9,1,3,5

*/




