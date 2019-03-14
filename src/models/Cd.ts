export class Cd {
    name: string;
    band: string;
    isLent: boolean;

    constructor(name: string, band: string) {
        this.name = name;
        this.band = band;
        this.isLent = false;
    }
}