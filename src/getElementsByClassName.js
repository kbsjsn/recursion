// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className
) {
  var elementList = [];

  var recursiveFunc = function(current) {
    for(var i of current) {
      if(i.classList !== undefined && i.classList.contains(className)) {
        elementList.push(i);
      }
      if(i.childNodes.length > 0) {
        recursiveFunc(i.childNodes);
      }
    }
  };

  recursiveFunc(document.childNodes);
  return elementList;
  // your code here
};
