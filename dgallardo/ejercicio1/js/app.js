function mostrarTodo(){
    var todo = document.getElementById("buenas-noticias");
    if(todo.style.display == "none"){
        todo.style.display = "block";
    } else if(todo.style.display == "block"){
        todo.style.display = "none";
    }
}