import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExhaspamComponent } from './exhaspam.component';

describe('ExhaspamComponent', () => {
  let component: ExhaspamComponent;
  let fixture: ComponentFixture<ExhaspamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExhaspamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExhaspamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
