import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainUi } from './main.ui';

describe('MainUi', () => {
  let component: MainUi;
  let fixture: ComponentFixture<MainUi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainUi ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainUi);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
