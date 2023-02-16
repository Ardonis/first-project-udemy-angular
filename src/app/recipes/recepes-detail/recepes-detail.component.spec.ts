import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepesDetailComponent } from './recepes-detail.component';

describe('RecepesDetailComponent', () => {
  let component: RecepesDetailComponent;
  let fixture: ComponentFixture<RecepesDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepesDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
