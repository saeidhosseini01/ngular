import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbserverTestComponent } from './abserver-test.component';

describe('AbserverTestComponent', () => {
  let component: AbserverTestComponent;
  let fixture: ComponentFixture<AbserverTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbserverTestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbserverTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
