
var list = document.getElementById("list");


function addTodo(){
    var Todo = document.getElementById("Todo")
    var li = document.createElement("li")
    var liText = document.createTextNode( Todo.value  )
    li.appendChild(liText)


   //////Delete Button
    var delbtn = document.createElement("button");
    var btn = document.createTextNode(" Delete ")
    delbtn.setAttribute("class","btn")
    delbtn.setAttribute("onclick","DeleteItem(this)")
    delbtn.appendChild(btn)

  //////Edit Button
    var editbtn = document.createElement("button");
    var btn = document.createTextNode(" Edit ")
    editbtn.setAttribute("class","btn")
    editbtn.setAttribute("onclick","editItem(this)")
    editbtn.appendChild(btn)

    li.appendChild(editbtn)
    li.appendChild(delbtn)

    
    list.appendChild(li)
    Todo.value = ""
    console.log(li)

}

function DeleteItem(hamza){
    hamza.parentNode.remove();
}

function editItem(hamza){
    var abs = prompt("Enter updated value",hamza.parentNode.firstChild.nodeValue);
    hamza.parentNode.firstChild.nodeValue = abs;
    
}


function Deleteall(){
    list.innerHTML = ""
}

