import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetosBadge } from './projetos-badge';

describe('ProjetosBadge', () => {
  let component: ProjetosBadge;
  let fixture: ComponentFixture<ProjetosBadge>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjetosBadge]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProjetosBadge);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
