'use strict'

// TODO:  2nd Chart should Overlay main chart - see video
// TODO:  Random number still isn't working correctly.
// TODO:  Add a User store session into Localstorage between Page Refreshes  - / as it ends add the array to the local storage.
//            a: store the producst arrray into local storage as a stringyfy JSON String
//            b: retrieve the products array from local storage and then Remember you 
//                have to send the array back through the constructor.


// ================== Global Varialbes ==================
var busMagImagesArray = [];
var totalImageClicks = 0;
var currentIndexDisplayed = [5, 0, 3];
var busMallTimeVisitedPage = 0;



// buildANewPreview();


//

// ==================== Functions =======================
// constructor to build a new array of images with number of clicks
function BusMagImage(busMagImageName, src) {
  this.busMagImageName = busMagImageName;
  this.imgSrc = src;
  this.liveClicks = 0;
  this.imgShown = 0;
   
  busMagImagesArray.push(this);
}





// redering the pictures from the constructor
BusMagImage.prototype.renderBusMagImageOutput = function () {
  var target = document.getElementById('displayBusMagImg');
  var busMagImageLI = document.createElement('li');
  var busMagImageIMG = document.createElement('img');
  console.log('prototype is hit')

  busMagImageIMG.src = this.imgSrc;
  busMagImageIMG.alt = this.busMagImageName;
  busMagImageLI.appendChild(busMagImageIMG);

  var busMagImageNameP = document.createElement('busMagImageName');
  busMagImageNameP.textContent = this.busMagImageName;
  busMagImageLI.appendChild(busMagImageNameP);

  target.appendChild(busMagImageLI);

}

// this function compares the Number of Clicks to the max number you want a user to click
function compareNumberOfClicks() { 
  
  // storeMyData();

  if (totalImageClicks === 5) {
    var compareNumberofClicks = document.getElementById('displayBusMagImg');
    alert('You are done Clicking!');
    listOfImages.removeEventListener('click', countClickOnBusMagImage);
    
    // restoreMyData();
    outDisplayTotals();  // calls the function to diplays totals when = to the limit of clicks
    makeMyChart(); // calls the function to make the chart1
    makeMyChart2(); // calls the function to make the Chart2
    // storeMyData();
  }
  else {
    console.log('Please click on an Image');
    displayNewBusMagImages();
  }
}

// this function counts the clicks on the image you click on.
function countClickOnBusMagImage(event) {

  if (event.target.tagName === 'IMG') {
    totalImageClicks++;

    for (var busMagImagesIndex = 0; busMagImagesIndex < busMagImagesArray.length; busMagImagesIndex++) {
      if (busMagImagesArray[busMagImagesIndex].imgSrc === event.target.getAttribute('src')) {
        busMagImagesArray[busMagImagesIndex].liveClicks++;
      }      
    }
    compareNumberOfClicks()
  }

}


// Displays  random new bus images after you click
function displayNewBusMagImages() {

  var newImg1 = Math.floor(Math.random() * busMagImagesArray.length);
    while(newImg1 === currentIndexDisplayed[0] ||
          newImg1 === currentIndexDisplayed[1] ||
          newImg1 === currentIndexDisplayed[2]){
          newImg1 = Math.floor(Math.random() * busMagImagesArray.length)
          }
  var newImg2 = Math.floor(Math.random() * busMagImagesArray.length);
    while (newImg2 === newImg1 ||
            newImg2 === currentIndexDisplayed[0] ||
            newImg2 === currentIndexDisplayed[2]){
            newImg2 = Math.floor(Math.random() * busMagImagesArray.length);
    }
  var newImg3 = Math.floor(Math.random() * busMagImagesArray.length);
    while (newImg3 === newImg1 ||
            newImg3 === newImg2 ||
            newImg3 === currentIndexDisplayed[0] ||
            newImg3 === currentIndexDisplayed[1]){
              newImg3 = Math.floor(Math.random() * busMagImagesArray.length)
            }

// you are already working with the Indexes - Pull the number and push up to array
// imgShown ++  Ron D helped me with this
            
  var newDisplayBusMagImg1 = busMagImagesArray[newImg1];
     newDisplayBusMagImg1.imgShown++
  var newDisplayBusMagImg2 = busMagImagesArray[newImg2];
    newDisplayBusMagImg2.imgShown++
  var newDisplayBusMagImg3 = busMagImagesArray[newImg3];
    newDisplayBusMagImg3.imgShown++;

  var compareNumberOfClicks = document.getElementById('displayBusMagImg');
  
  compareNumberOfClicks.innerHTML = '';

  newDisplayBusMagImg1.renderBusMagImageOutput();
  newDisplayBusMagImg2.renderBusMagImageOutput();
  newDisplayBusMagImg3.renderBusMagImageOutput();
}


// Displays the totals after the limit of clicks
function outDisplayTotals (){
  var outDisplayClickTotals = document.getElementById('diplayTotalClicks');
  outDisplayClickTotals.innerHTML = '';
  for (var i = 0; i < busMagImagesArray.length; i++){
    var outPutTotals = document.createElement('li')
    outPutTotals.textContent = busMagImagesArray[i].busMagImageName + ' :' + busMagImagesArray[i].liveClicks + ' Shown: ' + busMagImagesArray[i].imgShown + ' times';
    listOfImages.appendChild(outPutTotals);

    
  }

}

// restoreMyData();

// =======================  localStorage  =============================

// function storeMyData(){
//   var busMallvisitDataStored = JSON.stringify(busMagImagesArray);
//     localStorage.setItem('MyBusData',  busMallvisitDataStored)
//   var storeTotalClicks = JSON.stringify(totalImageClicks);
//     localStorage.setItem('busTotalClicks', storeTotalClicks);
// }



// function restoreMyData() {

//   if (restoreMyData.retrieveMyBusData !== null) {
//     console.log('Checking to see if there is local storage');


    var busDatafromStorage = localStorage.getItem('MyBusData'); // grabbing the array of data
    var retrieveMyBusData = JSON.parse(busDatafromStorage);
    console.log('My Data: ' + retrieveTotalClicks);
    // new BusMagImage(retrieveMyBusData);


//     var totalClicksFromStorage = localStorage.getItem('busTotalClicks'); // grabbing the current total clicks
//     var retrieveTotalClicks = JSON.parse(totalClicksFromStorage);
//     console.log('total clicks from LS: ' + retrieveTotalClicks);



//   } else {
//     retrieveMyBusData.BusMagImage();
//     console.log('There was Data Already!');
//   }


  // TODO: take the data in the current objects to pass into the BusImageArray
  // TODO:  Remove the current local storage and then re-write it with the new data.
  // TODO: Total clicks set the number of clicks to the restored data.
  // TODO:  after you hit the ceiling, erase the storage.


  // retrieveMyBusData.BusMagImage();
// }

// Test Git Hub on grabbing this pull request





// ================== Function Calls =====================
// listening for the 'click' on the IMG only.
var listOfImages = document.getElementById('displayBusMagImg');
listOfImages.addEventListener('click', countClickOnBusMagImage);

// TODO: check for data in local storage

// function buildANewPreview() {
  console.log('Im in the Build a Bear Function');

new BusMagImage('R2D2 Bag', 'images/bag.jpg');
new BusMagImage ('Banana Slicer', 'images/banana.jpg');
new BusMagImage ('Bathroom Reader', 'images/bathroom.jpg');
new BusMagImage ('Open Toe Boots', 'images/boots.jpg');
new BusMagImage ('Breakfast Maker', 'images/breakfast.jpg');
new BusMagImage ('Bubble Gum Meatballs', 'images/bubblegum.jpg');
new BusMagImage ('Desk Chair', 'images/chair.jpg');
console.log('end of image list')
// new BusMagImage ('Action Figure', 'images/cthulhu.jpg');
// new BusMagImage ('Duckbilled Dog', 'images/dog-duck.jpg');
// new BusMagImage ('Dragon Meat', 'images/dragon.jpg');
// new BusMagImage ('Silverware Pens', 'images/pen.jpg');
// new BusMagImage ('Pet Sweaper', 'images/pet-sweep.jpg');
// new BusMagImage ('Pizza Scissors', 'images/scissors.jpg');
// new BusMagImage ('Shark Bag', 'images/shark.jpg');
// new BusMagImage ('Baby Sweeper', 'images/sweep.png');
// new BusMagImage ('Kids Sleeping Bag', 'images/tauntaun.jpg');
// new BusMagImage ('Unicorn Meat', 'images/unicorn.jpg');
// new BusMagImage ('Octapus USB', 'images/usb.gif');
// new BusMagImage ('Water Can', 'images/water-can.jpg');
// new BusMagImage ('Wine Glass', 'images/wine-glass.jpg');

// }


// buildANewPreview();



//if anything in local storage  !== null 
// grab the data and put it into the starting data
/*
if(parsedDrinks !== null){
  Coffee.drinks = parsedDrinks; // if there isnt anything, drinks === null
  renderOrders(); // dont do this if nothing comes back
*/



// displayNewBusMagImages();

// =============== Start to Rendering Chart ================



// ================ Create Data for Chart =================

// ------- Make my Chart -------
// chart should be created after the number of click = the Value of number of clicks

// show a bar graph to show the number of clicks
function makeMyChart() {
  console.log('You hit makeMyChart!');
  var inputMyLabels = [];
  var inputMyData = [];
  for (var i = 0; i < busMagImagesArray.length; i++){
    inputMyLabels.push(busMagImagesArray[i].busMagImageName);
    inputMyData.push(busMagImagesArray[i].liveClicks);

  }


// =============chart js ======================

var ctx = document.getElementById('myChart');

var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: inputMyLabels,
        datasets: [{
            label: '# of Votes',
            data: inputMyData,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 255, 235, 0.2)',
                'rgba(255, 215, 86, 0.2)',
                'rgba(75, 217, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 162, 105, 0.2)',
                'rgba(217, 206, 86, 0.2)',
                'rgba(75, 192, 217, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(115, 162, 235, 0.2)',
                'rgba(255, 206, 15, 0.2)',
                'rgba(115, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(54, 217, 235, 0.2)',
                'rgba(255, 217, 86, 0.2)',
                'rgba(0, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(115, 255, 255, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
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
}

// ===================== Begin 2nd Chart =====================
// to show a line graph for times shown

// console.log('You made it to Chart 2');

function makeMyChart2(){
  var inputMyLabels2 = [];
  var inputMyData2 = [];
  for (var i = 0; i < busMagImagesArray.length; i++){
    inputMyLabels2.push(busMagImagesArray[i].busMagImageName);
    inputMyData2.push(busMagImagesArray[i].imgShown);
  }
console.log('You made it past the function for Chat 2');
  // =============chart js ======================
var ctx = document.getElementById('myChart2').getContext('2d');
var myChart2 = new Chart(ctx, {
    type: 'line',
    data: {
        labels: inputMyLabels2,
        datasets: [{
            label: 'Total Times Shown',
            data: inputMyData2,
            backgroundColor: [
                'rgba(255, 99, 132, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(54, 162, 235, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 206, 86, 0.7)',
                'rgba(75, 192, 192, 0.7)',
                'rgba(153, 102, 255, 0.7)',
                'rgba(255, 159, 64, 0.7)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
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
}