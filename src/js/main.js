let mainNavUl = document.querySelector('#MainNavUl');
let mobileNavIcon = document.querySelector('#MobileNavIcon');
let mainNav = document.querySelector('#MainNav');
let mainLogo = document.querySelector('#MainLogo');
mobileNavIcon.addEventListener('click', () => {
  mainNav.classList.toggle('hidden');
  mainNavUl.classList.toggle('flex-col');
  mainNavUl.classList.toggle('items-center');
  mainLogo.classList.toggle('hidden');
});
window.onload = function (){
  let dataList = ProductDB.load();
  if (dataList == null) {
    dataList = ProductHandler.createData();
    ProductDB.save(dataList);
  }
  ProductHandler.setData(dataList);
  loadData();
}
getParameterByName = (name, url = window.location.href) => {
  name = name.replace(/[\[\]]/g, '\\$&');
  var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
    results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, ' '));
}