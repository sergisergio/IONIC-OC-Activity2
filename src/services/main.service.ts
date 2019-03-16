import { Book } from "../models/Book";
import { Cd } from "../models/Cd";
import { Subject } from "rxjs";
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class MainService {

    //private booksList: Book[] = [];
    //private cdsList: Cd[] = [];

    books$ = new Subject<Book[]>();
    cds$ = new Subject<Cd[]>();

    constructor(private storage: Storage) {
        //this.fetchList();
    }

    booksList: Book[] = [
        {
            name: 'Croc-Blanc',
            author: 'Jack London',
            content: '«Tout n’est pas liberté dans le monde», et quand ce monde est le Wild, pays farouche et terre glacée, même le loup se sent prisonnier.' +
                     'Jack London, dans ce décor sauvage et cette nature hostile, nous conte l\’histoire d\’un louveteau qui vient petit à petit à la civilisation et se fait chien.' +
                     'La vie âpre des animaux sauvages et des chasseurs indiens ou blancs de l\’Alaska a rarement été peinte avec autant de force et de vérité. Pour écrire ce récit, qui est devenu un classique de la littérature, Jack London s\’est inspiré des souvenirs de son séjour dans le Grand Nord.',
            isLent: true,
            borrower: 'Michael Jordan'
        },
        {
            name: 'Le comte de Monte-Cristo',
            author: 'Alexandre Dumas',
            content: 'En 1814, l\’empereur Napoléon est exilé et Louis XVIII s\’installe sur le trône de France. À Marseille, Edmond Dantès, un jeune marin à l\’avenir prometteur, est emprisonné à tort au Château d’If comme dissident bonapartiste, victime de l\’ambition et de la jalousie de ses compagnons. Quatorze ans plus tard, l\’arrivée d’un riche et mystérieux italien à Paris fait jaser la noblesse française … mais derrière le nom du comte de Monte-Cristo se cache un homme en quête de vengeance.',
            isLent: false,
            borrower: ''
        },
        {
            name: 'Robinson Crusoé',
            author: 'Daniel Defoë',
            content: 'Après quelques premières expéditions, Robinson Crusoé, marin d\’York, s’embarque pour la Guinée le 1er septembre 1659. Mais le bateau essuie une si forte tempête qu\’il dérive pendant plusieurs jours et finalement fait naufrage au nord du Brésil. Seul survivant, Robinson parvient à gagner une île située au large de l\’Orénoque où il va peu à peu s\’assurer une subsistance convenable : il y restera près de vingt-huit ans, d\’abord seul, puis accompagné d\’un fidèle indigène qu\’il baptise Vendredi.' +
                     'Inspiré de l\’aventure réelle d’un marin écossais, le roman que Defoe fait paraître en 1719 connaît un succès foudroyant qui ne s\’est plus démenti. Si James Joyce fera plus tard de Defoe le « père du roman anglais », ce n\’est pas seulement que l\’auteur innove en prétendant offrir un authentique manuscrit retrouvé par l’éditeur. C’est aussi qu\’il crée un héros différent : homme ordinaire qui raconte son histoire extraordinaire simplement, comme il l\’a vécue, Robinson touche tous les lecteurs. Et cette histoire devient un mythe que d\’innombrables écrivains s\’attacheront à récrire.',
            isLent: true,
            borrower: 'Larry Bird'
        }
    ];

    cdsList: Cd[] = [
        {
            name: 'Absolution',
            band: 'Muse',
            isLent: true,
            borrower: 'Michael Jordan'
        },
        {
            name: 'Firestarter',
            band: 'The Prodigy',
            isLent: false,
            borrower: ''
        },
        {
            name: 'Achtung Baby',
            band: 'U2',
            isLent: true,
            borrower: 'Larry Bird'
        }
    ];

    emitBooks() {
        this.books$.next(this.booksList.slice());
    }

    emitCds() {
        this.cds$.next(this.cdsList.slice());
    }

    onLendMedium(index:number,list:string, borrower: string){
        if (list == 'book') {
            this.booksList[index].isLent = !this.booksList[index].isLent;
            this.booksList[index].borrower = borrower;
            this.storage.set('books', this.booksList);
            this.emitBooks();
        } else if (list == 'cd') {
            this.cdsList[index].isLent = !this.cdsList[index].isLent;
            this.cdsList[index].borrower = borrower;
            this.storage.set('cds', this.cdsList);
            this.emitCds();
        }
    }

    saveData(book: Book, cd: Cd) {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').set(this.booksList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
            firebase.database().ref('cds').set(this.cdsList).then(
                (data: DataSnapshot) => {
                    resolve(data);
                },
                (error) => {
                    reject(error);
                }
            );
            this.booksList.push(book);
            this.cdsList.push(cd);
            this.saveList();
            this.emitBooks();
            this.emitCds();
        });

    }

    retrieveData() {
        return new Promise((resolve, reject) => {
            firebase.database().ref('books').once('value').then(
                (data: DataSnapshot) => {
                    this.booksList = data.val();
                    this.emitBooks();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
            firebase.database().ref('cds').once('value').then(
                (data: DataSnapshot) => {
                    this.cdsList = data.val();
                    this.emitCds();
                    resolve('Données récupérées avec succès !');
                }, (error) => {
                    reject(error);
                }
            );
        });
    }

    saveList() {
        this.storage.set('books', this.booksList);
        this.storage.set('cds', this.cdsList);

    }

    fetchListBook() {
        this.storage.get('books').then(
            (list) => {
            //    if (list && list.length) {
                    this.booksList = list.slice();
            //    }
                this.emitBooks();
            }
        );
    }

    fetchListCd() {
        this.storage.get('cds').then(
            (list) => {
                if (list && list.length) {
                    this.cdsList = list.slice();
                }
                this.emitCds();
            }
        );
    }

    /*fetchList() {
        this.storage.get('books').then(
            (booksList) => {
                booksList && booksList.length ? this.booksList = booksList.slice() : 0;
                this.emitBooks();
            }
        ).catch(
            (error) => {
                console.log(`Books Retrieve error : ${error}`);
            }
        );

        this.storage.get('cds').then(
            (cdsList) => {
                cdsList && cdsList.length ? this.cdsList = cdsList.slice() : 0;
                this.emitCds();
            }
        ).catch(
            (error) => {
                console.log(`Cds Retrieve error : +  ${error}`);
            }
        );
    }*/

}
