const checkBtns = document.querySelectorAll('.check')
const checkImgs = document.querySelectorAll('.check-img')
const checks = document.querySelectorAll('.check')
const toDoList = document.querySelector('.to-do-list')
const todoTasks = document.querySelector('.to-do-tasks')
const addATask = document.querySelector('.add-a-task')
const input = document.querySelector(".input")
const number = document.querySelector('#number')
const allNumber = document.querySelector('#all-number')
const activeNumber = document.querySelector('#active-number')
const completedNumber = document.querySelector('#completed-number')
const clearCompletedBtn = document.querySelector('.clear-completed')
const allBtn = document.querySelector('.all')
const activeBtn = document.querySelector('.active')
const completedBtn = document.querySelector('.completed')
const hero = document.querySelector('.hero')
const items = document.querySelector('#items')

function setLocalStorage(){
    let localKey = 'newTask'
    let localValue = todoTasks.innerHTML
    localStorage.setItem(localKey, localValue)
    let allNumberLS = 'allNumber'
    let allNumberLSV = allNumber.innerHTML
    localStorage.setItem(allNumberLS, allNumberLSV)
    let activeNumberLS = 'activeNumber'
    let activeNumberLSV = activeNumber.innerHTML
    localStorage.setItem(activeNumberLS, activeNumberLSV)
    let completedNumberLS = 'completedNumber'
    let completedNumberLSV = completedNumber.innerHTML
    localStorage.setItem(completedNumberLS, completedNumberLSV)
    let numberLS = 'leftNumber'
    let numberLSV = number.innerHTML
    localStorage.setItem(numberLS, numberLSV)
}

addATask.addEventListener('submit', () =>{
event.preventDefault()
    if(input.value.length > 0){
        const newTask = document.createElement('div')
        newTask.classList.add('task')
        const newBtn = document.createElement('button')
        newBtn.classList.add('check')
        const newImg = document.createElement('img')
        newImg.classList.add('check-img')
        newImg.classList.add('hidden')
        newImg.src = "images/icon-check.svg"
        const newText = document.createElement('p')
    
        todoTasks.appendChild(newTask)
        newTask.appendChild(newBtn)
        newBtn.appendChild(newImg)
        newTask.appendChild(newText)
        newText.innerHTML = input.value
        input.value = ''
        number.innerHTML = parseInt(number.innerHTML) + 1
        allNumber.innerHTML = parseInt(allNumber.innerHTML) + 1
        activeNumber.innerHTML = parseInt(activeNumber.innerHTML) + 1
        itemChange()
        setLocalStorage()
    }
})

hero.addEventListener('click', (event) =>{
    const target = event.target.closest('.task')
    if(event.target.classList.contains('check') || event.target.classList.contains('check-img')) {
        target.querySelector('.check').classList.toggle('checked');
        target.querySelector('.check-img').classList.toggle('hidden');
        target.querySelector('p').classList.toggle('line-through');
        if(event.target.classList.contains('checked')){
            number.innerHTML = parseInt(number.innerHTML) - 1
            activeNumber.innerHTML = parseInt(activeNumber.innerHTML) - 1
            completedNumber.innerHTML = parseInt(completedNumber.innerHTML) + 1
            setLocalStorage()
        }else{
            number.innerHTML = parseInt(number.innerHTML) + 1
            activeNumber.innerHTML = parseInt(activeNumber.innerHTML) + 1
            completedNumber.innerHTML = parseInt(completedNumber.innerHTML) - 1
            setLocalStorage()
        }
        itemChange()
    }
    if(event.target.classList.contains('clear-completed')){
        const tasks = document.querySelectorAll('.task')
        tasks.forEach(task =>{
            if(task.childNodes[0].classList.contains('check') && task.childNodes[0].classList.contains('checked')){
                task.classList.add('hidden')
                setLocalStorage()
            }
        })
    }
    if(event.target.classList.contains('completed')){
        const tasks = document.querySelectorAll('.task')
        tasks.forEach(task =>{
            if(task.childNodes[0].classList.contains('check') && task.childNodes[0].classList.contains('checked')){
                task.classList.remove('hidden')
            }
            else(
                task.classList.add('hidden')
            )
        })
    }
    if(event.target.classList.contains('active')){
        const tasks = document.querySelectorAll('.task')
        tasks.forEach(task =>{
            if(task.childNodes[0].classList.contains('check') && task.childNodes[0].classList.contains('checked')){
                task.classList.add('hidden')
            }
            else(
                task.classList.remove('hidden')
            )
        })
    }
    if(event.target.classList.contains('all')){
        const tasks = document.querySelectorAll('.task')
        tasks.forEach(task =>{
           task.classList.remove('hidden')
        })
    }
})

function itemChange(){
    if(number.innerHTML === '1'){
        items.innerHTML = 'item'
    }
    else{
        items.innerHTML = 'items'
    }
}

let getLocalKey = localStorage.getItem('newTask')
let getAllNumber = localStorage.getItem('allNumber')
let getActiveNumber = localStorage.getItem('activeNumber')
let getCompletedNumber = localStorage.getItem('completedNumber')
let getLeftNumber = localStorage.getItem('leftNumber')
    if(getLocalKey && getAllNumber && getActiveNumber && getCompletedNumber && getLeftNumber){
        todoTasks.innerHTML = getLocalKey
        allNumber.innerHTML = getAllNumber
        activeNumber.innerHTML = getActiveNumber
        completedNumber.innerHTML = getCompletedNumber
        number.innerHTML = getLeftNumber
    }