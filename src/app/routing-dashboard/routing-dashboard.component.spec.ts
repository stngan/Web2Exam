import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoutingDashboardComponent } from './routing-dashboard.component';

describe('RoutingDashboardComponent', () => {
  let component: RoutingDashboardComponent;
  let fixture: ComponentFixture<RoutingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoutingDashboardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoutingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
