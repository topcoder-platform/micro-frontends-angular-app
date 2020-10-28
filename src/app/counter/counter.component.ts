
import { Component, OnDestroy, OnInit, NgZone } from '@angular/core';
import { Subscription } from 'rxjs';
import { MfContext, StoreManager, CounterStore } from 'tc-mfa-context';

@Component({
  selector: 'tc-ex-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit, OnDestroy {
  counterSub: Subscription;
  counterStore: CounterStore;
  counter: number;
  constructor(private zone: NgZone) {}

  ngOnInit(): void {
    if (this.counterSub == null || this.counterSub.closed) {
      const mfContext = new MfContext();
      const storeManager = mfContext.getStoreManager();
      this.counterStore = storeManager.getGlobalStore().counter;
      // Subscribe to global counter state
      this.counterSub = this.counterStore.subscribe((state) => {
        this.zone.run(() => {
          this.counter = state.counter;
        });
      });
    }
  }

  /**
   * Unsubscribe from global state on destroy lifecycle
   */
  ngOnDestroy(): void {
    this.counterSub.unsubscribe();
  }

  increment(): void {
    this.counterStore.setCounter(this.counter + 1);
  }

  decrement(): void {
    this.counterStore.setCounter(this.counter - 1);
  }
}
