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

//Assume javascript node is defined as: {'value'=null, 'left'=null, 'right'= null}
class binNode {
  constructor(value=null,left=null,right=null) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
  addLeft(yourLeft) {
    this.left = yourLeft;
    return yourLeft;
  }
  addRight(yourRight) {
    this.right = yourRight;
    return yourRight
  }
}

const makeEqn = (someNode) => {
  let output = ''
  output = someNode.value + output
  if ((someNode.left != null) && (someNode.right != null)) {
    output = '(' + makeEqn(someNode.left) + output + makeEqn(someNode.right) + ')'
  } else if (someNode.left != null) {
    output = makeEqn(someNode.left) + output
  } else if (someNode.right != null) {
    output = output + makeEqn(someNode.right)
  }
  console.log(output) //This is the equation string
  return output; //Note to eval the string, javascript uses eval(yourString)
}

//Base test case
let node_root = new binNode('*')
let node_plus1 = new binNode('+')
let node_plus2 = new binNode('+')
let node_3 = new binNode('3')
let node_2 = new binNode('2')
let node_4 = new binNode('4')
let node_5 = new binNode('5')
//extra nodes for 2nd test
let node_8 = new binNode('8')
let node_6 = new binNode('6')

console.log(node_root)

node_root.addLeft(node_plus1)
node_root.addRight(node_plus2)
node_plus1.addLeft(node_3)
node_plus1.addRight(node_2)
node_plus2.addLeft(node_4)
node_plus2.addRight(node_5)

let test1 = makeEqn(node_root) //result: ((3+2)*(4+5))
console.log(eval(test1)) //result: 45

/* create a 2nd new test:

     *
    / \
  +    +
 / \  / \
3  2  *  5
     / \
    8   6

*/

node_4.value = '*'
node_4.addLeft(node_8)
node_4.addRight(node_6)

let test2 = makeEqn(node_root) //result: ((3+2)*((8*6)+5))
console.log(eval(test2)) //result: 265

$(document).ready(function() {
});
