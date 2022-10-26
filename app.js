<<<<<<< HEAD
var list = document.getElementById('list');


function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // list details
    var li = document.createElement("li") //HTML ka tag create kr k deta hai
    var text = document.createTextNode(todo_item.value)
    li.appendChild(text) // for inserting the values
    


    //delete button details

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","btnInner") //koi bhi attribute set krwa skty hain using set attribute. Yeh aap sy 2 values leta hai. pehli mn attribute ka naam or dosri mn attribute ki value
    delBtn.setAttribute("onclick","deleteItem(this)"); // this : poora button uthaa kr hmein console mn laa day ga
    delBtn.appendChild(delText)
    li.appendChild(delBtn)
    


    // Edit button

    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class",'btnInner')
    editBtn.setAttribute("onclick","editItem(this)")

    editBtn.appendChild(editText)
    li.appendChild(editBtn)


    list.appendChild(li)
    todo_item.value=''
}

function deleteAll(){
    list.innerHTML=''
}

function deleteItem(e){
    // console.log(e) // e is just a parameter

    e.parentNode.remove();
}

function editItem(e){
    let val = e.parentNode.firstChild.nodeValue;
    let editVal = prompt("Enter text here",val)
    // console.log(editVal)

    e.parentNode.firstChild.nodeValue = editVal;

}
=======
var list = document.getElementById('list');


function addTodo(){
    var todo_item = document.getElementById("todo-item");

    // list details
    var li = document.createElement("li") //HTML ka tag create kr k deta hai
    var text = document.createTextNode(todo_item.value)
    li.appendChild(text) // for inserting the values
    


    //delete button details

    var delBtn = document.createElement("button")
    var delText = document.createTextNode("Delete")
    delBtn.setAttribute("class","btnInner") //koi bhi attribute set krwa skty hain using set attribute. Yeh aap sy 2 values leta hai. pehli mn attribute ka naam or dosri mn attribute ki value
    delBtn.setAttribute("onclick","deleteItem(this)"); // this : poora button uthaa kr hmein console mn laa day ga
    delBtn.appendChild(delText)


    li.appendChild(delBtn)
    list.appendChild(li)
    todo_item.value=''
}

function deleteAll(){
    
}

function deleteItem(e){
    console.log(e) // e is just a parameter
}
>>>>>>> e7841b926357c3663dc8a9bf61ee571b207c8dfa
