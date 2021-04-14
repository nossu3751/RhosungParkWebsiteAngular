import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkDisplayCardsComponent } from './work-display-cards.component';

describe('WorkDisplayCardsComponent', () => {
  let component: WorkDisplayCardsComponent;
  let fixture: ComponentFixture<WorkDisplayCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkDisplayCardsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkDisplayCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
