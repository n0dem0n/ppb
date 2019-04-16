import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab3aPage } from './tab3a.page';

describe('Tab3aPage', () => {
  let component: Tab3aPage;
  let fixture: ComponentFixture<Tab3aPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Tab3aPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Tab3aPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
