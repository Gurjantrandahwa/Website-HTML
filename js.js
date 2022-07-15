cursor = document.querySelector('.cursor')
navbar = document.querySelector('.navbar')
list = document.querySelector('.list')
btn1 = document.querySelector('.btn1')

cursor.addEventListener('click', () => {

    list.classList.toggle('v-class-resp')
    navbar.classList.toggle('navbar')

})