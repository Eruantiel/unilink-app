import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewLocationHistoryDialogComponent } from './view-location-history-dialog.component';

describe('ViewLocationHistoryDialogComponent', () => {
  let component: ViewLocationHistoryDialogComponent;
  let fixture: ComponentFixture<ViewLocationHistoryDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewLocationHistoryDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewLocationHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
