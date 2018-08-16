class Book {

    constructor(author, title) {
        this.author = author;
        this.title = title;
    }

    showTitle() {
        console.log(this.title);
    }
    showAuthor() {
        console.log(this.author);
    }
    showBook() {
        console.log(this);
    }
}

let bookOne = new Book("Jperez", "Learn Angular");


// add new property to class 
bookOne.code = "XAAADF_32A12B";
bookOne.showBook();

//add class extends
class techBoooks extends Book {
    constructor(author, title, category = "Terror") {
        super(author, title);
        this.category = category;
    }
}
let bookTwo = new techBoooks("Fulanito", "Learn JAVA");
bookTwo.showBook();