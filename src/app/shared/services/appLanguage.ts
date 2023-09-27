import { TranslateService } from '@ngx-translate/core';
import { LangService } from './lang.service';

export function getAppLanguage(
  translte: TranslateService,
  trnaslateService: LangService
) {
  trnaslateService.usedLangValue.subscribe((data: any) => {
    translte.use(data);
  });
}

export function getCurrentLang(trnaslateService: LangService): string {
  let currentLang = '';
  trnaslateService.usedLangValue.subscribe((data: any) => {
    currentLang = data;
  });
  return currentLang;
}
