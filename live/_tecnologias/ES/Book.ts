//create one interface
interface Author{
    author_name: string;
    author_lastName: string;
}

// class implemnts of the interface
class Book implements Author{

author_name;
author_lastName;
private title: string;

    constructor(author, authorLastName,title) {
        this.author_name = author;
        this.author_lastName = authorLastName;
        this.title = title;
    }

    showTitle() {
        console.log(this.title);
    }
    showAuthor() {
        console.log(this.author_name);
    }
    showBook() {
        console.log(this);
    }
}


//add class extends
class techBoooks extends Book {
    category: string;

    constructor(author_name, author_lastName,title, category = "Terror") {
        super(author_name, author_lastName,  title);
        this.category = category;
    }
    showBook(){
        super.showBook();
        console.log('show the book ' )
    }
}

let book = new techBoooks("Fulanito", "Mengano ",  "Learn JAVA");
book.showBook();