import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalRoomComponent } from './personal-room.component';

describe('PersonalRoomComponent', () => {
  let component: PersonalRoomComponent;
  let fixture: ComponentFixture<PersonalRoomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalRoomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
