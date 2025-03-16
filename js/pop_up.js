const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.getElementById('close_pop_up');
const popUp = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUp.classList.add('open');
});

closePopUp.addEventListener('click', () =>{
    popUp.classList.remove('open');
});