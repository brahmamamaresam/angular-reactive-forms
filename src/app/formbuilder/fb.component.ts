import {Component} from "@angular/core"
import { FormBuilder } from "@angular/forms";

@Component({
  selector:'formbuilder',
  templateUrl:'./fb.component.html'
})

export class FormBuilderComponent{
  ProfileForm
  constructor(private fb:FormBuilder){
    this.ProfileForm=this.fb.group({
      firstname:[''],
      lastname:[''],
      email:[''],
      password:[''],
      address:this.fb.group({
        street:[''],
        city:[''],
        zipcode:[]
      })
    })
  }

}