import { Component,OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AgendaService } from '../agenda.service';

@Component({
  selector: 'app-form-compromissos',
  templateUrl: './form-compromissos.component.html',
  styleUrl: './form-compromissos.component.css'
})
export class FormCompromissosComponent implements OnInit{

  formGroupCompromissos: FormGroup;
  isEditing: boolean = false;

    constructor(private router: Router,
                private activatedRouter: ActivatedRoute,
                private service: AgendaService,
                private formbuilder: FormBuilder
                ){
                  this.formGroupCompromissos = formbuilder.group({
                    id:                [''],
                    title:             [''],
                    description:       [''],
                    compromissoDate:   [''],
                    startTime:         [''],
                    endTime:           [''],
                    local:             [''],
                    compromissoStatus: [''],
                    priority:          ['']
                  })
                };

   ngOnInit(): void {
   const id = Number(this.activatedRouter.snapshot.paramMap.get("id"))
     if(id != 0){   
    this.LoadCompromissos(id);
     this.isEditing = true;  
     }
   }

    LoadCompromissos(id: number){
      this.service.getCompromissosById(id).subscribe({
        next: data => this.formGroupCompromissos.setValue(data)
      })
    };

    update(){
      this.service.update(this.formGroupCompromissos.value).subscribe({
        next: () => this.router.navigate(['compromissos'])
      })
    }

    save(){
      const titulo = this.formGroupCompromissos.get('title')?.value;
      if ( !titulo || titulo.trim() === "" ){
        alert("Verifique o titulo")
      }
      else{
      this.service.save(this.formGroupCompromissos.value).subscribe({
        next: () => this.router.navigate([`/compromissos`])
      })
    }
  }

}