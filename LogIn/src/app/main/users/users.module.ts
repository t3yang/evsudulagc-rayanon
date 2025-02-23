import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { RoutesModule } from './routes.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './Pages/login/login.component';
import { DetailComponent } from './Pages/detail/detail.component';



@NgModule({
  declarations: [ LoginComponent, DetailComponent ],
  imports: [
    CommonModule,
    MaterialModule,
    RoutesModule,
    ReactiveFormsModule
  ]
})
export class UsersModule { }
