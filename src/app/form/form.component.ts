import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';

interface city{
  name : string;
  code : string;
}

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})


export class FormComponent implements OnInit {
  cities : city[];
  studentForm : FormGroup;  
  constructor() { 
    this.cities = [
      {name: 'Andhra Pradesh', code: 'AP'},
      {name: 'Arunachal Pradesh', code: 'ARP'},
      {name: 'Assam', code: 'ASM'},
      {name: 'Bihar', code: 'BHR'},
      {name: 'Chhattisgarh', code: 'CHG'}
  ];
  }

  ngOnInit() {
    this.studentForm = new FormGroup({
      studentName : new FormControl(),
      gender : new FormControl(),
      //address form group
      address : new FormGroup({
        city : new FormControl(),
        state : new FormControl(),
        pinCode : new FormControl()
      }),
      //contacts form group
      HomeContact : new FormGroup({
        mobile : new FormControl(),
        email : new FormControl()
      }),
      OfficeContact : new FormGroup({
        mobile : new FormControl(),
        email : new FormControl()
      })
    });
  }

  onSubmit():void{
    console.log(this.studentForm);
    console.log(this.studentForm.value);
    console.log(this.studentForm.touched);
    console.log(this.studentForm.controls.studentName.value);
    console.log(this.studentForm.get('studentName').value);
  }
}
