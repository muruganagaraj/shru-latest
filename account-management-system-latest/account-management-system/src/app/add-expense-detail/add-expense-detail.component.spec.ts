import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddExpenseDetailComponent } from './add-expense-detail.component';

describe('AddExpenseDetailComponent', () => {
  let component: AddExpenseDetailComponent;
  let fixture: ComponentFixture<AddExpenseDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddExpenseDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddExpenseDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
