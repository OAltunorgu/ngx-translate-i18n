import { Component, VERSION } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  public title = `Angular ${VERSION.major} i18n with ngx-translate`;

  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(['tr', 'en']);
  }

  public onChange(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage);
  }
}
