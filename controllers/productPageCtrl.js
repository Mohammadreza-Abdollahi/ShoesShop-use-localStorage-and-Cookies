window.onload = () => {
  let basket = BasketDB.load();
  let count;
  if (basket == null) {
    count = 0;
  } else {
    count = basket.length;
  }
  if (count > 0) {
    document.getElementById("basket-counter").innerText = count;
  } else {
    document.getElementById("basket-counter").style.display = "none";
  }
  let productId = getParameterByName("id");
  let currentProduct = DataBase.getData().find(
    (product) => product.id == productId
  );
  let template = document.getElementById("product-page-template").innerHTML;
  let productHolder = document.getElementById("product-holder");
  template = template.replace("__SRC__", currentProduct.image);
  template = template.replace("__NAME__", currentProduct.productName);
  template = template.replace("__USAGE__", currentProduct.usage);
  template = template.replace("__CAPTION__", currentProduct.caption);
  template = template.replace("__PRICE__", currentProduct.price);
  productHolder.innerHTML = productHolder.innerHTML + template;
};
function addToBasket() {
  Swal.fire({
    position: "top-end",
    icon: "success",
    title: "Product Added to Cart",
    showConfirmButton: false,
    timer: 1500,
  });
  let productId = getParameterByName("id");
  let currentProduct = DataBase.getData().find(
    (product) => product.id == productId
  );
  BasketDB.addToBasket(currentProduct);
  setTimeout(reLoad, 1500);
}
function reLoad() {
  location.href = location.href;
}
