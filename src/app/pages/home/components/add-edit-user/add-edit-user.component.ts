import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { UserStatus } from 'src/app/shared/enums/userStatus';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss']
})
export class AddEditUserComponent {
  form:any =  new FormGroup({});
  statuses:any[]=[
    {
      name:'Active',
      value:UserStatus.active
    },
    {
      name:'Soft_Delete',
      value:UserStatus.softDeleted
    },
  ]

  constructor(
    public ref: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    public formBuilder:FormBuilder
    ) {
  }
  ngOnInit(): void {
    if(this.dialogConfig.data.status == 'update'){
      this.onCreateUpdateUserForm();
    }else{
      this.onCreateAddingUserForm();
    }
  }

  get formControls() {
    return this.form.controls;
  }
  /**
   * to create the add form group
   */
  onCreateAddingUserForm(){
    this.form = this.formBuilder.group({
      name:['',[Validators.required]],
      phone:['',Validators.required],
      email:['',[Validators.email,Validators.required]],
      status:[UserStatus.active]
    })
  }
    /**
   * to create the edit form group
   */
  onCreateUpdateUserForm(){
    this.form = this.formBuilder.group({
      name:[this.dialogConfig.data.user.name,[Validators.required]],
      phone:[this.dialogConfig.data.user.phone,Validators.required],
      email:[this.dialogConfig.data.user.email,[Validators.email,Validators.required]],
      status:[this.dialogConfig.data.user.status]
    })
  }

  /**
   * on submit the form to send the value
   */
  onSubmit(){
    this.ref.close(this.form.value);
  }
}
