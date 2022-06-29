import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiHistoryComponent } from './sai-history.component';

describe('SaiHistoryComponent', () => {
  let component: SaiHistoryComponent;
  let fixture: ComponentFixture<SaiHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
