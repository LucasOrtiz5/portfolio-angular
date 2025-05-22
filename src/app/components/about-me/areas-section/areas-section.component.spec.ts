import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AreasSectionComponent } from './areas-section.component';

describe('AreasSectionComponent', () => {
  let component: AreasSectionComponent;
  let fixture: ComponentFixture<AreasSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AreasSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AreasSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
