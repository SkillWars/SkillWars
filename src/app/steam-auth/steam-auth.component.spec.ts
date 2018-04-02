import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SteamAuthComponent } from './steam-auth.component';

describe('SteamAuthComponent', () => {
  let component: SteamAuthComponent;
  let fixture: ComponentFixture<SteamAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SteamAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SteamAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
