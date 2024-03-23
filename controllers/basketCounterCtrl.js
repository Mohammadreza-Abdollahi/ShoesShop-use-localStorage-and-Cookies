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
};
