import { Component, OnInit } from '@angular/core';
import { setAppMenu } from '@topcoder/micro-frontends-navbar-app';
import appMenu from './constants/appMenu';

@Component({
  selector: 'tc-ex-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'micro-frontends-angular-app';

  ngOnInit(): void {
    // when app starts it should set its side menu structure
    setAppMenu('/micro-frontends-angular-route', appMenu);
  }
}
