"use strict"
// Selectors
const chats = document.querySelector('.chatbubble__chats')

window.addEventListener('load', () => {
    setTimeout(() => (client1()), 1000)
    setTimeout(() => (chef1()), 2000)
    setTimeout(() => (client2()), 3000)
    // setTimeout(() => (chef2()), 4000)
})

// Creating Chat boxes for chef and clients

function chef1() {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    div.classList.add('chat--chef')
    img.src = 'assets/chef-profile.jpg'
    p.innerText = 'How can I recreate that restaurant atmosphere in my own home?'
    img.classList.add('chat__avatar')
    div.appendChild(img)
    div.appendChild(p)
    chats.appendChild(div)
}

function client1() {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    div.classList.add('chat--client')
    img.src = 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    p.innerText = 'I would love someone to cook for me!'
    img.classList.add('chat__avatar')
    div.appendChild(img)
    div.appendChild(p)
    chats.appendChild(div)
}

function chef2() {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    div.classList.add('chat--chef')
    img.src = 'assets/chef-profile.jpg'
    p.innerText = 'Lorem ipsum dolor emit...'
    img.classList.add('chat__avatar')
    div.appendChild(img)
    div.appendChild(p)
    chats.appendChild(div)
}

function client2() {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    div.classList.add('chat--client')
    img.src = 'https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlciUyMHByb2ZpbGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    p.innerText = 'I have a big event coming up...I don\'t want to cook all the food. What should I do?'
    img.classList.add('chat__avatar')
    div.appendChild(img)
    div.appendChild(p)
    chats.appendChild(div)
}


const menuBtnOne = document.getElementById('menu__one')
menuBtnOne.addEventListener('click', () => {
    classList.add('detail')
})