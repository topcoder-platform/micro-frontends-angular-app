import { ChangeDetectorRef, Component, OnInit, NgZone } from '@angular/core';
import { MfContext } from 'tc-mfa-context';

@Component({
  selector: 'tc-ex-auth-details',
  templateUrl: './auth-details.component.html',
  styleUrls: ['./auth-details.component.scss']
})
export class AuthDetailsComponent implements OnInit {
  authState: any;
  constructor(private zone: NgZone) {
   }

  ngOnInit(): void {
    const mfContext = new MfContext();
    const storeManager = mfContext.getStoreManager();
    const authStore = storeManager.getGlobalStore().auth;
    authStore.subscribe((authState) => {
      // Global state is out of zone.js scope so we need to update value in zone.
      this.zone.run(() => {
        this.authState = authState;
      });
    });
  }
}
