import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickingComponent } from './clicking.component';

describe('ClickingComponent', () => {
  let component: ClickingComponent;
  let fixture: ComponentFixture<ClickingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
