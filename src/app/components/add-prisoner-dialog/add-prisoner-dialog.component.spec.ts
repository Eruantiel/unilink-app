import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPrisonerDialogComponent } from './add-prisoner-dialog.component';

describe('AddPrisonerDialogComponent', () => {
  let component: AddPrisonerDialogComponent;
  let fixture: ComponentFixture<AddPrisonerDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddPrisonerDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddPrisonerDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
