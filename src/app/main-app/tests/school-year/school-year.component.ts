import { Component, EventEmitter } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { SchoolYear } from '../../db/school-year';
import { SchoolYearService } from '../../db/school-year.service';
import { TestsSideNavService } from '../tests-sidenav/tests-sidenav.service';

import { NotificationsService } from 'angular2-notifications';

@Component({
  selector: 'app-school-year',
  templateUrl: './school-year.component.html',
  styleUrls: ['./school-year.component.css']
})
export class SchoolYearComponent {
  schoolYear: SchoolYear = null;
  schoolYearId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private notificationsService: NotificationsService,
    private schoolYearService: SchoolYearService,
    private testsSideNavService: TestsSideNavService
  ) {
    this.activatedRoute.params.subscribe((params: Params) => {
       this.schoolYearId = params['syId'];
       this.getSchoolYear(this.schoolYearId);
     });
  }

  getSchoolYear(id: number) {
    this.schoolYearService.getSchoolYear(id)
    .then(schoolYear => {
      this.schoolYear = schoolYear;
      this.testsSideNavService.announceSelected(schoolYear.id, null);
    })
    .catch(() => this.notificationsService.error('Error', 'Al descargar los datos del curso.'));
  }

}
