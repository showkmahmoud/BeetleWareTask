import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Languages } from 'src/app/shared/enums/langs.enums';
import { UserStatus } from 'src/app/shared/enums/userStatus';
import {
  getAppLanguage,
  getCurrentLang,
} from 'src/app/shared/services/appLanguage';
import { LANG_KEY, LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent {
  form: any = new FormGroup({});
  currentLang: string = '';
  statuses: any[] = [];

  constructor(
    private translateService: LangService,
    private translte: TranslateService,
    public ref: DynamicDialogRef,
    private dialogConfig: DynamicDialogConfig,
    public formBuilder: FormBuilder
  ) {}
  ngOnInit(): void {
    getAppLanguage(this.translte, this.translateService);
    this.currentLang = getCurrentLang(this.translateService);
    if (this.dialogConfig.data.status == 'update') {
      this.onCreateUpdateUserForm();
    } else {
      this.onCreateAddingUserForm();
    }
    this.statuses = [
      {
        name:
          (localStorage.getItem(LANG_KEY) as string) == Languages.ar
            ? 'نشط'
            : 'Active',
        value: UserStatus.active,
      },
      {
        name:
        (localStorage.getItem(LANG_KEY) as string) == Languages.ar
            ? 'غير نشط':
        'Soft_Delete',
        value: UserStatus.softDeleted,
      },
    ];
  }
  ngDoCheck(): void {
    this.currentLang = getCurrentLang(this.translateService);
  }

  get formControls() {
    return this.form.controls;
  }
  /**
   * to create the add form group
   */
  onCreateAddingUserForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      phone: ['', Validators.required],
      email: ['', [Validators.email, Validators.required]],
      status: [UserStatus.active],
    });
  }
  /**
   * to create the edit form group
   */
  onCreateUpdateUserForm() {
    this.form = this.formBuilder.group({
      name: [this.dialogConfig.data.user.name, [Validators.required]],
      phone: [this.dialogConfig.data.user.phone, Validators.required],
      email: [
        this.dialogConfig.data.user.email,
        [Validators.email, Validators.required],
      ],
      status: [this.dialogConfig.data.user.status],
    });
  }

  /**
   * on submit the form to send the value
   */
  onSubmit() {
    this.ref.close(this.form.value);
  }
}
