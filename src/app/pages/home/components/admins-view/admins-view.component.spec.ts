import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminsViewComponent } from './admins-view.component';

describe('AdminsViewComponent', () => {
  let component: AdminsViewComponent;
  let fixture: ComponentFixture<AdminsViewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminsViewComponent]
    });
    fixture = TestBed.createComponent(AdminsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
