class BasketDB {
  static addToBasket(data) {
    let basketList = this.load();
    if (basketList == undefined || basketList == null) {
      basketList = new Array();
    }
    let basketItem = new BasketGenerator(
      data.productName,
      data.image,
      data.price,
      data.id,
      1
    );
    basketItem.caption = "";
    let oldData = basketList.find((p) => p.id == basketItem.id);
    if (oldData != undefined || oldData != null) {
      oldData.qty++;
    } else {
      basketList.push(basketItem);
    }
    setCookie("basket", JSON.stringify(basketList), 30);
  }
  static load() {
    let str = getCookie("basket");
    if (str == "" || str == null) return null;
    let basketList = JSON.parse(str);
    let finalList = new Array();
    basketList.forEach((p) => {
      if (p != null) {
        finalList.push(p);
      }
    });
    return finalList;
  }
  static increase(id) {
    let basketList = this.load();
    if (basketList == undefined || basketList == null) {
      basketList = new Array();
    }
    let oldData = basketList.find((p) => p.id == id);
    if (oldData != undefined || oldData != null) {
      oldData.qty++;
      setCookie("basket", JSON.stringify(basketList), 30);
      return oldData.qty;
    }
    return 0;
  }
  static decrease(id) {
    let basketList = this.load();
    if (basketList == undefined || basketList == null) {
      basketList = new Array();
    }
    let oldData = basketList.find((p) => p.id == id);
    if (oldData != undefined || oldData != null) {
      oldData.qty--;
      if (oldData.qty <= 0) {
        let index = basketList.findIndex((p) => p.id == id);
        delete basketList[index];
      }
      setCookie("basket", JSON.stringify(basketList), 30);
      return oldData.qty;
    }
    return 0;
  }
}
