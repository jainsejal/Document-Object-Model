var todoList = document.getElementById("todoList");
var addItem = document.getElementById("addTodo");

addItem.onclick = function(){
    if(document.getElementById("todo").value!== "" && document.getElementById("todo").value !== '\s'){
        var li = document.createElement("li");
        li.innerHTML = document.getElementById("todo").value;

        todoList.appendChild(li);
    }

    document.getElementById("todo").value = "";
}
