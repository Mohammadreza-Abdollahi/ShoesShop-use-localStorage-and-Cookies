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
  const template = document.getElementById("basket-template");
  let holder = document.getElementById("basket-holder");
  if (BasketDB.load() == null || BasketDB.load()[0] == null) {
    const emtyErr = document.getElementById("basket-empty");
    const basketTable = document.getElementById("basket-table");
    basketTable.style.display = "none";
    emtyErr.style.display = "block";
  } else {
    const emtyErr = document.getElementById("basket-empty");
    const basketTable = document.getElementById("basket-table");
    basketTable.style.display = "";
    emtyErr.style.display = "none";
    BasketDB.load().forEach((item, index) => {
      if (item != null) {
        let currentItem =
          "<tr id='row" + item.id + "'><td>" + item.id + "</td>";
        currentItem +=
          "<td><img class='basket-img' src='" + item.image + "' alt='' /></td>";
        currentItem += "<td>" + item.productName + "</td>";
        currentItem += "<td>" + item.price + "</td>";
        currentItem +=
          "<td><button><i class='fa-solid fa-circle-plus qty-plus' onclick='increaseQTY(" +
          item.id +
          ")'></i></button><span id='qty" +
          item.id +
          "'>" +
          item.qty +
          "</span><button><i class='fa-solid fa-circle-minus qty-minus' onclick='decreaseQTY(" +
          item.id +
          ")'></i></button></td>";
        holder.innerHTML = holder.innerHTML + currentItem;
      }
    });
  }
};
function increaseQTY(id) {
  let result = BasketDB.increase(id);
  if (result > 0) {
    document.getElementById("qty" + id).innerText = result;
  }
}
function decreaseQTY(id) {
  let result = BasketDB.decrease(id);
  if (result > 0) {
    document.getElementById("qty" + id).innerText = result;
  }
  if (result <= 0) {
    document.getElementById("row" + id).remove();
  }
  if (BasketDB.load() == null || BasketDB.load()[0] == null) {
    const emtyErr = document.getElementById("basket-empty");
    const basketTable = document.getElementById("basket-table");
    basketTable.style.display = "none";
    emtyErr.style.display = "block";
  }
  location.href = location.href;
}
/*
<tr>
        <td>__ID__</td>
        <td><img class="basket-img" src="__SRC__" alt="" /></td>
        <td>__NAME__</td>
        <td>__PRICE__</td>
        <td>__QTY__</td>
      </tr>
*/
