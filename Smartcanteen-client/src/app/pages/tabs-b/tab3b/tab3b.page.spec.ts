import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3bPage } from './tab3b.page';

describe('Tab3bPage', () => {
  let component: Tab3bPage;
  let fixture: ComponentFixture<Tab3bPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3bPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3bPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
