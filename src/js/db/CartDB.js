class CartDB {
    static addToCart(data){
        let dataList = load();
        dataList.push(data);
        setCookie('basket', JSON.stringify(dataList), 30);
    }
    static load (){
        let str = getCookie('basket');
        return JSON.parse(str);
    }
}