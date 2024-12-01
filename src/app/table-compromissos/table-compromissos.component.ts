import { Component } from '@angular/core';
import { compromissos } from '../compromissos';
import { AgendaService } from '../agenda.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table-compromissos',
  templateUrl: './table-compromissos.component.html',
  styleUrl: './table-compromissos.component.css'
})
export class TableCompromissosComponent {

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

    delete(Compromissos: compromissos){
      this.service.delete(Compromissos).subscribe({
        next: () => this.loadCompromissos()
      })
    };

    create(){
      this.router.navigate(['compromisso'])
    };


}
