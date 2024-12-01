import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAgendaComponent } from './home-agenda/home-agenda.component';
import { TableCompromissosComponent } from './table-compromissos/table-compromissos.component';
import { FormCompromissosComponent } from './form-compromissos/form-compromissos.component';

const routes: Routes = [
  { path: '', redirectTo:'/home', pathMatch:'full'},
  { path: 'home', component: HomeAgendaComponent},
  { path: 'compromissos', component: TableCompromissosComponent},
  { path: 'compromissos/:id', component: FormCompromissosComponent},
  { path: 'compromisso', component: FormCompromissosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
