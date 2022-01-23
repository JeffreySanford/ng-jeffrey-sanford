import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSocialIconsComponent } from './social-icon.component';

describe('AppSocialIconsComponent', () => {
  let component: AppSocialIconsComponent;
  let fixture: ComponentFixture<AppSocialIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppSocialIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSocialIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
