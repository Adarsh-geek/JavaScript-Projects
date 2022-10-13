console.log("Hello World from Javascript");
document.write("5" + 2 + 3);

/*Data Types:
 undefined, null, boolean, string, symbol, number, and object.

 We can declare variable in JS by four ways
 1. var myName = "Adarsh" // variables declared using var keyword have scope throughout the program.

 myName = 8

 2. let ourName = "freeCodeCamp" // variables declared using let can only be used with in only the scope they are declared.

 3. const pi = 3.14 // value of the variables declared with const keyword can not be updated. 
 */

/* Arrays :- In Javascript Arrays can store heterogenous type of elements like objects in JAVA.
It is also have "Zero based indexing like JAVA, C and C++"

Ex:- var myArray = ["Adarsh", 24]; ---> Single Dimensional Array

var ourArray = [["the universe", 42], ["everything", 101010]]; ---> Multidimensional Array

It also has push() and pop() function to add and delete elements respectively.
push() -->  adds a new element at the end of the array.
pop() --->  removes an element from the end of the array.
shift() --> removes an element from the beginning of the array.
unshift() ---> add a new element at the beginning of the array.

*/


export const capitalizeString  = str => str.toUpperCase();