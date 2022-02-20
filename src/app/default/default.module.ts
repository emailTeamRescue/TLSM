import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { HomeComponent } from './home/home.component';
import { CoursesComponent } from './courses/courses.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    HomeComponent, 
    CoursesComponent
  ],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    SharedModule
  ],
  providers: [
  ]
})
export class DefaultModule { }
