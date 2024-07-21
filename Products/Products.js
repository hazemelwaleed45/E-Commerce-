
var Name=document.getElementById("LoginName");
Name.textContent=localStorage.getItem("username");

var Card=document.getElementById("NumberCards");
Card.textContent=localStorage.getItem("MyCaed");
/*localStorage.setItem("MyCaed" , 0);/*
localStorage.removeItem("Items1");
localStorage.removeItem("Items2");
localStorage.removeItem("Items3");
localStorage.removeItem("Items4");
localStorage.removeItem("Items5");
localStorage.removeItem("Items6");
localStorage.removeItem("Items9");
localStorage.removeItem("Items");
localStorage.setItem("Items" , 0);*/
var ArrItems = new Array({});

document.addEventListener('DOMContentLoaded', () => {
    const categories = {
        "All" : [
            { id: 46, name: "Old Style", price: 400, image: "Shoes6.jpg", countery : "Palistaine" },
            { id: 1, name: "Samsung GALAXY", price: 699, image: "phone1.jpg" , countery : "South Korea" },
            { id: 25, name: "DELL", price: 800, image: "Lab5.jpg", countery : "Thiland" },
            { id: 52, name: " Jeans Blue", price: 450, image: "Pan2.jpg", countery : "Eygpt" },

            { id: 22, name: "Mac", price: 2000, image: "Lab2.jpg", countery : "USA" } ,
            { id: 34, name: "Bluetooth", price: 150, image: "Airbots4.jpg" , countery : "Qatar"},
            { id: 53, name: "Classical", price: 400, image: "Pan3.jpg", countery : "Eygpt" }
        ] ,
        "Phones": [
            { id: 1, name: "Samsung GALAXY", price: 699, image: "phone1.jpg" , countery : "South Korea" },
            { id: 2, name: "Xaomi", price: 999, image: "phone2.jpg" , countery : "China"} ,
            { id: 3, name: "Samsung GALAXY", price: 750, image: "phone3.jpg" , countery : "South Korea" },
            { id: 4, name: "Iphone", price: 1000, image: "phone4.jpg" , countery : "USA" },
            { id: 5, name: "VIVO", price: 800, image: "phone5.jpg" , countery : "Eygpt" },
            { id: 6, name: "Nokia", price: 650, image: "phone6.jpg" , countery : "Finland" },
        ],
        "Labtops": [
            { id: 21, name: "Lenovo", price: 1500, image: "Lab1.jpg", countery : "UAE" },
            { id: 22, name: "Mac", price: 2000, image: "Lab2.jpg", countery : "USA" } ,
            { id: 23, name: "Hp", price: 950, image: "Lab3.jpg", countery : "Eygpt" },
            { id: 24, name: "Hp", price: 950, image: "Lab4.jpg", countery : "Eygpt" },
            { id: 25, name: "DELL", price: 800, image: "Lab5.jpg", countery : "Thiland" },
            { id: 26, name: "Mac", price: 1300, image: "Lab6.jpg", countery : "USA" }
        ] ,
        "AirPots": [
            { id: 31, name: "HeadPhone", price: 250, image: "Airbots1.jpg" , countery : "China"},
            { id: 32, name: "HeadPhone", price: 250, image: "Airbots2.jpg", countery : "China" },
            { id: 33, name: "Sub", price: 100, image: "Airbots3.jpg" , countery : "Qatar"},
            { id: 34, name: "Bluetooth", price: 150, image: "Airbots4.jpg" , countery : "Qatar"},
            { id: 35, name: "AirPots", price: 300, image: "Airbots5.jpg" , countery : "Eygpt"},
            { id: 36, name: "AirPots", price: 300, image: "Airbots6.jpg" , countery : "Egypt"}
        ] ,
        "Shoes": [
            { id: 41, name: "Classical Men", price: 300, image: "Shoes1.jpg", countery : "Qatar" },
            { id: 42, name: " Classical Women", price: 500, image: "Shoes2.jpg", countery : "Marrocco" },
            { id: 43, name: "Sportive", price: 350, image: "Shoes3.jpg", countery : "UAE" },
            { id: 44, name: "Fashion", price: 250, image: "Shoes4.jpg", countery : "Eygpt" },
            { id: 45, name: "Fashion", price: 250, image: "Shoes5.jpg", countery : "Eygpt" },
            { id: 46, name: "Old Style", price: 400, image: "Shoes6.jpg", countery : "Palistaine" }
        ] ,
        "Pants": [
            { id: 51, name: "Fashion", price: 500, image: "Pan1.jpg", countery : "Eygpt" },
            { id: 52, name: " Jeans Blue", price: 450, image: "Pan2.jpg", countery : "Eygpt" },
            { id: 53, name: "Classical", price: 400, image: "Pan3.jpg", countery : "Eygpt" },
            { id: 54, name: "Jeans Black", price: 500, image: "Pan4.jpg", countery : "Eygpt" },
            { id: 55, name: "BoyFrind ", price: 400, image: "Pan5.jpg", countery : "Eygpt" },
            { id: 56, name: "Calssical", price: 350, image: "Pan6.jpg", countery : "Eygpt" }
        ]
    };

    const categoryList = document.getElementById('categoryList');
    const productList = document.getElementById('productList');
    const cartList = document.getElementById('cartList');
    var MyCard = [];
    loadProducts("All");
    function loadCategories() {
        for (let category in categories) {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = "#";
            a.textContent = category;
            a.addEventListener('click', () => loadProducts(category));
            li.appendChild(a);
            categoryList.appendChild(li);
        }
    }

    function loadProducts(category) {
        productList.innerHTML = '';
        categories[category].forEach(product => {
            const productDiv = document.createElement('div');
            productDiv.classList.add('product');

            const img = document.createElement('img');
            img.src = product.image;
            img.alt = product.name;

            const name = document.createElement('h3');
            name.textContent = product.name;

            const price = document.createElement('p');
            price.textContent = `$${product.price}`;

            const button = document.createElement('button');
            button.textContent = 'Add to Cart';
            button.addEventListener('click', () => addToCart(product));
            
            const btnView = document.createElement('button');
            btnView.textContent = 'View ';  
            btnView.addEventListener('click', () => ViewProduct(product));


            productDiv.appendChild(img);
            productDiv.appendChild(name);
            productDiv.appendChild(price);
            productDiv.appendChild(button);
            productDiv.appendChild(btnView);
            
            productList.appendChild(productDiv);
        });
    }

    function addToCart(product) {
        
  
        var Counter=localStorage.getItem("MyCaed");
    
        
        
        var arr=[{ "Id" : product.id ,"Name" : product.name , "Price" : product.price}];

        ArrItems.push(arr);
        localStorage.setItem("Items" ,JSON.stringify( ArrItems));
        console.log(product.id);
        console.log(product.name);
        console.log(product.price);
        console.log(localStorage.getItem("Items"));

        
        Counter++;
        Card.textContent=Counter ;
        localStorage.setItem("MyCaed", Counter);
        
        
    }
    
    function saveCookie(key, value) {
        document.cookie = key + "=" + value ;
    }

    function ViewProduct(product)
    {
        
         saveCookie("ID",product.id );
         saveCookie("Name",product.name );
         saveCookie("Price",product.price );
         saveCookie("Photo",product.image );
         saveCookie("Country",product.countery );

         window.location.href='http://127.0.0.1:5500/ProductDetais/Detials.html';
    }

    

    loadCategories();
});


function OpenHomePage(){
    
    window.Location.href='http://127.0.0.1:5500/Slider/slider.html';
}

function OpenProduts(){
    
    
    window.location.href='http://127.0.0.1:5500/Products/Products.html';

}

function OpenMyCard(){
    window.location.href = 'http://127.0.0.1:5500/mycard/Card.html' ;
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