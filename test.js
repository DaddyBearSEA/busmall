
'use strict'



scales: {
  x: {
      stacked: true
  },
  y: {
      stacked: true
  }
}










  // check to see if the image was shown currently Random Number
  // var currentIndexDisplayed = [5, 0, 3];
  /* 
  1.  newImg1 make a random number = does it equal position 1 2 or 3 - if so - spin the wheel until it doesn't
    !! Now you have newImg1 !!
  2. newImg2 = random number - does it equal number newImg1 or  newImg 3. if so - spin the wheel until it doesn't
    !!  now you have newImg1 and newImg2 !!
  3.  newImg 3 make a random number = does it equoal position 1 or 2 - if so - spin the wheel unti it doesn't
    !!   now you have newImg1, newImg2 and newImg3


  */


// ================== Global Varialbes ==================
var busMagImagesArray = [];
var totalImageClicks = 0;



// ==================== Functions =======================

function busMagImage(busMagImageName, src) {
  this.busMagImageName = busMagImageName;
  this.imgSrc = src;
  this.liveClicks = 0;
  
  busMagImagesArray.push(this);
}

busMagImage.prototype.renderBusMagImageOutput = function () {
  var target = document.getElementById('displayBusMagImg');
  var busMagImageLI = document.createElement('li');
  var busMagImageIMG = document.createElement('img');
 
  busMagImageIMG.src = this.imgSrc;
  busMagImageIMG.alt = this.busMagImageName;
  busMagImageLI.appendChild(busMagImageIMG);

  var busMagImageNameP = document.createElement('busMagImageName');
  busMagImageNameP.textContent = this.busMagImageName;
  busMagImageLI.appendChild(busMagImageNameP);


  target.appendChild(busMagImageLI);

}

function countClickOnBusMagImage(event) {
  console.log(event.target);
  if (event.target.tagName === 'IMG') {
    totalImageClicks++;
    console.log(totalImageClicks);

    for (var busMagImagesIndex = 0; busMagImagesIndex < busMagImagesArray.length; busMagImagesIndex++) {
      if (busMagImagesArray[busMagImagesIndex].imgSrc === event.target.getAttribute('src')) {
        busMagImagesArray[busMagImagesIndex].liveClicks++;
        console.log('YUP! Correct!')
      }
    }
  }

}




// ================== Function Calls =====================
var listOfImages = document.getElementById('displayBusMagImg')
listOfImages.addEventListener('click', countClickOnBusMagImage);

new busMagImage('R2D2 Bag', 'images/bag.jpg');
new busMagImage ('Banana Slicer', 'images/banana.jpg');
new busMagImage ('Bathroom Reader', 'images/bathroom.jpg');


busMagImagesArray[0].renderBusMagImageOutput();
busMagImagesArray[1].renderBusMagImageOutput();
busMagImagesArray[2].renderBusMagImageOutput();



// new busMagImage ('Open Toe Boots', 'images/boots.jpg');
// new busMagImage ('Breakfast Maker', 'images/breakfast.jpg');
// new busMagImage ('Bubble Gum Meatballs', 'images/bubblegum.jpg');



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

//TODO:  Compare the current indexes to the new random numbers

// showClicks() :show the clicks per busMagImage live (live || after X clicks (at the end))
//   - show them in a list
//   - use the constructor's instances for the info

// CSS:
//   - set all image height and width the same

// HTML



// TODO: on day 13 we will differentiate between live clicks and stored clicks
// 

// Until the endUser reaches  25 clicks, show the results as a list  FULL STOP @ 25













//  TODO: Understand this better //

Goat.prototype.renderGoatAsHtml = function() {
  var target = document.getElementById('list-of-goats'); 
  var goatHomeLi = document.createElement('li'); //parent

  var goatImg = document.createElement('img');
  goatImg.src = this.imageSrc;
  goatImg.alt = this.imageName;
  goatHomeLi.appendChild(goatImg);

  var goatTextP = document.createElement('p');
  goatTextP.textContent = this.imageName;
  goatHomeLi.appendChild(goatTextP);

  target.appendChild(goatHomeLi);
};


// random pictutures to create on the display
// 
var newDisplayBusMagImg1 = busMagImagesArray[newImgIndex1];
var newDisplayBusMagImg2 = busMagImagesArray[newImgIndex2];
var newDisplayBusMagImg3 = busMagImagesArray[newImgIndex3];

var compareNumberOfClicks = document.getElementById('displayBusMagImg');
compareNumberOfClicks.innerHTML = '';
newDisplayBusMagImg1.renderBusMagImageOutput();
newDisplayBusMagImg2.renderBusMagImageOutput();
newDisplayBusMagImg3.renderBusMagImageOutput();