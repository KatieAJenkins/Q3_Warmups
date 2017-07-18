'use strict';
//You will be using JavaScript to write a simple function that can accomplish a goal.

// We want to find the credit card number whose digits sum to the largest number. If more than one has the same largest sum of digits, we want the last one in the list with that sum.

// Write a single function that takes one argument. That argument will be an array of credit card numbers. Assume the array can have any number of credit card numbers and each one is a string of digits and dashes. Your function should return the credit card number that has the largest sum of digits.
//
// Here is a sample array of credit card numbers:
// ["4916-2600-1804-0530", "4779-252888-3972", "4252-278893-7978", "4556-4242-9283-2260"]
//
// In the sample array above, the digits add up to 49, 81, 81, and 64 respectively. Since there are two which have the same sum, the function should return the last one with that sum, in this case ‘4252-278893-7978’
//
// Start by thinking through your step-by-step process. Then, submit your best code. If your code isn’t complete, that’s OK; just let us know how far you were able to get.
// What do you need to do to solve this problem? Explain your thought process and how you will work through each part.

let cardArray = ["4916-2600-1804-0530", "4779-252888-3972", "4252-278893-7978", "4556-4242-9283-2260"];

  function cardSums (array){
    let remove = /-/gi;
    let noDashArray = [];
    let sum = 0;

    for(let i = 0; i < array.length; i++){
      let noDashCard = array[i].replace(remove, "").split("")
      // console.log(typeof noDashArray);
      // console.log(noDashCard);
      noDashArray.push(noDashCard);

    }
    // console.log('noDashArray', noDashArray);
    // let splitArray = noDashArray.split("");

    //split the noDashArray
    //then reduce! reduceee!!
    // noDashArray.reduce(function(sum){
    //   console.log('sum', sum);
    //   //   console.log(curr);
    // }, 0)

    for(var j = 0; j < noDashArray.length; j++){
      let currentArrayCard = noDashArray[j];
      // console.log('currentArrayCard', currentArrayCard);
      for(var k = 0; k < currentArrayCard.length; k++){
        // console.log(currentArrayCard[k]);
        sum += parseInt(currentArrayCard[k]);
        console.log(sum);
        // return sum;
      }
      // sum += parseInt(noDashArray[j])
      // console.log('sum', sum);
      // return sum;

    }
    console.log('sum', sum);
    // return sum;

    //then compare sums
    //keep the highest sum
    //return the original full credit card number of this highest sum cc# by location in array

  };

cardSums(cardArray);

/////Solution 1
//function countingCards(array){
//   let cards = [];
//   let biggestTotal = 0;
//   let biggestCard;
//   for(i=0;i<array.length;i++){
//     cards.push(array[i].replace(/-/gi,'').split(''));
//     for(j=0;j<cards.length;j++){
//       for(k=0;k<cards[j].length;k++){
//         cards[j][k]= parseInt(cards[j][k],10);
//       }
//     }
//   }
//  for(l=0;l<cards.length;l++){
//    let total = 0;
//    for(m=0;m<cards[l].length;m++){
//      total += cards[l][m];
//    }
//    if(total>=biggestTotal){
//      biggestTotal = total;
//      biggestCard = array[l];
//    }
//  }
//  return biggestCard;
// }


////Solution 2
// function sum(ccnum){
//   let ccnumIndex =0;
//   let sum =0;
//   for(var i=0;i<ccnum.length; i++){
//     var number =  ccnum[i].split("-").reduce(function(acc,curr,index){
//       return acc + curr;
//     }).split("").reduce(function(accum,current,idx){
//       return accum + parseInt(current);
//     },0);
//     if(number>=sum){
//       sum = number;
//       ccnumIndex = i;
//     }
//   }
//   return ccnum[ccnumIndex];
// }


////Solution 3
// function highestCard(cards) {
//   const obj = {};
//   cardSum(cards, obj);
//   const cardKey = findKey(obj);
//   return obj[cardKey];
// }
//
// function findKey(obj) {
//   return Object.keys(obj).sort((a, b) => a - b)[Object.keys(obj).length - 1];
// }
//
// function cardSum(cards, obj) {
//   cards.map(e => e.replace(/-/g, '')
//     .split('')
//     .map(e => Number(e))
//     .reduce((a,b) => a + b))
//     .map((e,i) => obj[e] = cards[i]);
// }
