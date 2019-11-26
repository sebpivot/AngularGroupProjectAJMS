import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfUpdateComponent } from './prof-update.component';

describe('ProfUpdateComponent', () => {
  let component: ProfUpdateComponent;
  let fixture: ComponentFixture<ProfUpdateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfUpdateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
