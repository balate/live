import{Group} from './group.model';
import{Sector} from './sector.model';

export class Contacto{

    name : string;
    lastname : string;
    email : string;
    phoneNumber : string;
    group : Group;
    sector : Sector;
    hobby : Array<any>;

    constructor(){}
}