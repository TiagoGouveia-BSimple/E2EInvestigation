import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonParentComponent } from './person-parent.component';

describe('PersonParentComponent', () => {
  let component: PersonParentComponent;
  let fixture: ComponentFixture<PersonParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
