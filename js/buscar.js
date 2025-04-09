const icon = document.querySelector(".icon");
const search = document.querySelector(".search");
const closeBtn = document.querySelector(".close-btn");
const searchInput = document.getElementById("search-input");
const productsSection = document.getElementById("products-section");

icon.onclick = function () {
  search.classList.toggle("active");
  searchInput.focus();
};

closeBtn.onclick = function () {
  search.classList.remove("active");
  searchInput.value = "";
  displayResults([]); // Clear the results when search is closed
};

searchInput.oninput = function () {
  const query = searchInput.value.toLowerCase();
  const products = document.querySelectorAll(".roupas");
  const results = [];

  products.forEach((product) => {
    const productName = product.querySelector("h4").innerText.toLowerCase();
    const productBrand = product.querySelector("h4 i").innerText.toLowerCase();
    if (productName.includes(query) || productBrand.includes(query)) {
      results.push(product);
    }
  });

  displayResults(results);
};

function displayResults(results) {
  productsSection.innerHTML = "";
  if (results.length === 0) {
    productsSection.innerHTML = "<p>No results found</p>";
    return;
  }
  results.forEach((item) => {
    productsSection.appendChild(item);
  });
}

document.getElementById("searchInput").addEventListener("input", function () {
  let filter = this.value.toLowerCase();
  let items = document.querySelectorAll(".roupas");

  items.forEach(function (item) {
    if (item.textContent.toLowerCase().includes(filter)) {
      item.classList.remove("hidden");
    } else {
      item.classList.add("hidden");
    }
  });
});
