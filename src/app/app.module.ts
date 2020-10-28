import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { CounterComponent } from './counter/counter.component';
import { AuthDetailsComponent } from './auth-details/auth-details.component';

@NgModule({
  declarations: [
    AppComponent,
    EmptyRouteComponent,
    CounterComponent,
    AuthDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
