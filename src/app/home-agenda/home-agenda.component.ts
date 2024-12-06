import { Component } from '@angular/core';
import { compromissos } from '../compromissos';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-agenda',
  templateUrl: './home-agenda.component.html',
  styleUrl: './home-agenda.component.css'
})
export class HomeAgendaComponent {

  Compromissos: compromissos [] = [];

  constructor(private service: AgendaService,
  private router: Router
  ){}

  ngOnInit(){
    this.loadCompromissos();
  }

  loadCompromissos(){
    this.service.getCompromissos().subscribe({
      next: data => this.Compromissos = data
    })
  };

}
