let myLibrary = [];

function Book(name, author, genre, numOfPages) {
    this.name = name;
    this.author = author;
    this.genre = genre;
    this.numOfPages = numOfPages;
}


const harryPotter = new Book(
    "Harry Potter and the Philosopher's Stone",
    "J.K. Rowling",
    "Fantasy",
    223
);

const lotr = new Book(
    "Lord Of The Rings: The Fellowhsip Of The Ring",
    "J.R.R. Tolkein",
    "Fantasy",
    423
);

const geronimoStilton = new Book(
    "Geronimo Stilton: Lost Treasure of the Emerald Eye",
    "Elisabetta Dami",
    "Adventure",
    128
);

addBookToLibrary(harryPotter);
addBookToLibrary(lotr);
addBookToLibrary(geronimoStilton);

printLibrary();

function addBookToLibrary(book) {
    myLibrary.push(book);
}

function printLibrary() {
    document.querySelector('#library').innerHTML = '';

    for (let i = 0; i < myLibrary.length; i++) {
        const bookDivNode = document.createElement('div');
        bookDivNode.setAttribute('class', 'card');
        bookDivNode.setAttribute('id', `book${i}`);
        bookDivNode.innerHTML = `
            <div class="card-details">
                <p class="book-title">${myLibrary[i].name}</p>
                <div class="book-details">
                        <p class="text-body">Author: ${myLibrary[i].author}</p>
                        <p class="text-body">Genre: ${myLibrary[i].genre}</p>
                        <p class="text-body">Page number: ${myLibrary[i].numOfPages} pages</p>
                </div>
            </div>
            <button class="card-button">Remove book</button>
        `;
        document.querySelector('#library').appendChild(bookDivNode);

        // add event listener to remove button
        const removeButton = bookDivNode.querySelector('.card-button');
        removeButton.setAttribute('data-book-id', i); // store book index as custom data attribute
        removeButton.addEventListener('click', (event) => {
            const bookId = parseInt(event.target.getAttribute('data-book-id'));
            myLibrary.splice(bookId, 1);
            printLibrary();
        });

    }
}

const newBookNode = document.querySelector('#newBookButton');
newBookNode.addEventListener('click', createBook);

// *** PREVIOUS createBook function ***
// function createBook(e) {
//     const bookDetails = [
//         'Name:',
//         'Author:',
//         'Genre:',
//         'Number of pages:'
//     ];

//     const addingBookNode = document.createElement('div');
//     addingBookNode.setAttribute('id', '#addingBook');

//     for (let i = 0; i < 4; i++) {
//         const bookInfoNode = document.createElement('p');
//         bookInfoNode.textContent = bookDetails[i];
//         // console.log(bookInfoNode.textContent);
//         addingBookNode.appendChild(bookInfoNode);

//         const bookInfoInputNode = document.createElement('input');
//         bookInfoInputNode.setAttribute('id', Object.keys(new Book)[i]);
//         addingBookNode.appendChild(bookInfoInputNode);
//     }

//     const addBookButtonNode = document.createElement('button');
//     addBookButtonNode.textContent = 'Add book!'
//     addingBookNode.appendChild(addBookButtonNode);

//     document.querySelector('.newBook').appendChild(addingBookNode);

//     addBookButtonNode.addEventListener('click', (e) => {
//         const newBookNameNode = document.querySelector('#name').value;
//         const newBookAuthorNode = document.querySelector('#author').value;
//         const newBookGenreNode = document.querySelector('#genre').value;
//         const newBookPageNumNode = parseInt(document.querySelector('#numOfPages').value);

//         const newBook = new Book(newBookNameNode, newBookAuthorNode, newBookGenreNode, newBookPageNumNode)
//         // console.log(newBook);

//         addBookToLibrary(newBook);
//         printLibrary();
//         addingBookNode.remove();
//     })

// }

// *** PREVIOUS createBook function v2 ***
// function createBook() {
//     // Create a new div element with a class of 'card'
//     const cardNode = document.createElement('div');
//     cardNode.classList.add('card');

//     // Create a new div element with a class of 'card-details'
//     const cardDetailsNode = document.createElement('div');
//     cardDetailsNode.classList.add('card-details');

//     // Create a new paragraph element with a class of 'text-title' and set its text content to 'New Book'
//     const titleNode = document.createElement('p');
//     titleNode.classList.add('text-title');
//     titleNode.textContent = 'New Book';

//     // Create a new form element with a class of 'card-form'
//     const formNode = document.createElement('form');
//     formNode.classList.add('card-form');

//     // Create a new paragraph element with a class of 'text-body' and set its text content to 'Please enter the details of the new book:'
//     const bodyNode = document.createElement('p');
//     bodyNode.classList.add('text-body');
//     bodyNode.textContent = 'Please enter the details of the new book:';

//     // Create a new label element with a 'for' attribute of 'book-name' and text content of 'Name:'
//     const nameLabelNode = document.createElement('label');
//     nameLabelNode.setAttribute('for', 'book-name');
//     nameLabelNode.textContent = 'Name:';
//     // Add the label element to the form
//     formNode.appendChild(nameLabelNode);

//     // Create a new input element with a 'type' attribute of 'text', an 'id' attribute of 'book-name', and a 'name' attribute of 'book-name'
//     const nameInputNode = document.createElement('input');
//     nameInputNode.setAttribute('type', 'text');
//     nameInputNode.setAttribute('id', 'book-name');
//     nameInputNode.setAttribute('name', 'book-name');
//     // Add the input element to the form
//     formNode.appendChild(nameInputNode);

//     // Create a new label element with a 'for' attribute of 'book-author' and text content of 'Author:'
//     const authorLabelNode = document.createElement('label');
//     authorLabelNode.setAttribute('for', 'book-author');
//     authorLabelNode.textContent = 'Author:';
//     // Add the label element to the form
//     formNode.appendChild(authorLabelNode);

//     // Create a new input element with a 'type' attribute of 'text', an 'id' attribute of 'book-author', and a 'name' attribute of 'book-author'
//     const authorInputNode = document.createElement('input');
//     authorInputNode.setAttribute('type', 'text');
//     authorInputNode.setAttribute('id', 'book-author');
//     authorInputNode.setAttribute('name', 'book-author');
//     // Add the input element to the form
//     formNode.appendChild(authorInputNode);

//     // Create a new label element with a 'for' attribute of 'book-genre' and text content of 'Genre:'
//     const genreLabelNode = document.createElement('label');
//     genreLabelNode.setAttribute('for', 'book-genre');
//     genreLabelNode.textContent = 'Genre:';
//     // Add the label element to the form
//     formNode.appendChild(genreLabelNode);

//     // Create a new input element with a 'type' attribute of 'text', an 'id' attribute of 'book-genre', and a 'name' attribute of 'book-genre'
//     const genreInputNode = document.createElement('input');
//     genreInputNode.setAttribute('type', 'text');
//     genreInputNode.setAttribute('id', 'book-genre');

//     genreInputNode.setAttribute('name', 'book-genre');
//     formNode.appendChild(genreInputNode);

//     const pagesLabelNode = document.createElement('label');
//     pagesLabelNode.setAttribute('for', 'book-pages');
//     pagesLabelNode.textContent = 'Number of pages:';
//     formNode.appendChild(pagesLabelNode);

//     const pagesInputNode = document.createElement('input');
//     pagesInputNode.setAttribute('type', 'number');
//     pagesInputNode.setAttribute('id', 'book-pages');
//     pagesInputNode.setAttribute('name', 'book-pages');
//     formNode.appendChild(pagesInputNode);

//     const buttonNode = document.createElement('button');
//     buttonNode.classList.add('card-button');
//     buttonNode.textContent = 'Add book';
//     formNode.appendChild(buttonNode);

//     cardDetailsNode.appendChild(titleNode);
//     cardDetailsNode.appendChild(formNode);
//     cardDetailsNode.appendChild(bodyNode);

//     cardNode.appendChild(cardDetailsNode);

//     document.querySelector('.newBook').appendChild(cardNode);

//     buttonNode.addEventListener('click', (e) => {
//         e.preventDefault();
//         const newBookNameNode = document.querySelector('#book-name').value;
//         const newBookAuthorNode = document.querySelector('#book-author').value;
//         const newBookGenreNode = document.querySelector('#book-genre').value;
//         const newBookPageNumNode = parseInt(document.querySelector('#book-pages').value);

//         const newBook = new Book(newBookNameNode, newBookAuthorNode, newBookGenreNode, newBookPageNumNode);
//         addBookToLibrary(newBook);
//         printLibrary();
//         cardNode.remove();
//     });
// }

// function createBook() {
//   const container = document.querySelector('.newBook');

//   const cardNode = document.createElement('div');
//   cardNode.classList.add('card');

//   const formNode = document.createElement('form');
//   formNode.classList.add('card-form');

//   const fields = [
//     {label: 'Name:', id: 'book-name', name: 'book-name', type: 'text'},
//     {label: 'Author:', id: 'book-author', name: 'book-author', type: 'text'},
//     {label: 'Genre:', id: 'book-genre', name: 'book-genre', type: 'text'},
//     {label: 'Number of pages:', id: 'book-pages', name: 'book-pages', type: 'number'},
//   ];

//   fields.forEach(({label, id, name, type}) => {
//     const labelNode = document.createElement('label');
//     labelNode.setAttribute('for', id);
//     labelNode.textContent = label;
//     formNode.appendChild(labelNode);

//     const inputNode = document.createElement('input');
//     inputNode.setAttribute('type', type);
//     inputNode.setAttribute('id', id);
//     inputNode.setAttribute('name', name);
//     formNode.appendChild(inputNode);
//   });

//   const buttonNode = document.createElement('button');
//   buttonNode.classList.add('card-button');
//   buttonNode.textContent = 'Add book';
//   formNode.appendChild(buttonNode);

//   const cardDetailsNode = document.createElement('div');
//   cardDetailsNode.classList.add('card-details');
//   cardDetailsNode.appendChild(document.createElement('p')).textContent = 'New Book';
//   cardDetailsNode.appendChild(formNode);
//   cardDetailsNode.appendChild(document.createElement('p')).textContent = 'Please enter the details of the new book:';

//   cardNode.appendChild(cardDetailsNode);
//   container.appendChild(cardNode);

//   buttonNode.addEventListener('click', (e) => {
//     e.preventDefault();
//     const newBook = new Book(
//       document.querySelector('#book-name').value,
//       document.querySelector('#book-author').value,
//       document.querySelector('#book-genre').value,
//       parseInt(document.querySelector('#book-pages').value)
//     );
//     addBookToLibrary(newBook);
//     printLibrary();
//     cardNode.remove();
//   });
// }

function createBook() {
    const container = document.querySelector('.newBook');

    const cardNode = document.createElement('div');
    cardNode.classList.add('card');

    const formNode = document.createElement('form');
    formNode.classList.add('card-form');

    const fields = [
        { label: 'Name:', id: 'book-name', name: 'book-name', type: 'text' },
        { label: 'Author:', id: 'book-author', name: 'book-author', type: 'text' },
        { label: 'Genre:', id: 'book-genre', name: 'book-genre', type: 'text' },
        { label: 'Number of pages:', id: 'book-pages', name: 'book-pages', type: 'text' },
    ];

    fields.forEach(({ label, id, name, type }) => {
        const inputContainer = document.createElement('div');
        inputContainer.classList.add('input-container');
        formNode.appendChild(inputContainer);

        const inputNode = document.createElement('input');
        inputNode.setAttribute('type', type);
        inputNode.setAttribute('id', id);
        inputNode.setAttribute('name', name);
        inputNode.setAttribute('required', '');
        inputContainer.appendChild(inputNode);

        const labelNode = document.createElement('label');
        labelNode.setAttribute('for', id);
        labelNode.classList.add('label');
        labelNode.textContent = label;
        inputContainer.appendChild(labelNode);

        const underlineNode = document.createElement('div');
        underlineNode.classList.add('underline');
        inputContainer.appendChild(underlineNode);
    });

    const buttonNode = document.createElement('button');
    buttonNode.classList.add('card-button');
    buttonNode.textContent = 'Add book';
    formNode.appendChild(buttonNode);

    const cardDetailsNode = document.createElement('div');
    cardDetailsNode.classList.add('card-details');
    cardDetailsNode.appendChild(document.createElement('p')).textContent = 'Please enter the details of the new book:';
    cardDetailsNode.appendChild(formNode);

    cardNode.appendChild(cardDetailsNode);
    container.appendChild(cardNode);

    buttonNode.addEventListener('click', (e) => {
        e.preventDefault();
        const newBook = new Book(
            document.querySelector('#book-name').value,
            document.querySelector('#book-author').value,
            document.querySelector('#book-genre').value,
            parseInt(document.querySelector('#book-pages').value)
        );
        addBookToLibrary(newBook);
        printLibrary();
        cardNode.remove();
    });
}

const removeButtonNode = document.querySelector('.card-button');
removeButtonNode.addEventListener('click', (e) => {

});