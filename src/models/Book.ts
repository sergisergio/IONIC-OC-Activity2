export class Book {
    name: string;
    author: string;
    content: string;
    isLent: boolean;

    constructor(name: string, author: string, content: string) {
        this.name = name;
        this.author = author;
        this.content = content;
        this.isLent = false;
    }
}