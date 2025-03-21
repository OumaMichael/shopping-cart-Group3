let cart = [];


const addButtons = document.querySelectorAll('.add-to-cart');


addButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const product = button.parentElement;
    const name = product.querySelector('h2').textContent; 
    const price = parseFloat(product.querySelector('p:last-of-type').textContent.replace('KSH.', '')); 

    addToCart(name, price); 
    updateCart(); 
  });
});


function addToCart(name, price) {
  const item = cart.find(product => product.name === name);
  if (item) {
    item.qty++; 
    item.total = item.qty * item.price; 
  } else {
    cart.push({ name: name, price: price, qty: 1, total: price }); 
  }
}


function updateCart() {
  const cartItems = document.getElementById('cart-items'); 
  cartItems.innerHTML = ''; 

  cart.forEach((item, index) => {
    const row = document.createElement('tr'); 

    row.innerHTML = `
      <td>${index + 1}</td>
      <td>${item.name}</td>
      <td>KSH.${item.price}</td>
      <td>${item.qty}</td>
      <td>KSH.${item.total}</td>
      <td><button onclick="removeFromCart(${index})">X</button></td>
    `;

    cartItems.appendChild(row); 
  });
}


function removeFromCart(index) {
  cart.splice(index, 1); 
  updateCart(); 
}
