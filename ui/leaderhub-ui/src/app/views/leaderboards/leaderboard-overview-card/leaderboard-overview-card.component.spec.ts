import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaderboardOverviewCardComponent } from './leaderboard-overview-card.component';

describe('LeaderboardOverviewCardComponent', () => {
  let component: LeaderboardOverviewCardComponent;
  let fixture: ComponentFixture<LeaderboardOverviewCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LeaderboardOverviewCardComponent]
    });
    fixture = TestBed.createComponent(LeaderboardOverviewCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
