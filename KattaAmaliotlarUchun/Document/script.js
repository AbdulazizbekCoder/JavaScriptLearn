const p = document.querySelector('p')


console.log(p.getAttribute('class'));

p.setAttribute('style', 'color: yellow')


function h2(){
    p.setAttribute('class', 'h2')
}

function text(){
    p.setAttribute('class', 'text')
}