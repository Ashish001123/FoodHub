const OrderOnline = document.getElementById('Order-Online');
const OrderOnline2 = document.getElementById('Order-Online2');
const Menu = document.getElementById('Menu');
const MyMenu = document.getElementById('Restaurant-Menu');
const Riders = document.getElementById('Riders');
const MyRiders = document.getElementById('MyRiders')
const Cart = document.getElementById('My-cart');
let MyCart = 0;
const AddToCart = document.getElementById('AddToCart');
const ClickBiryani = document.getElementById('ClickBiryani');
const Biryani = document.getElementById('Biryani');
const Burgers = document.getElementById('Burgers');
const ClickBurger = document.getElementById('ClickBurger');
const ClickLunch = document.getElementById('ClickLunch');
const Lunch = document.getElementById('Lunch');
const ClickDimsumNonVeg = document.getElementById('ClickDimsumNonVeg');
const DimsumNomVeg = document.getElementById('DimsumNonVeg');



function AddBorder(elementId)
{
   OrderOnline.style.borderBottom = 'none';
   Menu.style.borderBottom = 'none';
   Riders.style.borderBottom = 'none';

   document.getElementById(elementId).style.borderBottom = '5px solid red';
}

ClickBiryani.addEventListener('click', () => {
   Biryani.style.display = 'block';
   Burgers.style.display = 'none';
   Lunch.style.display = 'none';
   Pizza.style.display = 'none';
   DimsumNomVeg.style.display = 'none';

})

ClickBurger.addEventListener('click', () =>{
   Biryani.style.display = 'none';
   Burgers.style.display = 'Block';
   Lunch.style.display = 'none';
   Pizza.style.display = 'none';
   DimsumNomVeg.style.display = 'none';

})

ClickLunch.addEventListener('click' , () => {
   Lunch.style.display = 'block';
   Biryani.style.display = 'none';
   Burgers.style.display = 'none';
   Pizza.style.display = 'none';
   DimsumNomVeg.style.display = 'none';

})

ClickPizza.addEventListener('click' , () => {
   Lunch.style.display = 'none';
   Biryani.style.display = 'none';
   Burgers.style.display = 'none';
   Pizza.style.display = 'block';
   DimsumNomVeg.style.display = 'none';

})

ClickDimsumNonVeg.addEventListener('click' , () => {
   Lunch.style.display = 'none';
   Biryani.style.display = 'none';
   Burgers.style.display = 'none';
   Pizza.style.display = 'none';
   DimsumNomVeg.style.display = 'block';
})

Menu.addEventListener('click' , () =>{
   MyMenu.style.display = 'block';
   OrderOnline2.style.display = 'none';
   MyRiders.style.display = 'none';
})
OrderOnline.addEventListener('click',()=>{
   MyMenu.style.display = 'none';
   OrderOnline2.style.display = 'block';
   OrderOnline2.style.display = 'flex';
   MyRiders.style.display = 'none';
})
Riders.addEventListener('click',()=>{
   MyRiders.style.display = 'block';
   MyMenu.style.display = 'none';
   OrderOnline2.style.display = 'none';
})



let cartItemCount = 0;

function GoToCart(itemName, itemPrice) {
    cartItemCount += 1;  // Increment the cart item count
    updateCartDisplay();  // Update the display in navbar
}

function updateCartDisplay() {
    const cartCountElement = document.getElementById('cart-count');
    cartCountElement.textContent = `${cartItemCount} items`;  // Update the cart count display
}