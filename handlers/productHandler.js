class ProductHandler{
    static dataList = new Array();

    static addData(product){
        this.dataList.push(product);
        DataBase.postData(this.dataList);
    };

    // static getDataList(){
    //     return this.dataList;
    // };
};