//Div and Images
const slidesDiv = document.querySelector('.slide-div');
const slidesImg = document.querySelectorAll('.slide-div img');

//Buttons
const prevButton = document.querySelector('#prev');
const nextButton = document.querySelector('#next');

//Movement
let i = 1;
const size = slidesImg[0].clientWidth;
slidesDiv.style.transform = 'translateX(' + (-size * i) + 'px)';

//Buttons function
function nextImage() {
  if (i >= slidesImg.length - 1) return;
  slidesDiv.style.transition = 'transform 0.4s ease-in-out';
  i++;
  slidesDiv.style.transform = 'translateX(' + (-size * i) + "px)";
};

function prevImage() {
  if (i <= 0) return;
  slidesDiv.style.transition = 'transform 0.4s ease-in-out';
  i--;
  slidesDiv.style.transform = 'translateX(' + (-size * i) + "px)";
};

nextButton.addEventListener('click', nextImage);
prevButton.addEventListener('click', prevImage);

//Stop the movement
function repeatMovement() {
  if (slidesImg[i].id === 'yellow') {
    slidesDiv.style.transition = 'none';
    i = slidesImg.length - 2;
    slidesDiv.style.transform = 'translateX(' + (-size * i) + "px)";
  }
  if (slidesImg[i].id === 'purple') {
    slidesDiv.style.transition = 'none';
    i = slidesImg.length - i;
    slidesDiv.style.transform = 'translateX(' + (-size * i) + "px)";
  }
};

slidesDiv.addEventListener('transitionend', repeatMovement);