// Your code here
function saturdayFun(x = "roller-skate") {
    return `This Saturday, I want to ${x}!`; //brackets around string not needed
}
//This Saturday, I want to roller-skate!
//console.log(saturdayFun("eat"))

function mondayWork(x = "go to the office") {
    return `This Monday, I will ${x}.`;
}
console.log(mondayWork())
/* ~~ TIP ~~->when we call this function it means do the 
work inside the "()" of function mondayWork! 
*/

/*IIFE 2 is passed into baseNumber, the anonymouse function performs operation 2 + 3
(function(baseNumber){ 
	return baseNumber + 3 
})(2) => 5
*/ 

function wrapAdjective(x = "*") {
    return function(part2 = "a hard worker") {
            return `You are ${x}${part2}${x}!`
    }
}

console.log(wrapAdjective("/")("cool")) //=> "You are %a dedicated programmer%!"

let storedFunction = Calculator()
/*
nested function example
function outer(greeting, msg="It's a fine day to learn") {
    return function(name, lang="Python") {
      return `${greeting}, ${name}! ${msg} ${lang}`
    }
  }
  
 1. Invoke method 1
 outer("Hello", "Silly")("student", "JavaScript")
 // to test: console.log(outer("Hello", "Silly")("student", "JavaScript"))

2. Invoke method 2
 let storedFunction = outer("Hello")
storedFunction("student", "JavaScript")
//=> "Hello, student! It's a fine day to learn JavaScript"
  */


/*why we need to use "return" in a function..we need the function to give us 
an output!

function returnFunction(){
    return 5
  }
  
  function noReturnFunction(){
    console.log(5);
  }

let x = returnFunction(); x => 5
let y = noReturnFunction(); y=> undefined
console.log(x)
console.log(y)
*/