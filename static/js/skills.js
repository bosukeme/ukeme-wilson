var searchInput = document.querySelector("#search-input")

searchInput.addEventListener("keyup", function(e) {
  console.log(e.target.value)
  var search_item = e.target.value.toLowerCase()
  var span_items = document.querySelectorAll(".skills-box .bar-data span")

  

  span_items.forEach(function(item) {
    if (item.textContent.toLowerCase().indexOf(search_item) != -1) {
          item.closest("li").style.display = "block";
    }
    else {
      item.closest("li").style.display = "none";
    } 
  })
}
)