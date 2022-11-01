
let input= document.getElementById("input")
let ul = document.getElementById("ul_list")

let arr = []


function addTodo(){
    // // list.push(input.value)
    // input.value=''
    // var listObj = {
    //     value:input.value
    // }
    // list.push(listObj)
    // var li = document.createElement("li")
    // var text = document.createTextNode(listObj.value)

    // // delete button
    // let delBtn = document.createElement('button')
    // let delText = document.createTextNode("Delete")
    // delBtn.appendChild(delText)
    // // delBtn.setAttribute("onClick","deleteList()")
    // li.appendChild(text)

    // li.appendChild(delBtn)



    // ul.appendChild(li)
    
    let index = arr.length
    
    arr.push(input.value)
    // console.log(arr[index])
    // console.log(arr)

    
    let li = document.createElement("li")
    let liTxt = document.createTextNode(arr[index])
    li.appendChild(liTxt)
    
    // DELETE BUTTON

    let dltBtn = document.createElement("img")
    dltBtn.src = "/trash.svg"
    dltBtn.setAttribute("class","dltBtn")
    dltBtn.setAttribute("onClick","deleteItem(this)")
    // let dltTxt = document.createTextNode("")
    li.appendChild(dltBtn)
    


    ul.appendChild(li)

    input.value=''
}



function deleteItem(e){
    e.parentNode.remove()
}