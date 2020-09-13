import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlexBabacaComponent } from './alex-babaca.component';

describe('AlexBabacaComponent', () => {
  let component: AlexBabacaComponent;
  let fixture: ComponentFixture<AlexBabacaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlexBabacaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlexBabacaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
