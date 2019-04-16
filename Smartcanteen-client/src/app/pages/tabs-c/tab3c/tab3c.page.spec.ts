import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3cPage } from './tab3c.page';

describe('Tab3cPage', () => {
  let component: Tab3cPage;
  let fixture: ComponentFixture<Tab3cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3cPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
