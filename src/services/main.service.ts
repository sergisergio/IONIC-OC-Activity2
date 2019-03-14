import { Book } from "../models/Book";
import { Cd } from "../models/Cd";


export class MainService {
booksList: Book[] = [
{
name: 'Croc-Blanc',
author: 'Jack London',
isLent: true
},
{
name: 'Le comte de Monte-Cristo',
author: 'Alexandre Dumas',
isLent: false
},
{
name: 'Robinson Crusoé',
author: 'Daniel Defoë',
isLent: true
}
];

cdsList: Cd[] = [
{
name: 'Absolution',
band: 'Muse',
isLent: true
},
{
name: 'Firestarter',
band: 'The Prodigy',
isLent: false
},
{
name: 'Achtung Baby',
band: 'U2',
isLent: true
}
];


}
