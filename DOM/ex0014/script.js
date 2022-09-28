/*

let element = document.querySelector('body')

console.log(element.children)

console.log(element.firstChild)
console.log(element.firstElementChild)

console.log(element.lastChild)
console.log(element.lastElementChild)

*/

/*

let div = document.createElement('div')
div.innerText = "Olá"

let body = document.querySelector('body')
body.append(div)
body.prepend(div)

*/

let div = document.createElement('div')
div.innerText = "Olá"

let body = document.querySelector('body')
let header = body.querySelector('header')

body.insertBefore(div, header)