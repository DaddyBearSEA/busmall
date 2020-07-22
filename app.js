'use strict'


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

// TODO: this code doesn't work right now.

// function compareNumberOfClicks() {
//   console.log(totalImageClicks + 'close to finish');
//   if (totalImageClicks === 10) {
//     var compareNumberofClicks = document.getElementById('displayBusMagImg');
//     listOfImages.removeEventListner('click', countClickOnBusMagImage);
//     console.log('you are done!')
//   }
//   else {
//     console.log('Please click on an Image');
//   }
// }

function countClickOnBusMagImage(event) {

  if (event.target.tagName === 'IMG') {
    totalImageClicks++;
    console.log(totalImageClicks);
    // added a click so refresh pics - call the function to refresh the pics.


    for (var busMagImagesIndex = 0; busMagImagesIndex < busMagImagesArray.length; busMagImagesIndex++) {
      if (busMagImagesArray[busMagImagesIndex].imgSrc === event.target.getAttribute('src')) {
        busMagImagesArray[busMagImagesIndex].liveClicks++;
        console.log('YUP! Correct!')
      }      
    }
 
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
// TODO: this doesn't work but needs fixing
// compareNumberOfClicks()

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

// busMagImagesArray[newImgIndex0].renderBusMagImageOutput();
// busMagImagesArray[newImgIndex1].renderBusMagImageOutput();
// busMagImagesArray[newImgIndex2].renderBusMagImageOutput();
// busMagImagesArray[newImgIndex3].renderBusMagImageOutput();
// busMagImagesArray[newImgIndex4].renderBusMagImageOutput();
// busMagImagesArray[newImgIndex5].renderBusMagImageOutput();


// ========================== Start Chart.js ==========================

/*
1 Grab the number of total clicks per image from the array
0: busMagImage {busMagImageName: "R2D2 Bag", imgSrc: "images/bag.jpg", liveClicks: 7}
1: busMagImage {busMagImageName: "Banana Slicer", imgSrc: "images/banana.jpg", liveClicks: 7}
2: busMagImage {busMagImageName: "Bathroom Reader", imgSrc: "images/bathroom.jpg", liveClicks: 0}
3: busMagImage {busMagImageName: "Open Toe Boots", imgSrc: "images/boots.jpg", liveClicks: 0}
4: busMagImage {busMagImageName: "Breakfast Maker", imgSrc: "images/breakfast.jpg", liveClicks: 0}
5: busMagImage {busMagImageName: "Bubble Gum Meatballs", imgSrc: "images/bubblegum.jpg", liveClicks: 0}
length: 6

2. put the number into the Graph.
3. create an array for the labels.



*/








// =============== Start to Rendering Chart ================

// var fakeDataForNow = busArray[4, 5, 10, 12];

var ctx = document.getElementById('myChart');

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['R2D2', 'Banana', 'Reader', 'Boots', 'Breakfast', 'Meatballs'],
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

