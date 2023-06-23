import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTeamComponent } from './admin-team.component';

describe('AdminTeamComponent', () => {
  let component: AdminTeamComponent;
  let fixture: ComponentFixture<AdminTeamComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminTeamComponent]
    });
    fixture = TestBed.createComponent(AdminTeamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
