import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  companyName: String = 'Company Name';
  fullDate: Date = new Date();
  copyrightYear: number;

  constructor(public route: ActivatedRoute) {
    this.copyrightYear = this.fullDate.getFullYear();
  }
}
