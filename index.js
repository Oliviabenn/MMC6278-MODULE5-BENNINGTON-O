
//Add items for to do list

let formRef = document.getElementById('add-todo')
formRef.onsubmit = function (event) {
  event.preventDefault();
  // console.log(event)
  // console.log(event.target[0].value)
  let inputRef = event.target[0]
  let inputValue = event.target[0].value

  let isValueEmpty = inputValue.trim() === ""
  if(isValueEmpty){
    return;
  }

  let ulRef = document.getElementById('todo-list')
  let listItems = ulRef.childNodes
  for (const li of listItems) {
    if(li.textContent === inputValue){
      return;
    }
  }

  console.log(ulRef)
  console.dir(ulRef)

  let liNode = document.createElement('li')

  let buttonNode = document.createElement('button')
  buttonNode.innerText = inputValue
  buttonNode.onclick = function () {
   
    let isItChecked = buttonNode.style.textDecoration === 'line-through'
    if (isItChecked) {
      liNode.remove()
    } else {
      buttonNode.style.textDecoration = 'line-through'
    }
  }

  liNode.append(buttonNode)
  ulRef.append(liNode)
  inputRef.value = ''
  inputRef.focus()
}

