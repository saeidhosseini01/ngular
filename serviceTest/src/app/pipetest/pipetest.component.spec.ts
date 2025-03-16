import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipetestComponent } from './pipetest.component';

describe('PipetestComponent', () => {
  let component: PipetestComponent;
  let fixture: ComponentFixture<PipetestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PipetestComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PipetestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
