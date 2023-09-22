// const title = document.getElementsByTagName('h1')

// console.log(title);
// const title = document.querySelector('h1')
// console.log(title);
// const title = document.querySelectorAll('h1')
// console.log(document);
// title.textContent = 'magap'
// title.style.color = 'red'
// title.style.background = 'blue'
const block = document.querySelector('.block')
const link = document.querySelector('a')
link.addEventListener('click', function(e){
e.preventDefault()
})
// block.onclick = function(){
// block.style.background = 'red'
// }
block.addEventListener('click', function(){
block.style.background = 'blue'
})

block.addEventListener('dblclick', function(){
    block.style.background = 'red'
    })
    block.addEventListener('contextmenu', function(e){
        event.preventDefault()
        block.style.background = 'yellow'
        })
block.style.background = 'black'