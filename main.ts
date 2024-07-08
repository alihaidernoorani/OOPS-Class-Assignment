class Book {
    title: string;
    author: string;
    static instanceCount: number = 0; // Class variable to keep track of instances

    constructor(title: string, author: string) {
        this.title = title;
        this.author = author;
        Book.instanceCount++; // Increment the count whenever a new instance is created
    }

    displayDetails(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}`);
    }

    // Method to display the count of created instances
    static getInstanceCount(): void {
        console.log(`Total instances created: ${Book.instanceCount}`);
    }
}

const book1 = new Book("Harry Potter and the Philosopher's Stone", "J. K Rowling");
const book2 = new Book("To Kill a Mockingbird", "Harper Lee");

book1.displayDetails(); // Output: Title: Harry Potter and the Philosopher's Stone, Author: J. K Rowling
book2.displayDetails(); // Output: Title: To Kill a Mockingbird, Author: Harper Lee

// Displaying the count of created instances
Book.getInstanceCount(); // Output: Total instances created: 2

class EBook extends Book {
    fileSize: number;

    constructor(title: string, author: string, fileSize: number) {
        super(title, author);
        this.fileSize = fileSize;
    }

    // Overriding the displayDetails method
    displayDetails(): void {
        console.log(`Title: ${this.title}, Author: ${this.author}, File Size: ${this.fileSize}MB`);
    }
}

const ebook1 = new EBook("1984", "George Orwell", 2.5);
ebook1.displayDetails(); // Output: Title: 1984, Author: George Orwell, File Size: 2.5MB

