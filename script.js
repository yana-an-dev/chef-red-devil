"use strict"
// Selectors
const chats = document.querySelector('.header__chats')

window.addEventListener('load', () => {
    setTimeout(() => (client1()), 1000)
    setTimeout(() => (chef1()), 2000)
    setTimeout(() => (client2()), 3000)
    setTimeout(() => (chef2()), 4000)
})

// Creating Chat boxes for chef and clients

function chef1() {
    const div = document.createElement('div')
    const img = document.createElement('img')
    const p = document.createElement('p')
    div.classList.add('chat--chef')
    img.src = 'assets/chef-profile.jpg'
    p.innerText = 'No worries! I will cook you wonderful and tasty food!!'
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
    p.innerText = 'Need a delicious food for my family function'
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
    p.innerText = 'Lorem ipsum dolor emit exect...'
    img.classList.add('chat__avatar')
    div.appendChild(img)
    div.appendChild(p)
    chats.appendChild(div)
}
