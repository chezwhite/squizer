import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TestsComponent } from './tests.component';
import { SchoolYearComponent } from './school-year/school-year.component';
import { NewTestComponent } from './school-year/call/new-test/new-test.component';
import { TestDetailComponent } from './school-year/call/list-tests/test-detail/test-detail.component';
import { CallComponent } from './school-year/call/call.component';

const testsRoutes: Routes = [
  { path: '', redirectTo: '/manage-tests', pathMatch: 'full' },
  {
    path: '',
    component: TestsComponent,
    children: [
      { path: 'school-year', redirectTo: '/manage-tests', pathMatch: 'full' },
      {
        path: 'school-year/:syId',
        component: SchoolYearComponent,
        children: [
          { path: 'call', redirectTo: '/manage-tests', pathMatch: 'full' },
          { path: 'call/:callId', component: CallComponent },
        ]
      },
      { path: 'school-year/:syId/call/:callId/new-test', component: NewTestComponent },
      { path: 'school-year/:syId/call/:callId/test', redirectTo: '/manage-tests', pathMatch: 'full' },
      { path: 'school-year/:syId/call/:callId/test/:id', component: TestDetailComponent }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forChild(testsRoutes) ],
  exports: [ RouterModule ]
})
export class TestsRoutingModule {}