import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Salle } from 'src/app/models/salle';
import { SalleService } from 'src/app/services/salle.service';
@Component({
  selector: 'app-salle',
  templateUrl: './salle.component.html',
  styleUrls: ['./salle.component.css']
})
export class SalleComponent implements OnInit {

  constructor(private salleService : SalleService) { }
  public salles!: Salle[];

  
  myArray : any = [];
  mesSalles: any={
    id: '',
    type: '',
    num: '',
    nbposte:'',
    pourcentagePres:''
  };
  public editSalle! : Salle;
  public deleteSalle! : Salle;

  ngOnInit() {
 this.getAllSalles();
  }

//CRUD
// Methode Get

  getAllSalles(){
    this.salleService.getAll()
    .subscribe(data =>{
    this.myArray=data;
    })
  }

//Methode Delete
ondeleteSalle(id){
  this.salleService.delete(id)
  .subscribe(() => {
    this.myArray=this.myArray.filter(s => s.id !=id);
  } )
}

//Methode Post

addSalle(){
  this.salleService.add(this.mesSalles)
  .subscribe((s)=>{
    this.myArray = [s, ...this.myArray];
    this.videInput();
  })
}

//Pour vider les inputs

videInput(){
  this.mesSalles = {
    id: '',
    type: '',
    num: '',
    nbposte:'',
    pourcentagePres:''
  }
}


//Methode Update




public onUpdateSalle(salle: Salle):void{
  this.salleService.update(salle).subscribe(
    (response: Salle) => {
      console.log(response);
      this.getAllSalles();
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
}

public onOpenModal(salle: Salle, mode: string): void {
  const container = document.getElementById('main-container');
  const button = document.createElement('button');
  button.type = 'button';
  button.style.display = 'none';
  button.setAttribute('data-toggle', 'modal');

  if (mode === 'edit') {
    this.editSalle = salle;
    button.setAttribute('data-target', '#updateSalleModal');
  }
  if (mode === 'delete') {
    this.deleteSalle = salle;
    button.setAttribute('data-target', '#deleteSalleModal');
  }

  
  container!.appendChild(button);
  button.click();
}


}