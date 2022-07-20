import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UniquelistComponent } from './uniquelist.component';

describe('UniquelistComponent', () => {
  let component: UniquelistComponent;
  let fixture: ComponentFixture<UniquelistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UniquelistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UniquelistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
