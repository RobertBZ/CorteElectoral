import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSentComponent } from './vote-sent.component';

describe('VoteSentComponent', () => {
  let component: VoteSentComponent;
  let fixture: ComponentFixture<VoteSentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
