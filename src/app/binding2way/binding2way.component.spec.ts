import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Binding2wayComponent } from './binding2way.component';

describe('Binding2wayComponent', () => {
  let component: Binding2wayComponent;
  let fixture: ComponentFixture<Binding2wayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Binding2wayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Binding2wayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
