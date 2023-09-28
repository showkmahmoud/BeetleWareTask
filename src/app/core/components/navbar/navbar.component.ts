import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { AuthUser } from 'src/app/shared/enums/authenticatedUser';
import { Languages } from 'src/app/shared/enums/langs.enums';
import { Lang } from 'src/app/shared/interfaces/lang.interface';
import { LANG_KEY, LangService } from 'src/app/shared/services/lang.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  encapsulation:ViewEncapsulation.None,
})
export class NavbarComponent implements OnInit {
  languages: Lang[] = [];
  selectedLang: any='';
  currentLang!: string;

  constructor(
    private translateService: LangService,
    private translte: TranslateService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.selectedLang =
    (localStorage.getItem(LANG_KEY) as string) == Languages.ar ||
    !(localStorage.getItem(LANG_KEY) as string)
      ? Languages.ar
      : Languages.en;

  this.translateService.usedLangValue.subscribe((data: any) => {
    this.translte.use(data);
    this.languages = [
      {
        name:
          (localStorage.getItem(LANG_KEY) as string) == Languages.ar
            ? 'اللغة العربية'
            : Languages.arabic,
        value: Languages.ar,
      },
      {
        name:
          (localStorage.getItem(LANG_KEY) as string) == Languages.ar
            ? 'اللغة الانجليزية'
            : Languages.english,
        value: Languages.en,
      },
    ];
  });
  }

  onChangeLang(selectedLang?: string) {
    this.translateService.changeLang(
      String(selectedLang ? selectedLang : this.selectedLang)
    );
    this.currentLang = selectedLang ? String(selectedLang) : this.selectedLang;
    this.selectedLang = selectedLang ? String(selectedLang) : this.selectedLang;
  }

  onLogout(){
    localStorage.setItem(AuthUser.authUser , '');
    this.router.navigate(['/login'])
  }
}
