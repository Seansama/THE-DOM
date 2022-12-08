/*
let titles = document.getElementsByClassName(`title`);

console.log(Array.isArray(titles))
console.log(Array.isArray(Array.from(titles)))

Array.from(titles).forEach(function (item) {
    console.log(item)
})
*/
const wmf = document.querySelector(`#book-list li:nth-child(2) .name`)
//console.log(wmf)
let books = document.querySelector(`book-list li .name`)
//console.log(`books`)

books = document.querySelectorAll(`#book-list li .name`)
console.log(books)
Array.from(books).forEach(function (book) {
    console.log(book)
})