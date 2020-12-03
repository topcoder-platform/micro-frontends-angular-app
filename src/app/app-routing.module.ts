import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { AuthDemoComponent } from './auth-demo/auth-demo.component';
import { NoSidebarDemoComponent } from './no-sidebar-demo/no-sidebar-demo.component';
import { APP_BASE_HREF } from '@angular/common';

const routes: Routes = [
  { path: 'micro-frontends-angular-route/auth', component: AuthDemoComponent },
  { path: 'micro-frontends-angular-route/no-sidebar', component: NoSidebarDemoComponent },
  { path: '**', component: EmptyRouteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' }
  ],
})
export class AppRoutingModule { }
