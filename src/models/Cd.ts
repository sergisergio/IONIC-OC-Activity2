export class Cd {
    name: string;
    band: string;
    isLent: boolean;
    borrower: string

    constructor(name: string, band: string, borrower: string) {
        this.name = name;
        this.band = band;
        this.isLent = false;
        this.borrower = borrower;
    }
}