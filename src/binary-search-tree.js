const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class Node {
  constructor(data) {
    this.data = data;
    this.right = null;
    this.left = null;
      };
};
class BinarySearchTree {
  constructor() {
    this.start = null;
  }
  root() {
    
      return this.start;
  
  }

  add(data) {
    var newNode = new Node(data);
    if(this.start === null){
        this.start = newNode;
        return this;
    }
    let current = this.start;
    while(current){
        if(data === current.data) return undefined;
        if(data < current.data){
            if(current.left === null){
                current.left = newNode;
                return this;
            }
            current = current.left;
        } else {
            if(current.right === null){
                current.right = newNode;
                return this;
            } 
            current = current.right;
        }
    }
}
  

has(data,current=this.start){
  if (!current) {
         return false;
     }
    if (current.data === data) {
         return true;
     }
   if (data<current.data){
     return this.has(data, current.left)
   }
   else {
         return this.has(data, current.right)
 }
}

find(data,current=this.start){
  if (!current) {
         return null;
     }
    if (current.data === data) {
         return current;
     }
   if (data<current.data){
     return this.find(data, current.left)
   }
   else {
         return this.find(data, current.right)
 }
 }

 remove(data){
  this.start = this.removeNode(this.start, data)
}


removeNode(current, data) {
  console.log(current)
   
  
 if(current === null) return current       
          
  if (data === current.data) {           
                 
      if (current.left === null && current.right === null){
          
              return null
          
          }else if(current.left === null){
          
              return current.right 
       
          }else if(current.right === null){
          
              return current.left
        
          }    else{
              
              
              
              let tempNode = this.find(this.min(current.right))
                  current.data = tempNode.data
              
            
              
                  current.right = this.removeNode(current.right, tempNode.data)
              return current
      }

 
      
  }else if(data < current.data) {
      
      current.left = this.removeNode(current.left, data)
      return current
      
  }
else{
      
      current.right = this.removeNode(current.right, data)
      return current
  }
}

  

  min(current=this.start) {
    while (current.left){
      current=current.left
    }
    return current.data
  }
  

  max(current=this.start) {
    while (current.right){
      current=current.right
    }
    return current.data
  }
}

module.exports = {
  BinarySearchTree
};