class CartDB {
  static addToCart(data) {
    let dataList = this.load();
    if (dataList == undefined || dataList == null) {
      dataList = new Array();
    }
    let cartItem = new Cart(data.id, data.image, data.title, data.newPrice, 1);
    let oldData = dataList.find((value) => value!= null && value.id == cartItem.id);
    if (oldData != undefined && oldData != null) {
      oldData.qty++;
    } else {
      dataList.push(cartItem);
    }
    setCookie('basket', JSON.stringify(dataList), 30);
    alert('محصول' + cartItem.title + 'با موفقیت به سبد خرید افزوده شد.');
  }
  static load() {
    let str = getCookie('basket');
    if (str == '') return null;
    let dataList = JSON.parse(str);
    let result = [];
    dataList.forEach(element => {
    if(element != null){
        result.push(element);
    }
    });
    return result;
  }
  static increaseQTY(id){
        let dataList = this.load();
        if (dataList == undefined || dataList == null) {
          dataList = new Array();
        }
        let oldData = dataList.find((value) => value != null && value.id == id);
        if (oldData != undefined && oldData != null) {
          oldData.qty++;
          setCookie('basket', JSON.stringify(dataList), 30);
          return oldData.qty;
        } 
        return 0;
  }
  static decreaseQTY(id){
        let dataList = this.load();
        if (dataList == undefined || dataList == null) {
          dataList = new Array();
        }
        let oldData = dataList.find((value) => value != null && value.id == id);
        if (oldData != undefined && oldData != null) {
          oldData.qty--;
          if(oldData <= 0){
           let index = dataList.findIndex((value) => value != null && value.id == id);
           delete dataList[index];
          }
          setCookie('basket', JSON.stringify(dataList), 30);
          return oldData.qty;
        } 
        return 0;
  }
}