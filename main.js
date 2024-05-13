
var items = document.querySelectorAll(".list");
var left = document.querySelector("#left"); 
var right = document.querySelector("#right"); 
var draggedItem = null
items.forEach(function (item) {
    item.setAttribute("draggable", "true");
    item.addEventListener("dragstart", function (dets) {
       draggedItem = dets.target;
    })
})

document.addEventListener("DOMContentLoaded", function() {
    [left, right].forEach(function (container) {
      container.addEventListener("dragover", function (e) {
        e.preventDefault();
      });
      container.addEventListener("drop", function () {
        container.appendChild(draggedItem);
        draggedItem = null;
      });
    });

});