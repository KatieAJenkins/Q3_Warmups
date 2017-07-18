'use strict';
// Write a function that counts the letters in a string.
//
// Input: A string. e.g. "Hello World"
//
// Output: The letters and how often they show up. e.g. d:1 e:1 h:1 l:3 o:2 r:1 w:1 NOTE: the function should not call console.log()
//
// Special
// Case-insensitive. So convert all letters to lowercase
// Ignore whitespace
// Ignore anything not a-z
// Challenge input:
//
// "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day."

// Problem solving is a skill that can be sharpened with dedicated practice.
// Think ahead! Break down the problem before you write a single line of code.
// Write out comments in plain english (non programmer terms) that detail what needs to be done to use the given input to create the expected output.
// After you have broken down the problem, if needed, search the internet for how to do specific tasks, NOT for the solution to the entire problem.

//LOGIC
//function boilerplate, invoke function
//remove whitespace in string
//convert to lowercase
//loop over string
//if the character hasn't been seen before, new variable and count = 1
//if character exists, add ++ to object count
//return object with letter: number key value pairs


// var string = "The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";
var badString = "1The quick brown fox jumps over the lazy dog and the sleeping cat early in the day.";

function countLetters(string){
  let alpha = "a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z";
  let alphaArray = alpha.split(",");
  var countObj = {};
  var noSpaceString = string.replace(/\W/g, '').toLowerCase();
  for (var i = 0; i < noSpaceString.length; i++){
    if(!alphaArray.includes(noSpaceString[i])){
      console.log("Must be an alphabetical character!");
      // return "Must be an alphabetical character!";
    }
    else if (countObj.hasOwnProperty(noSpaceString[i]) === false){
      // console.log(noSpaceString[i]);
      // console.log(countObj.hasOwnProperty(noSpaceString[i]));
      // console.log('false');
      countObj[noSpaceString[i]] = 1;
      // console.log(countObj);
    }
    else {
      countObj[noSpaceString[i]] ++;
    }
  }
  console.log(countObj);
  return countObj;
}

// countLetters(string);
countLetters(badString);
