import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PenjualPage } from './penjual.page';

describe('PenjualPage', () => {
  let component: PenjualPage;
  let fixture: ComponentFixture<PenjualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PenjualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PenjualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
