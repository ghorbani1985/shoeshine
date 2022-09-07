let loadData = () => {
  let id = getParameterByName("id");
  let product = ProductHandler.getDataById(id);
  document.title = product.title;
  document.getElementById('productImage').src = product.image;
  document.getElementById('productTitle').innerText = product.title;
  document.getElementById('productOldPrice').innerText = product.oldPrice.toLocaleString('fa-IR') + ' تومان ';
  document.getElementById('productNewPrice').innerText = product.newPrice.toLocaleString('fa-IR') + ' تومان ';
  document.getElementById('productCategory').innerText = product.category;
  document.getElementById('productDescription').innerText = product.description;
}
let addToCart = () => {
  let id = getParameterByName('id');
  let product = ProductHandler.getDataById(id);
}