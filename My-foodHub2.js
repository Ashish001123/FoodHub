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



document.addEventListener('DOMContentLoaded', function() {
    const testimonialCards = document.querySelectorAll('.testimonial-card');

    // Set a delay to animate each testimonial card
    testimonialCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('visible');
        }, index * 300); // stagger each card's appearance
    });
});
