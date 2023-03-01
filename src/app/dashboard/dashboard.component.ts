import { Component, OnInit, VERSION } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  i = 0;
  public title = `Angular ${VERSION.major} i18n with ngx-translate`;

  ngOnInit(): void {}
  constructor(public translateService: TranslateService) {
    this.translateService.addLangs(['tr', 'en']);
  }

  public onChange(selectedLanguage: string): void {
    this.translateService.use(selectedLanguage);
  }
}
