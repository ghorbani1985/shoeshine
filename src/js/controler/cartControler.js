let nullCartMsg = document.getElementById('nullCartMsg');
let itemsContainer = document.getElementById('itemsContainer');
let loadData = () => {
  let template = document.getElementById('itemsTemplate').innerHTML;
  let holder = document.getElementById('cartItems');
  let dataList = CartDB.load();
  if (dataList == null || dataList.length == 0) {
    nullCartMsg.classList.remove('hidden');
    itemsContainer.classList.add('hidden');
    return;
  }
  holder.innerHTML = '';
  sumPriceInvoice = 0;
  dataList.forEach((cart, index) => {
    if (cart != null && cart.qty > 0) {
      let currentProduct = template;
      let sumPrice = cart.newPrice * cart.qty;
      currentProduct = currentProduct.replace(/__ID__/g, cart.id);
      currentProduct = currentProduct.replace(/__IMAGE__/g, cart.image);
      currentProduct = currentProduct.replace(/__TITLE__/g, cart.title);
      currentProduct = currentProduct.replace(/__PRICE__/g, cart.newPrice.toLocaleString('fa-IR'));
      currentProduct = currentProduct.replace(/__QTY__/g, cart.qty);
      currentProduct = currentProduct.replace(/__SUMPRICE__/g, sumPrice.toLocaleString('fa-IR'));
      holder.innerHTML = currentProduct + holder.innerHTML;
      sumPriceInvoice += sumPrice;
      document.getElementById('sumPriceInvoice').innerText = sumPriceInvoice.toLocaleString('fa-IR') + " تومان ";
      document.getElementById('sumPricePost').innerText = (sumPriceInvoice + 20000).toLocaleString('fa-IR') + ' تومان ';
    }
  
  });
};
increaseQTY = (id) => {
  let result = CartDB.increaseQTY(id);
  if (result > 0) {
    document.getElementById('qty_' + id).innerText = result;
     location.href = location.href;
  }
};
decreaseQTY = (id) => {
  let result = CartDB.decreaseQTY(id);
  if (result > 0) {
    document.getElementById('qty_' + id).innerText = result;
     location.href = location.href;
  } else {
    document.getElementById('decIncItems' + id).remove();
    let now = new Date();
    let time = now.getTime();
   document.cookie = 'cookie=basket;expires=' + time.toUTCString() + ';path=/';
    location.href = location.href;
  } 
};
