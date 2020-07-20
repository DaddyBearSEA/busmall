'use strict'


// Show the magImages, allow users to vote by click, 
//  Until the endUser reaches  25 clicks, show the results as a list  FULL STOP @ 25

// define a global variable called busMagImagesArray = [];

// bus magImage : define a constructor (for the busMagImage image)
//   - liveClicks: keep track of clicks
//   - imageName : 'Floating busMagImage'
//   - imageSrc : 'floating-busMagImage.jpg'
//   - push `this` into the busMagImagesArray

//   - TODO: day 13: lifetimeClicks: clicks from past iterations

// Instantiate busMagImage objects


// busMagImage.prototype.renderbusMagImageAsHtml() : Render a busMagImage to the page ( so it can be clicked on)
//   - with text (p)
//   - with an alt attribute for alt text (name of the busMagImage image)
//   - target a ul
//   - make a li
//   - make an image - give it a src and alt
//   - append it to the li
//   - make a p tag - gibve it text (of name)
//   - append it to li
//   - append li to ul
//   - TODO: add an id that references the busMagImage instance in the js
//     - the id could be busMagImage name without spaces, the index of the object


// event listener on the img tags with type click and an event handler
// event handler :
//   - add 1 to the clicks of the busMagImage image we clicked on
//     - TODO: check if the image's `src` attribute matches the object
//   - showClicks
//   - display 2 new busMagImage images (displaybusMagImages())

// displaybusMagImages() : display 2 new busMagImage images
//   - pick 2 busMagImages - randomly based on array indexes
//   - make the other 2 go away (like our table from salmon cookies);
//   - display them (renderbusMagImageAsHtml());



// showClicks() :show the clicks per busMagImage live (live || after X clicks (at the end))
//   - show them in a list
//   - use the constructor's instances for the info

// CSS:
//   - set all image height and width the same

// HTML



// TODO: on day 13 we will differentiate between live clicks and stored clicks
// 

// Until the endUser reaches  25 clicks, show the results as a list  FULL STOP @ 25

// define a global variable called busMagImagesArray = [];

// bus magImage : define a constructor (for the busMagImage image)
//   - liveClicks: keep track of clicks
//   - imageName : 'Floating busMagImage'
//   - imageSrc : 'floating-busMagImage.jpg'
//   - push `this` into the busMagImagesArray


// ================== Global Varialbes ==================
var busMagImagesArray = [];




// ==================== Functions =======================

function busMagImage(busMagImageName, src) {
  this.busMagImageName = busMagImageName;
  this.imgSrc = src;
  busMagImagesArray.push(this);
  // this.liveClicks = 0;

}

busMagImage.prototype.renderBusMagImageOutput = function () {
  var target = document.getElementById('displayBusMagImg');
  var busMagImageLI = document.createElement('li');
  var busMagImageIMG = document.createElement('img');
  console.log('into the protype');
  busMagImageIMG.src = this.imgSrc;
  busMagImageIMG.alt = this.busMagImageName;
  busMagImageLI.appendChild(busMagImageIMG);

  var busMagImageNameP = document.createElement('busMagImageName');
  busMagImageNameP.textContent = this.busMagImageName;
  busMagImageLI.appendChild(busMagImageNameP);


  target.appendChild(busMagImageLI);

}



// ================== Function Calls =====================


new busMagImage('R2D2 Bag', 'images/bag.jpg');
new busMagImage ('Banana Slicer', 'images/banana.jpg');
new busMagImage ('Bathroom Reader', 'images/bathroom.jpg');


busMagImagesArray[0].renderBusMagImageOutput();
busMagImagesArray[1].renderBusMagImageOutput();
busMagImagesArray[2].renderBusMagImageOutput();



// new busMagImage ('Open Toe Boots', 'images/boots.jpg');
// new busMagImage ('Breakfast Maker', 'images/breakfast.jpg');
// new busMagImage ('Bubble Gum Meatballs', 'images/bubblegum.jpg');
