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
function compareNumberOfClicks() {
  console.log(totalImageClicks + 'close to finish');
  if (totalImageClicks === 10) {
    var compareNumberofClicks = document.getElementById('displayBusMagImg');
    listOfImages.removeEventListner('click', countClickOnBusMagImage);
    console.log('you are done!')
  }
  else {
    console.log('Please click on an Image');
  }
}

function countClickOnBusMagImage(event) {

  if (event.target.tagName === 'IMG') {
    totalImageClicks++;
    console.log(totalImageClicks);

    for (var busMagImagesIndex = 0; busMagImagesIndex < busMagImagesArray.length; busMagImagesIndex++) {
      if (busMagImagesArray[busMagImagesIndex].imgSrc === event.target.getAttribute('src')) {
        busMagImagesArray[busMagImagesIndex].liveClicks++;
        console.log('YUP! Correct!')
      }      
    }
    compareNumberOfClicks()
  }

}
function displayNewBusMagImages() {
  
  var newImgIndex1 = Math.floor(Math.random() * busMagImagesArray.length);
  var newImgIndex2 = Math.floor(Math.random() * busMagImagesArray.length);
  var newImgIndex3 = Math.floor(Math.random() * busMagImagesArray.length);
  console.log(newImgIndex1 + ' and ' + newImgIndex2 + ' and ' + newImgIndex3);

// var 1 !== var2 || var 3

  var newDisplayBusMagImg1 = busMagImagesArray[newImgIndex1];
  var newDisplayBusMagImg2 = busMagImagesArray[newImgIndex2];
  var newDisplayBusMagImg3 = busMagImagesArray[newImgIndex3];

  var compareNumberOfClicks = document.getElementById('displayBusMagImg');
  compareNumberOfClicks.innerHTML = '';
  newDisplayBusMagImg1.renderBusMagImageOutput();
  newDisplayBusMagImg2.renderBusMagImageOutput();
  newDisplayBusMagImg3.renderBusMagImageOutput();


}






// ================== Function Calls =====================
var listOfImages = document.getElementById('displayBusMagImg')

listOfImages.addEventListener('click', countClickOnBusMagImage);

new busMagImage('R2D2 Bag', 'images/bag.jpg');
new busMagImage ('Banana Slicer', 'images/banana.jpg');
new busMagImage ('Bathroom Reader', 'images/bathroom.jpg');
new busMagImage ('Open Toe Boots', 'images/boots.jpg');
new busMagImage ('Breakfast Maker', 'images/breakfast.jpg');
new busMagImage ('Bubble Gum Meatballs', 'images/bubblegum.jpg');

displayNewBusMagImages();

// busMagImagesArray[newImgIndex1].renderBusMagImageOutput();
// busMagImagesArray[newImgIndex2].renderBusMagImageOutput();
// busMagImagesArray[newImgIndex3].renderBusMagImageOutput();
// busMagImagesArray[3].renderBusMagImageOutput();
// busMagImagesArray[4].renderBusMagImageOutput();
// busMagImagesArray[5].renderBusMagImageOutput();


// ========================== Start Chart.js ==========================

var ctx = document.getElementById('myChart');

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

