//Select element function

const selectElement=function(element){
    return document.querySelector(elemnt);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click',function(){
    body.classList.toggle('open');
});

function todoList() {
    var item = document.getElementById("todoInput").value;
    var text = document.createTextNode(item);
    var listItem = document.createElement("li");
    listItem.appendChild(text);
    document.getElementById("list").appendChild(listItem);
  }
  
  var ul = document.getElementById("list");
    ul.addEventListener("click", function(e) {
    if (e.target.tagName === "LI"){
      e.target.classList.toggle("checked");
    }
  });