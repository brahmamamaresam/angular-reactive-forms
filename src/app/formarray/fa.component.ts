import {Component} from "@angular/core";
import { FormArray, FormBuilder } from "@angular/forms";

@Component({
  selector:'formarray',
  templateUrl:'./fa.component.html'
})

export class FormArrayComponent{
  simpleForm
  constructor(private fb:FormBuilder){
    this.simpleForm=this.fb.group({
      aliases:this.fb.array([this.fb.control('')])
    })
  }

  get aliases(){
    return this.simpleForm.get('aliases') as FormArray;
  }

  addToAlias(){
    this.aliases.push(this.fb.control(''))
  }
}