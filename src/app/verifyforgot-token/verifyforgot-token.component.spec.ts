import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerifyforgotTokenComponent } from './verifyforgot-token.component';

describe('VerifyforgotTokenComponent', () => {
  let component: VerifyforgotTokenComponent;
  let fixture: ComponentFixture<VerifyforgotTokenComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerifyforgotTokenComponent]
    });
    fixture = TestBed.createComponent(VerifyforgotTokenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
