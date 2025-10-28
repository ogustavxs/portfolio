import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillsItem } from './skills-item';

describe('SkillsItem', () => {
  let component: SkillsItem;
  let fixture: ComponentFixture<SkillsItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SkillsItem]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SkillsItem);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
