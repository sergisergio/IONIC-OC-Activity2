export class Book {
    name: string;
    author: string;
    content: string;
    isLent: boolean;
    borrower: string;

    constructor(name: string, author: string, content: string, borrower: string) {
        this.name = name;
        this.author = author;
        this.content = content;
        this.isLent = false;
        this.borrower = borrower;
    }
}