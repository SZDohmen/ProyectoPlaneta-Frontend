import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyedComponent } from './destroyed.component';

describe('DestroyedComponent', () => {
  let component: DestroyedComponent;
  let fixture: ComponentFixture<DestroyedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestroyedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
