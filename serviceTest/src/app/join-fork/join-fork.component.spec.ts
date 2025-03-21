import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinForkComponent } from './join-fork.component';

describe('JoinForkComponent', () => {
  let component: JoinForkComponent;
  let fixture: ComponentFixture<JoinForkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinForkComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JoinForkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
