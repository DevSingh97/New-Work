const menu = document.querySelector('#container');
const fullnav = document.querySelector('#fullnav');
const close = document.querySelector('#fclose');

menu.addEventListener('click', function(){
    fullnav.style.right ='0'
});

close.addEventListener('click',function(){
    fullnav.style.right = '-100%'
});
