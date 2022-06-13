import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Typedemande } from 'src/app/core/models/typedemande';
import { TypedemandeService } from 'src/app/core/services/typedemande.service';
import { GlobalConstants } from 'src/app/shared/constant/GlobalConstants';
import { ConfirmDialogService } from '../../dialog-confirmation/confirm-dialog.service';

@Component({
  selector: 'app-edit-demande',
  templateUrl: './edit-demande.component.html',
  styleUrls: ['./edit-demande.component.css']
})
export class EditDemandeComponent implements OnInit {

  constructor(private confirmDialogService:ConfirmDialogService,private dialog: MatDialogRef<EditDemandeComponent, { data: any }>,
    @Inject(MAT_DIALOG_DATA) data, private typedemandeService:TypedemandeService) {

    this.demandeDetail=new FormGroup({
      id: new FormControl(data.demande.id),
      title: new FormControl(data.demande.title,[Validators.required, Validators.pattern(GlobalConstants.nameRegex)]),
      description: new FormControl(data.demande.description,[Validators.required]),
      datedebut: new FormControl(data.demande.datedebut,[Validators.required]),
      datefin: new FormControl(data.demande.datefin,[Validators.required]),
    });
   }

  ngOnInit(): void {
    this.gettypeevent();
  }
  demandeDetail: FormGroup
  validateDate(){
    if(this.demandeDetail.controls['datedebut'].value >
     this.demandeDetail.controls['datefin'].value){
      return true;
    }
    else{
      return false;
    }
  }
  getFormControl(key: string): FormControl {
    return this.demandeDetail.controls[key] as FormControl;
  }



    

  onSuccessUpdate() {

    this.confirmDialogService.confirm('Confirmation','Voulez-vous confirmer cette opération ?').subscribe((res) => {
      if (res){  
        if(this.demandeDetail.valid){
          const data = this.demandeDetail.getRawValue();
    
          this.dialog.close({
            data: data,
           
          });

        }  
         else this.demandeDetail.markAllAsTouched()

        
     } })

     
  }

  TypeList:Typedemande[]=[];
  gettypeevent(){
    this.typedemandeService.getTypeDemandes().subscribe(res=>{
      this.TypeList=res;
      console.log("evet type::", this.TypeList);
    })
  }

  handleClear(){
    this.demandeDetail.reset();
  }
}
