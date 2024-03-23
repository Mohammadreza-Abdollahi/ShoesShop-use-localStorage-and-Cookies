class Basket{
    static cookiesList = new Array();

    static addCookie(product){
        this.cookiesList.push(product);
    };

    static getCookieList(){
        return this.cookiesList;
    };
};