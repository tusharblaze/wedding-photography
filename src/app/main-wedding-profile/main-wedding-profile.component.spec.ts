import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainWeddingProfileComponent } from './main-wedding-profile.component';

describe('MainWeddingProfileComponent', () => {
  let component: MainWeddingProfileComponent;
  let fixture: ComponentFixture<MainWeddingProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainWeddingProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainWeddingProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
