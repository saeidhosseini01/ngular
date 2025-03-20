import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompairComponent } from './compair.component';

describe('CompairComponent', () => {
  let component: CompairComponent;
  let fixture: ComponentFixture<CompairComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CompairComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
