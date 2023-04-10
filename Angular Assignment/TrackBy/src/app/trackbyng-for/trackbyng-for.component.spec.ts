import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackbyngForComponent } from './trackbyng-for.component';

describe('TrackbyngForComponent', () => {
  let component: TrackbyngForComponent;
  let fixture: ComponentFixture<TrackbyngForComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrackbyngForComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrackbyngForComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
