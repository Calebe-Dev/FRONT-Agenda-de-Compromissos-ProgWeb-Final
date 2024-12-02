import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeAgendaComponent } from './home-agenda/home-agenda.component';
import { NavbarAgendaComponent } from './navbar-agenda/navbar-agenda.component';
import { TableCompromissosComponent } from './table-compromissos/table-compromissos.component';
import { FormCompromissosComponent } from './form-compromissos/form-compromissos.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeAgendaComponent,
    NavbarAgendaComponent,
    TableCompromissosComponent,
    FormCompromissosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
