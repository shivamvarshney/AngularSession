import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RajaniComponent } from './rajani.component';

describe('RajaniComponent', () => {
  let component: RajaniComponent;
  let fixture: ComponentFixture<RajaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RajaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RajaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
