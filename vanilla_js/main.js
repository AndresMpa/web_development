class Product {
  constructor(productName, dateRegistered, productPrice) {
    this.name = productName;
    this.date = dateRegistered;
    this.price = productPrice;
  }
}

class UI {
  addProduct(product) {
    const productList = document.getElementById("productList");
    const element = document.createElement("div");
    element.innerHTML = `
    <div class="card text-center mt-3">
      <div class"card-body m-5">
        <strong>Product:</strong> ${product.name}, <strong>Price:</strong> ${product.price} $ / <strong>Uploaded: </strong>${product.date}
        <a class="btn btn-danger" name="delete">Delete</a>
      </div>
    </div>
    `;
    productList.appendChild(element);
    this.reset();
    this.alert("You added a product correctly", "success")
  }

  removeProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.alert("You removed a product...", "danger");
    }
  }

  alert(msg, cssType) {
    const msgDiv = document.createElement("div");
    msgDiv.className = `alert alert-${cssType} mt-3`;
    msgDiv.appendChild(document.createTextNode(msg));
    //document.querySelectorAll(".container");
    const container = document.querySelector(".container");
    const app = document.querySelector("#App");
    container.insertBefore(msgDiv, app);
    setTimeout(function() {
      document.querySelector(".alert").remove();
    }, 3000)
  }

  reset() {
    document.getElementById("productForm").reset();
  }
}

// Events
document
  .getElementById("productForm")
  .addEventListener("submit", function (event) {
    const name = document.getElementById("productName").value;
    const date = document.getElementById("dateRegistered").value;
    const price = document.getElementById("productPrice").value;
    //console.log(price, name, date);

    const product = new Product(name, date, price);
    const ui = new UI();
    ui.addProduct(product);

    //console.log(product);

    event.preventDefault();
  });

document
  .getElementById("productList")
  .addEventListener("click", function (event) {
    const ui = new UI();
    ui.removeProduct(event.target);
  });
