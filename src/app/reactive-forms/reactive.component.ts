import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css'],
})
export class ReactiveFormComponent implements OnInit {
  regForm;
  constructor(private fb:FormBuilder) {
    this.regForm = new FormGroup({
      firstname:new FormControl('',[Validators.required]),
      lastname:new FormControl('',[Validators.required]),
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      address:new FormGroup({
        street:new FormControl('',[Validators.required]),
        city:new FormControl(''),
        zipcode:new FormControl('',[Validators.min(6)])
      }),
      aliases:this.fb.array([this.fb.control('')])
    });
  }

  ngOnInit() {}
get aliases(){
  return this.regForm.get('aliases') as FormArray
}

addAlias(){
  this.aliases.push(this.fb.control(''));
}
  get form() {
    // if (this.regForm.invalid && this.regForm.touched) {
    //   return true;
    // }
    // return false;
    return this.regForm;
  }
  get email() {
    return this.regForm.get('email');
  }

  get password() {
    return this.regForm.get('password');
  }

  onSubmit() {
    console.log(this.regForm.value);
  }

  updateEmail() {
    // this.regForm.get('email').setValue('brahmam@123');
    this.regForm.setValue({firstname:'raj',lastname:'jatan',email: 'brahmam@123', password: '12345',address:{
      street:'bodrayi',
      city :'mcl',
      zipcode:522426
    } });
  }

}
