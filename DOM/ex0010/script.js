//setAttribute and removeAttribute

let title = document.querySelector('h1')
title.setAttribute('id', 'h1')

let titleID = document.querySelector('#h1')

console.log(titleID)

titleID.removeAttribute('id')
console.log(titleID)