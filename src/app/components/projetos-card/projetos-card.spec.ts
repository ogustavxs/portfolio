import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosCard } from './projetos-card';

describe('ProjetosCard', () => {
  let component: ProjetosCard;
  let fixture: ComponentFixture<ProjetosCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
