


// const clickCallback = () => {
//     const inputElem = document.querySelector('input')
//     const ul = document.querySelector('ul')
//     if(inputElem.value === ""){
//         alert("Need Input!!")
//     }else{
//         // const ps = document.querySelector('dt')
//         // const dt = document.createElement('dt')
//         // if(ps === null){
//         //     console.log(inputElem.value);
//         //     dt.innerHTML = inputElem.value
            
//         // }else{
//         //     // console.log(inputElem.value);
//         //     dt.innerHTML = inputElem.value
//         //     const ps = document.querySelectorAll('dt')
//         //     console.log(dt);
//         //     for(const p of ps){ 
//         //         p.innerText = inputElem.value
//         //     }
//         // }
//         // dl.append(dt)
//         console.log(inputElem.value);
//         const li = document.createElement('li')
//         li.innerHTML = inputElem.value
//         ul.appendChild(li)

//     }

// }

const keyEnter = (event) => {
    const dt = document.querySelector('dt')
    const ul = document.querySelector('ul')
    const mainDiv = document.createElement('div')

    if( event.keyCode == 13 ) {
        const inputElem = document.querySelector('input')
        if(inputElem.value === ""){
            alert("Need Input!!")
        }else{
            console.log(inputElem.value);
            const dl = document.createElement('dl')
            const li = document.createElement('li')
            li.innerHTML = inputElem.value

            const delBtn = document.createElement('button')
            delBtn.innerHTML = 'delete'
            delBtn.addEventListener('click', () => {
                mainDiv.removeChild(li)
	        })

            const donBtn = document.createElement('button')
            donBtn.innerHTML = 'done'
            donBtn.addEventListener('click', () => {
                dl.append(li)
                mainDiv.removeChild(li)
	        })
            
            li.append(donBtn)
            li.append(delBtn)
            mainDiv.append(li)
            ul.insertBefore(mainDiv, ul.childNodes[0])
            dt.insertBefore(dl, dt.childNodes[0])
            
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




