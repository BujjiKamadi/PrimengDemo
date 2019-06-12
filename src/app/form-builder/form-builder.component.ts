import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators} from '@angular/forms';
interface city{
  name : string;
  code : string;
}
@Component({
  selector: 'app-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.css']
})
export class FormBuilderComponent implements OnInit {
  cities : city[];
  studentForm : FormGroup;  
  filteredCities: any = []; 
  constructor(private fb:FormBuilder) { 
    this.cities = [
      {name: 'Andhra Pradesh', code: 'AP'},
      {name: 'Arunachal Pradesh', code: 'ARP'},
      {name: 'Assam', code: 'ASM'},
      {name: 'Bihar', code: 'BHR'},
      {name: 'Chhattisgarh', code: 'CHG'}
  ];
  }

  ngOnInit() {
    this.studentForm = this.fb.group({
      studentName : ['', Validators.required],
      gender : [''],
      //address form group
      address : this.fb.group({
        city : [''],
        state : [''],
        pinCode : ['']
      }),
      //contacts form group
      HomeContact : this.fb.group({
        mobile : [''],
        email : ['']
      }),
      OfficeContact : this.fb.group({
        mobile : [''],
        email : ['']
      })
    });
  }
  filterCitySingle($event) {
    this.filteredCities = [{name:'newyork',id:'1'},
    {name:'washington',id:'2'},
    {name:'arkansas',id:'3'}];
  }

  onSubmit():void{
    console.log(this.studentForm);
    console.log(this.studentForm.value);
    console.log(this.studentForm.touched);
    console.log(this.studentForm.controls.studentName.errors.minLength);
    console.log(this.studentForm.controls.studentName.errors.maxLength);
    console.log(this.studentForm.get('studentName').value);
    console.log(this.studentForm.get('studentName').errors.required);
  }
}
