const MyCaffee = document.getElementById('My-Caffee');
const Caffee = document.getElementById('Caffee');
const Restraunt = document.getElementById('Restaurant');
const AllRest = document.getElementById('All');
const Veg = document.getElementById('Veg-only');
const VegCont = document.getElementById('Veg-cont');

MyCaffee.addEventListener('click', ()=>{
    Caffee.style.display = 'block';
    Restraunt.style.display = 'none';
    VegCont.style.display = 'none';
})
AllRest.addEventListener('click', ()=>{
    Caffee.style.display = 'none';
    Restraunt.style.display = 'block';
    VegCont.style.display = 'none';
})
Veg.addEventListener('click', ()=>{
    VegCont.style.display = 'block';
    Caffee.style.display = 'none';
    Restraunt.style.display = 'none';
})

function openModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

// Close the modal if the user clicks anywhere outside of it
window.onclick = function(event) {
    const modal = document.getElementById('modal');
    if (event.target === modal) {
        closeModal();
    }
}
