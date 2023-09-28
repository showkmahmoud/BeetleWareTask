import { Component } from '@angular/core';
import { LANG_KEY, LangService } from './shared/services/lang.service';
import { Languages } from './shared/enums/langs.enums';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private languageService: LangService) {}

  ngOnInit(): void {
    if (!localStorage.getItem(LANG_KEY)) {
      this.languageService.changeLang(Languages.en);
    } else {
      this.languageService.changeLang(localStorage.getItem(LANG_KEY) as string);
    }
  }
}
