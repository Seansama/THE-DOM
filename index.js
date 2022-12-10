
//PreventDefault event
const link = document.querySelector(`#page-banner a`)

link.addEventListener(`click`, function (e) {
    e.preventDefault();
    console.log(`navigation to `, e.target.textContent, `was prevented`)
    
})

//Delete button functionality using event bubbling
const list = document.querySelector(`#book-list ul`)
list.addEventListener(`click`, function (e) {
    if(e.target.className === `delete`){
        const  li = e.target.parentElement;
        list.removeChild(li)
    }

})

//interacting with forms
const addForm = document.forms[`add-book`]
addForm.addEventListener(`submit`, function (e) {
    e.preventDefault();
    const value = addForm.querySelector(`input[type='text']`).value
    //console.log(value)

    //create Elements
    const li =document.createElement(`li`);
    const bookName = document.createElement(`span`)
    const deleteBtn = document.createElement(`span`)

    deleteBtn.textContent = 'delete';
    bookName.textContent = value;

    //add classes
    bookName.classList.add('name')
    deleteBtn.classList.add('delete')

    //append to DOM
    li.appendChild(bookName)
    li.appendChild(deleteBtn)
    list.appendChild(li)

})

//Hide checkbox and change events
const hideBox = document.querySelector(`#Hide`)
hideBox.addEventListener(`change`, function (e) {
    if(hideBox.checked){
        list.style.display = `none`;
    }
    else{
        list.style.display = `initial`;
    }

})

//Filter searched books
const searchBar = document.forms[`search-books`].querySelector(`input`)
searchBar.addEventListener(`keyup`, function (e) {
    const term = e.target.value.toLowerCase()
    const books = list.getElementsByTagName(`li`)
    Array.from(books).forEach(function (book) {
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !== -1){
book.style.display = 'block';
        }
        else{
            book.style.display = 'none'
        }
        
    })

})


