
var Name=document.getElementById("LoginName");
Name.textContent=localStorage.getItem("username");

var Card=document.getElementById("NumberCards");
Card.textContent=localStorage.getItem("MyCaed");

function OpenHomePage(){
    
    window.Location.href='http://127.0.0.1:5500/Slider/slider.html';
}
function OpenMyCard(){
    window.location.href='http://127.0.0.1:5500/mycard/Card.html';
}
function OpenProduts(){
    
    
    window.location.href='http://127.0.0.1:5500/Products/Products.html';

}

var bady = document.body;
var ChColor = SetColor();
bady.style.backgroundColor = ChColor;

function changeColor() {
  var color = document.getElementById("InputColor").value;
  localStorage.setItem('Color', color);
  var bady = document.body;
  var ChColor = SetColor();
  bady.style.backgroundColor = ChColor;

}


function SetColor() {
  var color = localStorage.getItem('Color');
  return color;
}


var currentPicIndex = 0;
var ShowPICS;
PlayShow();

const images = [
    '1.jpg',
    '2.jpg',
    '3.jpg',
    '4.jpg',
    '5.jpg',
    '6.jpg',
    '7.jpg',
    '8.jpg',
   
];

function showSlide(index) {
    const slide = document.getElementById('Photo');
    slide.src = images[index];
}

function NextPic() {
    currentPicIndex = (currentPicIndex + 1) % images.length;
    showSlide(currentPicIndex);
}

function Prev() {
    currentPicIndex = (currentPicIndex - 1 + images.length) % images.length;
    showSlide(currentPicIndex);
}

function PlayShow() {
   

    ShowPICS = setInterval(NextPic, 4000); 
}


let scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};


function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}

function LogOut(){
    window.location.href='http://127.0.0.1:5500/Welcome.html';
}