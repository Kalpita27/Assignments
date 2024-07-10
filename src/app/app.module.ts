import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';

import { CounterComponent } from './component/counter/counter.component';
import { AccordionComponent } from './component/accordion/accordion.component';
import { FormComponent } from './component/form/form.component';
import { NotesComponent } from './component/notes/notes.component';
import { NavbarComponent } from './component/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    CounterComponent,
    FormComponent,
    AccordionComponent,
    NotesComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    RouterModule,
    BrowserAnimationsModule,
    MatButtonModule,
   ReactiveFormsModule,
   FormsModule
   
  ],
 
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
