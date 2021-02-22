import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupCardUserComponent } from './group-card-user.component';

describe('GroupCardUserComponent', () => {
  let component: GroupCardUserComponent;
  let fixture: ComponentFixture<GroupCardUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupCardUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupCardUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
