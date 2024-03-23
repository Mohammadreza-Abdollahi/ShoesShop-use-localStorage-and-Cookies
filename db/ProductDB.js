class DataBase {
  static postData(data) {
    localStorage.setItem("data", JSON.stringify(data));
  }
  static getData() {
    return JSON.parse(localStorage.getItem("data"));
  }
}