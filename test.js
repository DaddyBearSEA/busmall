



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