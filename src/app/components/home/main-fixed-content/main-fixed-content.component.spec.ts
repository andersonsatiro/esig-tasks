import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainFixedContentComponent } from './main-fixed-content.component';

describe('MainFixedContentComponent', () => {
  let component: MainFixedContentComponent;
  let fixture: ComponentFixture<MainFixedContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainFixedContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainFixedContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
