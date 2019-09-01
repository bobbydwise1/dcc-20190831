/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Microsoft.

Suppose an arithmetic expression is given as a binary tree. Each leaf is an integer and each internal node is one of '+', '−', '∗', or '/'.

Given the root to such a tree, write a function to evaluate it.

For example, given the following tree:

   *
  / \
 +    +
/ \  / \
3  2  4  5

You should return 45, as it is (3 + 2) * (4 + 5).
*/

const sortArray = (yourArray) => {
  let temp = yourArray.slice().sort(function(a,b){return a-b})
  return temp
}

const findContigSum = (yourArray) => {
  let output = [];
  let temp;
  for ( i = 0; i < yourArray.length; i++ ) {
    temp = yourArray.slice(i,j)
    output.push(temp.reduce((a,b)=> a+b,0))
  }
  return output
}

let test0 = [34, -50, 42, 14, -5, 86]
let test1 = [-5, -1, -8, -9]
console.log(findContigSum(test0))



$(document).ready(function() {
  $('#form1').submit(function(event){
    event.preventDefault()
    let input0 = $('#input-section-0').val()
    console.log(input0)
    let input1 = input0.replace(/'/g,'"')
    let input2 = JSON.parse(input1)
    $('#output-section-0').text(JSON.stringify(input2))

  })
});
