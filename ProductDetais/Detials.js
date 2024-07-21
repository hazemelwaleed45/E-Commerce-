var Name=document.getElementById("LoginName");
Name.textContent=localStorage.getItem("username");

var Card=document.getElementById("NumberCards");
Card.textContent=localStorage.getItem("MyCaed");

function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length); // Trim leading spaces
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

var Disphoto=document.getElementById("PhotoView");
var Photo=getCookie("Photo");
var photoff=Photo.split('=');
Disphoto.src=photoff[0];

var Name = getCookie("Name");
var NameFF=Name.split('=');
var disName=document.getElementById("Name");
disName.innerText=NameFF[0];

var Price = getCookie("Price");
var PriceFF=Price.split('=');
var DisPrice=document.getElementById("Price");
DisPrice.innerText=PriceFF[0];

var Country = getCookie("Country");
var CountryFF=Country.split('=');
var DisCountry=document.getElementById("Country");
DisCountry.innerText=CountryFF[0];

function OpenHomePage(){
    
    window.Location.href='http://127.0.0.1:5500/Slider/slider.html';
}
function OpenMyCard(){
    window.location.href='http://127.0.0.1:5500/mycard/Card.html';
}
function OpenProduts(){
    
    
    window.location.href='http://127.0.0.1:5500/Products/Products.html';

}

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