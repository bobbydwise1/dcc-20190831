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

/* Recall order of operations: PEMDAS
a.  Parenthesis
b.  Exponents
c.  Multipulcation and Division
d.  Addtion and Subtraction
*/

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
  console.log('current level : ', someNode.value)
  output = someNode.value + output
  if (someNode.left != null) {
    output = makeEqn(someNode.left) + output
  }
  if (someNode.right != null) {
    output = output + makeEqn(someNode.right)
  }
  return output;
}

let node_root = new binNode('*')
let node_plus1 = new binNode('+')
let node_plus2 = new binNode('+')
let node_3 = new binNode('3')
let node_2 = new binNode('2')
let node_4 = new binNode('4')
let node_5 = new binNode('5')

node_root.addLeft(node_plus1)
node_root.addRight(node_plus2)
node_plus1.addLeft(node_3)
node_plus1.addRight(node_2)
node_plus2.addLeft(node_4)
node_plus2.addRight(node_5)

console.log(node_root)

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
