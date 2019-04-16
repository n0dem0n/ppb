import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2cPage } from './tab2c.page';

describe('Tab2cPage', () => {
  let component: Tab2cPage;
  let fixture: ComponentFixture<Tab2cPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2cPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2cPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
