let title = document.querySelector('h1')

/*
title.addEventListener('click', clicar_mouse)

function clicar_mouse(){
  console.log('você passou o mouse aqui')
}
*/

title.onclick = function(){
  console.log('você passou o mouse aqui')
}