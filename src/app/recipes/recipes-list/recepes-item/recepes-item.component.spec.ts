import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecepesItemComponent } from './recepes-item.component';

describe('RecepesItemComponent', () => {
  let component: RecepesItemComponent;
  let fixture: ComponentFixture<RecepesItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecepesItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecepesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
