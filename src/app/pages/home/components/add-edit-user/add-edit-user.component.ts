import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent {
  form:any =  new FormGroup({})
  constructor(
    public ref: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    public formBuilder:FormBuilder
    ) {
  }
  ngOnInit(): void {
    console.log(this.dialogConfig.data.status);
    if(this.dialogConfig.data.status == 'update'){
      this.onCreateUpdateUserForm();
    }else{
      this.onCreateAddingUserForm();
    }
  }

  get formControls() {
    return this.form.controls;
  }
  onCreateAddingUserForm(){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      phone:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      status:[]
    })
  }
  onCreateUpdateUserForm(){
    this.form = this.formBuilder.group({
      name:[this.dialogConfig.data.user.name,[Validators.required]],
      phone:[this.dialogConfig.data.user.phone,Validators.required],
      email:[this.dialogConfig.data.user.email,[Validators.email,Validators.required]],
      status:[]
    })
  }

  onSubmit(){
    this.ref.close(this.form.value);
  }
}
