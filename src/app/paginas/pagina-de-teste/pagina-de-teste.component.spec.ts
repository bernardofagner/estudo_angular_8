import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaDeTesteComponent } from './pagina-de-teste.component';

describe('PaginaDeTesteComponent', () => {
  let component: PaginaDeTesteComponent;
  let fixture: ComponentFixture<PaginaDeTesteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaDeTesteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaDeTesteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
