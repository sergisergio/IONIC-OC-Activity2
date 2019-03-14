export class Book {
    name: string;
author: string;
isLent: boolean;

constructor(name: string, author: string) {
        this.name = name;
        this.author = author;
        this.isLent = false;
    }
}