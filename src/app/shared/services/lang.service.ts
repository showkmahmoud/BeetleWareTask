
import { Injectable, Injector } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { BehaviorSubject } from 'rxjs';
import { DOCUMENT } from '@angular/common';
import { Languages } from '../enums/langs.enums';

export const LANG_KEY = 'beetleWareLanguage';

@Injectable({
  providedIn: 'root'
})
export class LangService {

    // to use the document to control in the direction
    private readonly document!: Document;
    // to use the used language globally and subscribe on it
    private usedLang: any = new BehaviorSubject(
      !(localStorage.getItem(LANG_KEY) as string)
        ? Languages.ar
        : (localStorage.getItem(LANG_KEY) as string)
    );
    usedLangValue = this.usedLang.asObservable();

    constructor(private translate: TranslateService, injector: Injector) {
      this.document = injector.get(DOCUMENT);
      // // to set the language to arabic globally
      // translate.setDefaultLang(Languages.ar);
      // translate.use(Languages.ar);
    }
    changeLang(lang: string) {
      localStorage.setItem(LANG_KEY, String(lang));

      this.translate.use(lang);

      this.usedLang.next(lang);

      this.document
        .getElementById('htmlParentItem')!
        .setAttribute('dir', lang === Languages.ar ? 'rtl' : 'ltr');
    }
}
