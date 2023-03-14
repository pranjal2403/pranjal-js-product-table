let product = [];
let productId = [];

function validateProduct() {
  // collecting values
  let Id = document.getElementById("product__id").value;
  let name = document.getElementById("product__name").value;
  let price = document.getElementById("product__price").value;
  // validations
  let unvalid = document.getElementById("table__content");
  if (Id == "" || name == "" || price == "") {
    unvalid.innerHTML = "Please fill the fields";
    return;
  } else if (productId.includes(Id)) {
    unvalid.innerHTML = "Id is already in use";
    return;
  } else {
    product.push([Id, name, price]); //storing values
    productId.push(Id);
    unvalid.innerHTML = "";
    let table = "";
    for (item of product) {
      table +=
        "<tr> <td id='items'>" +
        item[0] +
        "</td><td>" +
        item[1] +
        "</td><td>USD " +
        item[2] +
        " </td> </tr>";
    }
    document.getElementById("table__result").innerHTML = table;
  }
}
