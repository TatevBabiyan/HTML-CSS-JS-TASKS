const products = [
  { name: "Product 1", category: "home", tags: ["new"] },
  { name: "Product 2", category: "apparel", tags: ["sale"] },
  { name: "Product 3", category: "electronics", tags: ["eco-friendly", "new"] },
];

function renderProductListings(categoryFilter, tagFilters) {
  const productListings = document.getElementById("productListings");
  productListings.innerHTML = "";

  const filteredProducts = products.filter(product => {
    const categoryMatch = categoryFilter === "all" || product.category === categoryFilter;

    const tagMatches = tagFilters.every(tag => product.tags.includes(tag));

    return categoryMatch && tagMatches;
  });

  if (filteredProducts.length === 0) {
    productListings.innerHTML = "<p>No products found.</p>";
  } else {
    filteredProducts.forEach(product => {
      const productItem = document.createElement("div");
      productItem.textContent = product.name;
      productListings.appendChild(productItem);
    });
  }
}


document.getElementById("category").addEventListener("change", function() {
  const categoryFilter = this.value;
  const tagFilters = Array.from(document.querySelectorAll("#tags input:checked")).map(input => input.value);
  renderProductListings(categoryFilter, tagFilters);
});

document.querySelectorAll("#tags input").forEach(input => {
  input.addEventListener("change", function() {
    const categoryFilter = document.getElementById("category").value;
    const tagFilters = Array.from(document.querySelectorAll("#tags input:checked")).map(input => input.value);
    renderProductListings(categoryFilter, tagFilters);
  });
});

renderProductListings("all", []);
