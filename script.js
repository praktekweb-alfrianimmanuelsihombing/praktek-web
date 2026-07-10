document.addEventListener("DOMContentLoaded", function () {
  const keywordInput = document.getElementById("keyword");
  const filterRadios = document.getElementsByName("filter");
  const books = document.querySelectorAll(".book");

  function searchBooks() {
    const keyword = keywordInput.value.toLowerCase();
    let filter = "title";

    filterRadios.forEach((radio) => {
      if (radio.checked) {
        filter = radio.value;
      }
    });

    books.forEach((book) => {
      const title = book.querySelector(".title").textContent.toLowerCase();
      const author = book.querySelector(".author").textContent.toLowerCase();
      const publisher = book.querySelector(".publisher").textContent.toLowerCase();

      let textToSearch = "";
      if (filter === "title") {
        textToSearch = title;
      } else if (filter === "author") {
        textToSearch = author;
      } else if (filter === "publisher") {
        textToSearch = publisher;
      }

      if (textToSearch.includes(keyword)) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  }

  keywordInput.addEventListener("keyup", searchBooks);

  filterRadios.forEach((radio) => {
    radio.addEventListener("change", searchBooks);
  });
});
