import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WarnningComponent } from './warnning.component';

describe('WarnningComponent', () => {
  let component: WarnningComponent;
  let fixture: ComponentFixture<WarnningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WarnningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WarnningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
