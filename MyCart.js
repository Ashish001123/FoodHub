function addToCart(name, price, img) {
    const cartData = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cartData.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartData.push({ name, price, img, quantity: 1 });
    }
    localStorage.setItem('cart', JSON.stringify(cartData));
    GoToCart();  
}
let riders = [
    { name: "John Doe", age: 28, location: "New York" },
    { name: "Jane Smith", age: 32, location: "California" },
    { name: "Mike Johnson", age: 25, location: "Texas" }
];
function orderNow() {
    openModal();
    loadRiders();
}
function openModal() {
    document.getElementById("rider-modal").style.display = "flex";
}
function closeModal() {
    document.getElementById("rider-modal").style.display = "none";
}
function loadRiders() {
    const riderContainer = document.getElementById("MyRiders");
    riderContainer.innerHTML = ""; 

    riders.forEach(rider => {
        const riderDiv = document.createElement("div");
        riderDiv.classList.add("Rider-flex");

        riderDiv.innerHTML = `
            <div class="Rider-details">
                <img src="path/to/rider-image.jpg" alt="${rider.name}" class="rider-img">
            </div>
            <div class="Rider-details-flex">
                <h2>${rider.name}</h2>
                <h3>Age: ${rider.age}</h3>
                <h4>Location: ${rider.location}</h4>
                <button class="select-btn" onclick="selectRider('${rider.name}')">Select</button>
            </div>
        `;
        riderContainer.appendChild(riderDiv);
    });
}
let selectedRider = null;
function selectRider(riderName) {
    selectedRider = riderName;
    alert(`${riderName} has been selected.`);
}
function confirmRider() {
    if (!selectedRider) {
        alert("Please select a rider before confirming the order.");
        return;
    }
    alert(`Your order has been confirmed with ${selectedRider}.`);
    window.location.href = "payment.html";
    closeModal();
}











