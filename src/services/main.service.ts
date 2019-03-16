import { Book } from "../models/Book";
import { Cd } from "../models/Cd";

export class MainService {
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

    onLendMedium(index:number,list:string, borrower: string){
        if (list == 'book') {
            this.booksList[index].isLent = !this.booksList[index].isLent;
            this.booksList[index].borrower = borrower;
        } else if (list == 'cd') {
            this.cdsList[index].isLent = !this.cdsList[index].isLent;
            this.cdsList[index].borrower = borrower;
        }
    }
}
