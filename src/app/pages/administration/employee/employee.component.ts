import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgbModalConfig, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Employee } from 'src/app/core/models/employee';
import { Projet } from 'src/app/core/models/projet';
import { Salle } from 'src/app/core/models/salle';
import { EmployeeService } from 'src/app/core/services/employee.service';
import { ProfilService } from 'src/app/core/services/profil.service';
import { ProjetService } from 'src/app/core/services/projet.service';
import { SalleService } from 'src/app/core/services/salle.service';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import { AuthService } from 'src/app/core/services/auth.service';
import { GlobalConstants } from 'src/app/shared/constant/GlobalConstants';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {
  
  trashIcon = faTrash;
  editIcon = faPenToSquare;
  addIcon = faPlusCircle;

  employeeDetail!: FormGroup;
  employeeobj: Employee = new Employee();
  employeeList:Employee[] = [];
  projectList:Projet[] = [];
  salleList:Salle[] = [];
  totalRec!: string;
  page:number=1

  constructor(private formBuilder : FormBuilder,
     private employeeService: EmployeeService,
     private projetService: ProjetService,
     private salleService: SalleService,
     config: NgbModalConfig,
      private modalService: NgbModal,
      private authService:AuthService
     ) {
        // customize default values of modals used by this component tree
 config.backdrop = 'static';
 config.keyboard = false;
      }

  ngOnInit(): void {
    this.getEmployees();
    this.getprojects();
    this.getsalles();
    this.employeeDetail = this.formBuilder.group({
      id: [''],
      lastname:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex),Validators.minLength(4)]],
      firstname:[null,[Validators.required,Validators.pattern(GlobalConstants.nameRegex),Validators.minLength(4)]],
      birthdate:[null,[Validators.required,Validators.pattern(GlobalConstants.dateRegex),Validators.minLength(10)]],
      address:[null,[Validators.required,Validators.pattern(GlobalConstants.textRegex),Validators.minLength(4)]],
      phonenumber:[null,[Validators.required,Validators.pattern(GlobalConstants.numberRegex)]],
      manager:[''],
      project:[''],
      salle:[''],
    });
   
  }

  open(content) {
    this.modalService.open(content);
  }

  close(content) {
    this.modalService.dismissAll(content);
  }

 

  addEmployee(){

    this.employeeobj.id=this.employeeDetail.value.id;
    this.employeeobj.lastname=this.employeeDetail.value.lastname;
    this.employeeobj.firstname=this.employeeDetail.value.firstname;
    this.employeeobj.birthdate=this.employeeDetail.value.birthdate;
    this.employeeobj.address=this.employeeDetail.value.address;
    this.employeeobj.phonenumber=this.employeeDetail.value.phonenumber;
    this.employeeobj.project=this.employeeDetail.value.project;
    this.employeeobj.salle=this.employeeDetail.value.salle;
    this.employeeobj.manager=this.employeeDetail.value.manager;

    this.employeeService.addEmployee(this.employeeobj).subscribe(res=>{
      console.log(res);
      this.getEmployees();
      this.employeeDetail=null;
    
    }
    );


}

getEmployees(){
  this.employeeService.getEmployees().subscribe(res=>{
    this.employeeList=res;
  })
}


getprojects(){
  this.projetService.getProjets().subscribe(res=>{
    this.projectList=res;
   
  })
}
getsalles(){
  this.salleService.getSalles().subscribe(res=>{
    this.salleList=res;
  })
}

editEmployee(employee : Employee){
  this.employeeDetail.controls['id'].setValue(employee.id);
  this.employeeDetail.controls['lastname'].setValue(employee.lastname);
  this.employeeDetail.controls['firstname'].setValue(employee.firstname);
  this.employeeDetail.controls['birthdate'].setValue(employee.birthdate);
  this.employeeDetail.controls['address'].setValue(employee.address);
  this.employeeDetail.controls['phonenumber'].setValue(employee.phonenumber);
  this.employeeDetail.controls['project'].setValue(employee.project);
  this.employeeDetail.controls['salle'].setValue(employee.salle);
  this.employeeDetail.controls['manager'].setValue(employee.manager);


}

deleteEmployee(employee : Employee){

    this.employeeService.deleteEmployee(employee).subscribe(res=>{
      console.log(res);
      alert("employee deleted successfully");
      this.getEmployees();
    }
    );
  
  }

updateEmployee(){
 
  this.employeeobj.lastname=this.employeeDetail.value.lastname;
  this.employeeobj.firstname=this.employeeDetail.value.firstname;
  this.employeeobj.birthdate=this.employeeDetail.value.birthdate;
  this.employeeobj.address=this.employeeDetail.value.address;
  this.employeeobj.phonenumber=this.employeeDetail.value.phonenumber;
  this.employeeobj.project=this.employeeDetail.value.project;
  this.employeeobj.salle=this.employeeDetail.value.salle;
  this.employeeobj.manager=this.employeeDetail.value.manager;
  this.employeeService.updateEmployee(this.employeeobj,this.employeeDetail.value.id).subscribe(res=>{
    console.log(res);
    this.getEmployees();
  }
  );

}

confirmDelete(employee: Employee) {
  if(confirm("Are you sure you want to delete employee "+employee.lastname+' '+employee.firstname)) {
     this.deleteEmployee(employee);
  }
}

getStatut(employee : Employee):String{

  if(this.authService.getUserEmployee().id===employee.id){
    return "Actif"
  }else
  return"Inactif";
}

public searchEmployees(key: string): void {
  console.log(key);
  const results: Employee[] = [];
  for (const employee of this.employeeList) {
    if (employee.firstname.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.lastname.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.address.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.salle.toString().toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.project.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.role.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.birthdate.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.phonenumber.toLowerCase().indexOf(key.toLowerCase()) !== -1
    || employee.manager.toLowerCase().indexOf(key.toLowerCase()) !== -1


    ) {
      results.push(employee);
    }
  }
  this.employeeList = results;
  if (results.length === 0 || !key) {
    this.getEmployees();
  }
}

handleClear(){
  this.employeeDetail.reset();
}


}