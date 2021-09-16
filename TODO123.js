/* TODO: 1.Display the numbers in the range 0...50 that can be divided by 2.*/


var i;
for (i=0;i<=50;i++)
{
if (i%2==0)
console.log(i);
}


/*TODO: 2.Create a function that returns a greeting based on the language given and returns "Hello!" if 
the language was undefined 
ex. German => Guten Tag!
    Spanish => Hola!
(You can use at least 3 languages*/

    let greeting = prompt("what is your country's name?");
    switch (greeting) {
      case 'undefined':
        G = "Hello";
        break;
      case 'German':
        G = "Guten Tag";
        break;
      case 'Spanish':
        G = "Holal";
        break;
      case 'France ':
        G = "Bonjour";
        break;
    }
    console.log("The greeting is  " + G);
    
    
    

/*TODO: 3.Create a function that checks whether an item is inside a given array or not 
and returns a Bool Value (True if the item is inside the array and False if not).*/
function myFunction();
{
let grades = ['B', 'D', 'C', 'A']
if (grades.indexOf('F') >= 0) {
      
       console.log("true");
} else {
     console.log("False");
}}
myFunction();





function myFunction();
{
let grades = ['B', 'D', 'C', 'A']
if (grades.indexOf('B') >= 0) {
      document.getElementById("demo").innerHTML = "True" ;
       console.log("true");
} else {
    document.getElementById("demo").innerHTML = "False";
     console.log("False");
}}
myFunction();


/*TODO: 4.Correct the following code to display the full name of object person: */

var Person = {
    firstName:"Regina",
    lastName :"phalange",
    id:3416,
     
    displayType: function() {  // Method which will display Full name    console.log(this.firstName + " "+  lastName);
    }
  };
  

  var Per1 = Object.create(Person);
      Per1.displayType(); 
  
  
  var Per2 = Object.create(Person);
  Per2.firstName = 'regina';
  Per2.lastName = 'phalange',
  Per2.displayType(); 
  console.log("Full Name = "+" " + this.Per2.firstName +" " + Per2.lastName);

/*TODO: 5.Change the following arrow function into a regular function.*/

function isFoodReady()
{
    let bool =true;
   if (bool == true) {
    console.log("Pizza is here!");}
    else if (bool == false) {
        console.log("Keep starving..")}
   else {
    console.log("What was the question?" }
 }
   isFoodReady() ; 


/*TODO: 6.Create a function that takes a string and returns the last character in the string.*/ 

function EnterText()
     {
       let mystring = prompt("Enter your text");
    console.log( mystring.substr(-3));
      }
		EnterText() ; 


/*TODO: 7.Change the scope of the variable key so that it can only be accessible by getKey() function*/

function Keymatch(key1)
{
    let key2=10;
  if(key1==key2)
{
console.log("true");
}
  else
  {
console.log("False");
}
   }
   Keymatch(11); 



/* TODO: 8. Handle errors in the following function. */
function movie(Mname){
    try{
        if(name === "Aladdin"){
            console.log("It is a 90s movie")
        } else if(3 > 2){
            console.log("It is a Saga")
        }
    } catch(e){console.log(e);}
    } 

    movie(raghad);


    

