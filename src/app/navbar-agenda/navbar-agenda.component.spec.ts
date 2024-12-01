import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAgendaComponent } from './navbar-agenda.component';

describe('NavbarAgendaComponent', () => {
  let component: NavbarAgendaComponent;
  let fixture: ComponentFixture<NavbarAgendaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarAgendaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAgendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
