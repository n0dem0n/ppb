import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPenjualPage } from './login-penjual.page';

describe('LoginPenjualPage', () => {
  let component: LoginPenjualPage;
  let fixture: ComponentFixture<LoginPenjualPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPenjualPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPenjualPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
