import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskDataBoxComponent } from './task-data-box.component';

describe('TaskDataBoxComponent', () => {
  let component: TaskDataBoxComponent;
  let fixture: ComponentFixture<TaskDataBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaskDataBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskDataBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
