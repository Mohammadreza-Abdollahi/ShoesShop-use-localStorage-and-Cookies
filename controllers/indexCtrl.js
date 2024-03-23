window.addEventListener("load", () => {
  const template = document.getElementById("product-template");
  let holder = document.getElementById("product");
  DataBase.getData().forEach((item, index) => {
    if (index < 6) {
      let currentItem = template.innerHTML;
      currentItem = currentItem.replace("__ID__", item.id);
      currentItem = currentItem.replace("__IMAGE__", item.image);
      currentItem = currentItem.replace("__NAME__", item.productName);
      currentItem = currentItem.replace("__PRICE__", item.price);
      currentItem = currentItem.replace("__USAGE__", item.usage);
      holder.innerHTML = currentItem + holder.innerHTML;
    }
  });
});
