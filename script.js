document.querySelector("#register").addEventListener("click", () => {
    alert("Website Dalam Perbaikan");
});

document.querySelector("#login").addEventListener("click", () => {
    alert("Website Dalam Perbaikan");
});

const genre = document.querySelector("#genre");

const movies = [
    "ACTION",
    "HORROR",
    "ROMANCE",
    "COMEDY"
];

let index = 0;

setInterval(() => {
    index++;

    if(index >= movies.length){
        index = 0;
    }

    genre.textContent = movies[index];

}, 4000);