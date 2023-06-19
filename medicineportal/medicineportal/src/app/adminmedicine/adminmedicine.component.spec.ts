import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminmedicineComponent } from './adminmedicine.component';

describe('AdminmedicineComponent', () => {
  let component: AdminmedicineComponent;
  let fixture: ComponentFixture<AdminmedicineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminmedicineComponent]
    });
    fixture = TestBed.createComponent(AdminmedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
