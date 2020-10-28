import { Component } from '@angular/core';
import {MfContext, StoreManager} from 'tc-mfa-context';

@Component({
  selector: 'tc-ex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-mf-example';
  constructor() {
  }

}
