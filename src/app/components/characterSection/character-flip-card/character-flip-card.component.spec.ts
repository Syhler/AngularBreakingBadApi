import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharacterFlipCardComponent } from './character-flip-card.component';

describe('FlipCardComponent', () => {
  let component: CharacterFlipCardComponent;
  let fixture: ComponentFixture<CharacterFlipCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharacterFlipCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterFlipCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
