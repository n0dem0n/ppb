import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab2aPage } from './tab2a.page';

describe('Tab2aPage', () => {
  let component: Tab2aPage;
  let fixture: ComponentFixture<Tab2aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab2aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab2aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
