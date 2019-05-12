/* 
a website w real interactivity needs EventSource,
there code structures which listens for things
happening in a browser, running code in response. 

most obvious is the click event, 
*/

/*
var myHeading = document.querySelector('h1');
myHeading.textContent = 'Hello world!'; */
/*
var iceCream = 'chocolate';
if(iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');    
} else {
  alert('Awwww, but chocolate is my favorite...');    
} */
 // click event: 
  /*
  document.querySelector('html').onclick = function() {
      alert('Souch! Stop poking me!');
  }
  
  //click on an image to switch it to another
  var myImage = document.querySelector('img');
  myImage.onclick = function() {
      var mySrc = myImage.getAttribute('src');
      if(mySrc === 'images/ground.jpg') {
          myImage.setAttribute('src','imges/ground.jpg');
      } else {
          myImage.setAttribute('src','images/ground.jpg');
      }
  }   */


var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name. ');
    localStorage.setItem('name', myName);
    myHeading.textContent = 'What do you think about tennis?' + myName;
}
if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = "Welcome to tennis.com " + storedName + " . ";
}
myButton.onclick = function() {
    setUserName();
}


