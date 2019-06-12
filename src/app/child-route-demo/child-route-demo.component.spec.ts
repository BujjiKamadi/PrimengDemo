import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildRouteDemoComponent } from './child-route-demo.component';

describe('ChildRouteDemoComponent', () => {
  let component: ChildRouteDemoComponent;
  let fixture: ComponentFixture<ChildRouteDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildRouteDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildRouteDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
