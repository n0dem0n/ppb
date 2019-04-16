import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PembeliPage } from './pembeli.page';

describe('PembeliPage', () => {
  let component: PembeliPage;
  let fixture: ComponentFixture<PembeliPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PembeliPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PembeliPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
