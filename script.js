let TodoList = []
let DoneList = []

TodoList = JSON.parse(localStorage.getItem('TodoList'))
DoneList = JSON.parse(localStorage.getItem('DoneList'))

if(TodoList == null){
    TodoList = []
}
if(DoneList == null){
    DoneList = []
}

function load(){
    const inputElem = document.querySelector('input')
    const dt = document.querySelector('dt')
    const ul = document.querySelector('ul')
    
    
    for(let i = 0 ; i < TodoList.length ; ++i){
            const buttonDiv = document.createElement('div')
            buttonDiv.setAttribute("class", "flex justify-end")
           
            const dl = document.createElement('dl')
            const li = document.createElement('li')
            li.setAttribute("class", "flex justify-between")
            li.innerHTML = TodoList[i]
            const delBtn = document.createElement('button')
            delBtn.innerHTML = '<img width="25" height="25" src="https://image.flaticon.com/icons/png/512/1828/1828843.png" alt="Remove free icon" title="Remove free icon" class="loaded">'
            delBtn.addEventListener('click', () => {
                ul.removeChild(li)
                
	        })

            const donBtn = document.createElement('button')
            donBtn.setAttribute("class" , "mr-3")
            donBtn.innerHTML = '<img width="25" height="25" src="https://image.flaticon.com/icons/png/512/190/190411.png" alt="Checked free icon" title="Checked free icon" class="loaded">'
            donBtn.addEventListener('click', () => {
                dl.append(li)
                dt.insertBefore(dl, dt.childNodes[0])
                TodoList.splice(TodoList.findIndex(x => (x.innerHTML)-1), 1)
  
	        })
            
            buttonDiv.append(donBtn)
            buttonDiv.append(delBtn)
            li.append(buttonDiv)
            ul.insertBefore(li, ul.childNodes[0])
    }

    for(let i = 0 ; i < DoneList.length ; ++i){    
            const dl = document.createElement('dl')
            dl.innerHTML = DoneList[i]
            dt.insertBefore(dl, dt.childNodes[0])
    }


}
load()


const clickCallback = () => {
    const inputElem = document.querySelector('input')
    const dt = document.querySelector('dt')
    const ul = document.querySelector('ul')
    const buttonDiv = document.createElement('div')
    buttonDiv.setAttribute("class", "flex justify-end")
    localStorage.getItem('TodoList')
    localStorage.getItem('DoneList')
    if(inputElem.value === ""){
        alert("Need Input!!")
    }else{

        
            const dl = document.createElement('dl')
            const li = document.createElement('li')
            li.setAttribute("class", "flex justify-between")
            li.innerHTML = inputElem.value
            TodoList.push(inputElem.value)
            localStorage.setItem('TodoList', JSON.stringify(TodoList));
            const delBtn = document.createElement('button')
            delBtn.innerHTML = '<img width="25" height="25" src="https://image.flaticon.com/icons/png/512/1828/1828843.png" alt="Remove free icon" title="Remove free icon" class="loaded">'
            delBtn.addEventListener('click', () => {
                ul.removeChild(li)
                
	        })

            const donBtn = document.createElement('button')
            donBtn.setAttribute("class" , "mr-3")
            donBtn.innerHTML = '<img width="25" height="25" src="https://image.flaticon.com/icons/png/512/190/190411.png" alt="Checked free icon" title="Checked free icon" class="loaded">'
            donBtn.addEventListener('click', () => {
                dl.append(li)
                dt.insertBefore(dl, dt.childNodes[0])
                // ul.remove(li)
                console.log(dl.innerText);
                DoneList.push(dl.innerText)
                TodoList.splice(TodoList.findIndex(x => (x.innerHTML)-1), 1)
                
                localStorage.setItem('TodoList', JSON.stringify(TodoList));
                localStorage.setItem('DoneList', JSON.stringify(DoneList));
	        })
            
            buttonDiv.append(donBtn)
            buttonDiv.append(delBtn)
            li.append(buttonDiv)
            ul.insertBefore(li, ul.childNodes[0])
    }

}

const keyEnter = (event) => {
    if( event.keyCode == 13 ) {
        const inputElem = document.querySelector('input')
        if(inputElem.value === ""){
            alert("Need Input!!")
        }else{

           clickCallback()
            
        }
    }
}

// let currentInput = ''

// const input = document.createElement('input')
// input.addEventListener('input', ev => {
//     currentInput = ev.target.value
// })

// const ul = document.createElement('ul')
// const mainDiv = document.createElement('div')

// //add task button
// const btn = document.createElement('button')
// btn.innerHTML="Add Task"
// btn.addEventListener('click', () => {
// 	const spanTask = document.createElement('span')
// 	const span = document.createElement('span')
// 	span.innerHTML = currentInput
// 	spanTask.append(span)

// 	const delBtn = document.createElement('button')
// 	delBtn.innerHTML = 'delete'
// 	delBtn.addEventListener('click', () => {
// 		mainDiv.removeChild(spanTask)
// 	})

// 	spanTask.append(delBtn)
// 	spanTask.append(document.createElement('br'))
// 	mainDiv.append(spanTask)
// })
// //show everything
// document.body.append(input)
// document.body.append(btn)
// document.body.append(mainDiv)




