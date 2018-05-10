import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentnewComponent } from './parentnew.component';

describe('ParentnewComponent', () => {
  let component: ParentnewComponent;
  let fixture: ComponentFixture<ParentnewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentnewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentnewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
