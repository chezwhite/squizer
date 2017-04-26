import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule }         from '@angular/common';

import { MainAppComponent }      from './main-app/main-app.component';
import { TestsComponent }        from './main-app/tests/tests.component';
import { CoursesComponent }      from './main-app/courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: 'app',
    loadChildren: './main-app/main-app.module#MainAppModule'
  },
  { path: '',
    redirectTo: '/app/manage-tests',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
