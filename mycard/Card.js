var Name = document.getElementById("LoginName");
Name.textContent = localStorage.getItem("username");

var Card = document.getElementById("NumberCards");
Card.textContent = localStorage.getItem("MyCaed");
var DISPLAYITEMS = new Array();
var DisItem ;
var Count=1;
renderTable();
function removeItems(id) {

    for (var i = 0; i < Count; i++) {
        if (DisItem[0].Id === id) {
            console.log(DisItem[0].Id);
            DisItem.splice(i, 1);
            var Counter=localStorage.getItem("MyCaed");
            Counter--;
            Card.textContent=Counter ;
            localStorage.setItem("MyCaed", Counter);
            break;
        }
    }

    renderTable();
}

function renderTable() {
    var tableBody = document.getElementById('ItemsTable');
    tableBody.innerHTML = '';

    DISPLAYITEMS = localStorage.getItem("Items");
       

    var ItemsList = JSON.parse(DISPLAYITEMS);
    console.log(ItemsList);
    var Len = localStorage.getItem("MyCaed");

    console.log(Len);
    
    for (var i = 0; i < Len ; i++) {
       

        
        DisItem = ItemsList[Count];

        console.log(DisItem);
        var row = document.createElement('tr');

        var idCell = document.createElement('td');
        idCell.textContent = DisItem[0].Id;
        row.appendChild(idCell);


        console.log(DisItem[0].Id);
        
        Count++;
        var nameCell = document.createElement('td');
        nameCell.textContent = DisItem[0].Name;
        row.appendChild(nameCell);

        console.log(DisItem[0].Name);


        var priceCell = document.createElement('td');
        priceCell.textContent = DisItem[0].Price;
        row.appendChild(priceCell);

        console.log(DisItem[0].Price);
        var actionCell = document.createElement('td');
        var removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';
        removeButton.onclick = (function (id) {
            return function () {
                removeItems(id);
            };
        })(DisItem.id);
        actionCell.appendChild(removeButton);
        row.appendChild(actionCell);

        tableBody.appendChild(row);
    }
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