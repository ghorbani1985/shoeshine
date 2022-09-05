let loadData = () => {
  let template = document.getElementById("productItemTemplate").innerHTML;
  let holder = document.getElementById('newProducts');
  ProductHandler.getData().forEach((product,index) => {
      let currentProduct = template;
      currentProduct = currentProduct.replace('__ID__', product.id);
     currentProduct = currentProduct.replace('__IMAGE__', product.image);
      currentProduct = currentProduct.replace('__TITLE__', product.title);
      currentProduct = currentProduct.replace('__OLDPRICE__', product.oldPrice.toLocaleString('fa-IR'));
      currentProduct = currentProduct.replace('__NEWPRICE__', product.newPrice.toLocaleString('fa-IR'));
      currentProduct = currentProduct.replace('__CATEGORY__', product.category);
      holder.innerHTML = currentProduct + holder.innerHTML;
  });
}
