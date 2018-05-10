import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForsexampleComponent } from './forsexample.component';

describe('ForsexampleComponent', () => {
  let component: ForsexampleComponent;
  let fixture: ComponentFixture<ForsexampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForsexampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForsexampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
