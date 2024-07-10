import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterComponent } from './component/counter/counter.component';
import { FormComponent } from './component/form/form.component';
import { AccordionComponent } from './component/accordion/accordion.component';
import { NotesComponent } from './component/notes/notes.component';

//Array of Routes in application
const routes: Routes = [
//   {path: 'Counter',
// component: CounterComponent
//     },
//     {path: 'contact', component: FormComponent},
//     {path: 'Accordion', component: AccordionComponent},
//     {path: 'Notes', component: NotesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }