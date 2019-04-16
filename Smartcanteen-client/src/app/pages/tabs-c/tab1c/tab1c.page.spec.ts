import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab1cPage } from './tab1c.page';

describe('Tab1cPage', () => {
  let component: Tab1cPage;
  let fixture: ComponentFixture<Tab1cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab1cPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab1cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
