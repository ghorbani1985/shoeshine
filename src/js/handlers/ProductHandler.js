class ProductHandler{
    static dataList = new Array();
    static addData(product) {
     this.dataList.push(product);
    }
    static setData(list) {
    for(let data of list){
        this.dataList.push(data);
    }
    }
    static getData() {
        return this.dataList;
    }
    static getDataById(id) {
        return this.dataList.find((value) =>  value.id == id);
    }
    static createData(){
        let list = new Array();
        for(let index =1; index <= 12; index++){
            let product = new Product(
              index,
              'http://127.0.0.1:5501/assets/images/' + index + '.jpg',
              ' روزمره مردانه کروماکی مدل km' + index,
              this.getRandom(450000, 700000),
              this.getRandom(250000, 300000),
              'کفش',
              'کفش روزمره مردانه',
            );
            list.push(product);
        }
        return list;
    }
    static getRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1000) + min);
    }
}