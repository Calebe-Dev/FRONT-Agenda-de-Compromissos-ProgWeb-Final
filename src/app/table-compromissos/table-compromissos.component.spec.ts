import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableCompromissosComponent } from './table-compromissos.component';

describe('TableCompromissosComponent', () => {
  let component: TableCompromissosComponent;
  let fixture: ComponentFixture<TableCompromissosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TableCompromissosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TableCompromissosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
