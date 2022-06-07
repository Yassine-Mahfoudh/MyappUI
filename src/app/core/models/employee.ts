import { Profil } from "./profil";

export class Employee {
    id:number=0;
    lastname:string='';
    firstname:string='';
    role:string='';
    status:boolean=true;
    birthdate:string='';
    address:string='';
    phonenumber:string='';
    photo:string='';
    salle:string='';
    project:string='';
    manager:string='';
    managerid:number=0;
    listeProfils:String[]=[]
}