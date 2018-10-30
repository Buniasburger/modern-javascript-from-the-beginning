class Book {
    constructor(title, author, isbn) {
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}

class UI {
    addBookToList(book) {
        const list = document.querySelector('#book-list');
        // Create tr element
        const row = document.createElement('tr');
        // Insert cols
        row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.isbn}</td>
        <td><a href="#" class="delete">X</a></td>
        `;

        list.appendChild(row);
    }

    showAlert(message, className) {
        // Create div
        const div = document.createElement('div');
        // Add clases
        div.className = `alert ${className}`;
        // Add text
        div.appendChild(document.createTextNode(message));
        // Get parent
        const container = document.querySelector('.container');
        const form = document.querySelector('#book-form');

        // Insert alert
        container.insertBefore(div, form);

        // Timeout after 3 sec
        setTimeout(function () {
            div.remove();
        }, 3000)
    }

    deleteBook(target) {
        target.parentElement.parentElement.remove();
    }

    clearFields() {
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value = '';
    }
}

// Local Storage Class
class Store {
    static getBooks() {
        const books = JSON.parse(localStorage.getItem('books'));
        if (books === null) {
            return [];
        }

        return books;
    }

    static displayBooks() {
        const ui = new UI;
        Store.getBooks().forEach(function(value) {
            ui.addBookToList(value);
        })

    }

    static addBook(book) {
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
    }

    static removeBook(target) {
        const isbn = target.previousElementSibling.textContent;
        const author = target.previousElementSibling.previousElementSibling.textContent;
        const title = target.previousElementSibling.previousElementSibling.previousElementSibling.textContent;

        const books = Store.getBooks();
        books.forEach(function(value, index) {
            if(value.title === title && value.author === author && value.isbn === isbn) {
                books.splice(index, 1);
            }
        });

        localStorage.setItem('books', JSON.stringify(books));
    }
}

// Event Listener for add book
document.querySelector('#book-form').addEventListener('submit', function (e) {
    // Get form values
    const title = document.querySelector('#title').value,
        author = document.querySelector('#author').value,
        isbn = document.querySelector('#isbn').value;

    // Instantiate book
    const book = new Book(title, author, isbn);

    // Instantiate UI
    const ui = new UI();

    // Validate
    if (title === '' || author === '' || isbn === '') {
        // Error alert
        ui.showAlert('Please fill in all fields', 'error');
    } else {
        // Add book to Storage
        Store.addBook(book);

        // Add book to list
        ui.addBookToList(book);

        // Show success
        ui.showAlert('Book added!', 'success');

        // Clear fields
        ui.clearFields();
    }

    e.preventDefault();
});

// Event Listener for delete
document.querySelector('#book-list').addEventListener('click', function (e) {
    if (e.target.className === 'delete') {
        // Instantiate UI
        const ui = new UI();

        // Remove book from storage
        Store.removeBook(e.target.parentElement);

        // Delete book
        ui.deleteBook(e.target);

        // Show Alert
        ui.showAlert('Book Removed', 'success');
    }

    e.preventDefault();
});

// Event Listener for DOM loaded
document.addEventListener("DOMContentLoaded",function(){
    Store.displayBooks();
});