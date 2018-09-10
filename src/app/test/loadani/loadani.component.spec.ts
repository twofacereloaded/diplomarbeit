import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadaniComponent } from './loadani.component';

describe('LoadaniComponent', () => {
  let component: LoadaniComponent;
  let fixture: ComponentFixture<LoadaniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadaniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadaniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
