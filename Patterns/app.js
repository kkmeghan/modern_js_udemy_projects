// Basic structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public var and functions
//   }
// })();

//STANDARD MODULE PATTERN
const UICtrl = (function() {
  let text = 'Hello World';

  console.log('hello Ji');
  const changeText = function() {
    const element = document.querySelector('h1');
    element.textContent = 'meghani';
  }

  changeText();

  return {
    callChangeText: function() {
      changeText();
       console.log(text);
    }
  }

   
})();

var myObj = {
  myFunction: function () { console.log('test'); }
};


// const UICtrl1 = (function(){
//   {
//     console.log('hello');

//   }
// })();

// myObj.myFunction();

// UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
// const ItemCtrl = (function() {
//   let data = [];

//   function add(item) {
//     data.push(item);
//     console.log('Item Added....');
//   }

//   function get(id) {
//     return data.find(item => {
//       return item.id === id;
//     });
//   }

//   return {
//     add: add,
//     // get: get
//   }
// })();

// ItemCtrl.add({id: 1, name: 'John'});
// ItemCtrl.add({id: 2, name: 'Mark'});
// console.log(ItemCtrl.get(2));