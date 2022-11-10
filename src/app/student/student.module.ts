import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { StudentsComponent } from './students/students.component';
import {AppRoutingModule} from "../app-routing.module";



@NgModule({
  declarations: [
    CreateComponent,
    UpdateComponent,
    StudentsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class StudentModule { }
