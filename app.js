var toDoItems = document.querySelectorAll('li');
var btnAdd = document.querySelector('.add-button');
var txtInput = document.querySelector('.txt-input');
var toDoList = document.querySelector('.todo-list');
var txtCompleted = document.querySelector('.txt-completed');
var txtAllCompleted = document.querySelector('.txt-all-completed');
var btnReset = document.querySelector('.btn-reset');

var checkAllDone = function () {
    if(document.querySelectorAll('.todo-item').length === document.querySelectorAll('.completed').length) {
        txtAllCompleted.style.visibility = 'visible';
    } else {
        txtAllCompleted.style.visibility = 'hidden';
    }
}

var markComplete = function (event) {
    event.target.classList.toggle('completed');
    checkAllDone();
    txtCompleted.textContent = "" + document.querySelectorAll('.completed').length + " completed";
}

var addToDoItem = function (event) {
    event.preventDefault();
    var newToDoItem = document.createElement('li');
    newToDoItem.textContent = txtInput.value;
    newToDoItem.classList.add('todo-item');
    newToDoItem.addEventListener('click', markComplete);
    
    toDoList.appendChild(newToDoItem);
    txtInput.value = "";
    checkAllDone();
    txtCompleted.textContent = "" + document.querySelectorAll('.completed').length + " completed";
}

var resetAllItems = function () {
    var completedItems = document.querySelectorAll('.completed');
    completedItems.forEach(function(item) {
        item.classList.remove('completed');
    });
    txtCompleted.textContent = "" + document.querySelectorAll('.completed').length + " completed";
}

toDoItems.forEach(function(item) {
    item.addEventListener('click', markComplete);
});

txtAllCompleted.style.visibility = 'hidden';
btnAdd.addEventListener('click', addToDoItem);
btnReset.addEventListener('click', resetAllItems);