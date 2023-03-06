import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PTBHComponent } from './ptbh.component';

describe('PTBHComponent', () => {
  let component: PTBHComponent;
  let fixture: ComponentFixture<PTBHComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PTBHComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PTBHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
