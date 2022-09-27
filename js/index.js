// ITERATION 1
//En este caso el price está en string, no está en número ->
//Por eso tenemos que utilizar un método que nos pase de String a Number para poder multiplicarlo.
//Este método es el parseInt().

//No podemos utilizar el querySelectorAll porque se nos crearía una Array.

function updateSubtotal(product) {
  const price = product.querySelector('.price span').innerText; //Para coger el texto del span. El innerHTML l'utilitzariem per poder substituir-lo.
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerText = parseInt(price) * quantity;
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //Aquí tenemos que hacer que el Subtotal se aplique para todos los productos.
  //No podemos acceder a variables que estén dentro de otra función y, por tanto, tenemos que volver a crearlas.
  //Con el querySelectorAll nos creará una array con los productos y tendremos que correr la array:
  let products = document.querySelectorAll('.product');

  //Este for pasaremos por todos y cada uno de los productos del Array.
  //Que este array está formado por los productos dentro del nodo "product". En este momento -> 2 productos.
  //Es una función que necesita un argumento ->
  for (let i = 0; i < products.length; i++) {
    updateSubtotal(products[i]); //llamamos la función
  }

  // ITERATION 3
  //Aquí he de tornar a cridar la funció per tenir els preus i les quantitats actualitzades.
  let total = 0;
  products = document.querySelectorAll('.product'); //Per actualitzar el preu del subtotal.
  for (let i = 0; i < products.length; i++) {
    let subtotal = products[i].querySelector('.subtotal span');
    total += Number(subtotal.innerText); //Cada vegada que dona una volta suma a l'anterior producte.
  }

  document.querySelector('#total-value span').innerHTML = total;
}


// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
