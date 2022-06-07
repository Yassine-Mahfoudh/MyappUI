import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Departement } from 'src/app/core/models/departement';
import { DepartementService } from 'src/app/core/services/departement.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { GlobalConstants } from 'src/app/shared/constant/GlobalConstants';

@Component({
  selector: 'app-departement',
  templateUrl: './departement.component.html',
  styleUrls: ['./departement.component.scss']
})

export class DepartementComponent implements OnInit {

  trashIcon = faTrash;
    editIcon = faPenToSquare;
    addIcon = faPlusCircle;

  departementDetail!: FormGroup;
  departementobj: Departement = new Departement();
  departementup: Departement = new Departement();

  departementList:Departement[] = [];
  totalRec!: string;
  page:number=1

  constructor(private formBuilder : FormBuilder,config: NgbModalConfig,
    private modalService: NgbModal, private departementService: DepartementService) {
        // customize default values of modals used by this component tree
  config.backdrop = 'static';
  config.keyboard = false;
    }

  ngOnInit(): void {
    this.getDepartements();
    this.departementDetail = this.formBuilder.group({
      id: [''],
      name:[null,[Validators.required,Validators.minLength(4),Validators.pattern(GlobalConstants.nameRegex)]]    });
  }

  
  open(content) {
    this.modalService.open(content);
  }

  close(content) {
    this.modalService.dismissAll(content);
  }




  addDepartement(){

    console.log(this.departementDetail);
    this.departementobj.id=this.departementDetail.value.id;
    this.departementobj.name=this.departementDetail.value.name;
    this.departementService.addDepartement(this.departementobj).subscribe(res=>{
      console.log(res);
      this.getDepartements();
    }
    );


}

getDepartements(){
  this.departementService.getDepartements().subscribe(res=>{
    this.departementList=res;
  })
}

editDepartement(departement : Departement){
  this.departementDetail.controls['id'].setValue(departement.id);
  this.departementDetail.controls['name'].setValue(departement.name);
  this.departementDetail.controls['nbsalles'].setValue(departement.nbsalles);

}

deleteDepartement(departement : Departement){

    this.departementService.deleteDepartement(departement).subscribe(res=>{
      console.log(res);
      alert("profil deleted successfully");
      this.getDepartements();
    }
    );
  
  }


  updateDepartement(){
    this.departementobj.id=this.departementDetail.value.id;
    this.departementobj.name=this.departementDetail.value.name;

    this.departementService.getDepartementById(this.departementDetail.value.id).subscribe((res) => {
      this.departementup = res;
      console.log("this.departementup:::",this.departementup);
      this.departementobj.nbsalles = this.departementup.nbsalles
      console.log("this.departementobj:::",this.departementobj);
  
    this.departementService.updateDepartement(this.departementobj).subscribe(res=>{
      console.log("update:::",res);
      this.getDepartements();

    });
    
  }
  );

}

confirmDelete(departement: Departement) {
  if(confirm("Are you sure you want to delete this profil : "+departement.name)) {
     this.deleteDepartement(departement);
  }
}

public searchDepartements(key: string): void {
  console.log(key);
  const results: Departement[] = [];
  for (const departement of this.departementList) {
    if (departement.name.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || departement.nbsalles.toString().indexOf(key.toLowerCase()) !== -1 ) {
      results.push(departement);
    }
  }
  this.departementList = results;
  if (key=='') {
    this.getDepartements();
  }
}


handleClear(){
  this.departementDetail.reset();
}

}
