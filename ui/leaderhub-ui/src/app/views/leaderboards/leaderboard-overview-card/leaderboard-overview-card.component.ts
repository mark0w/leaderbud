import { Component, Input, OnInit } from '@angular/core';
import { LeaderboardOverview } from '../../../models/leaderboard.model';

@Component({
  selector: 'app-leaderboard-overview-card',
  templateUrl: './leaderboard-overview-card.component.html',
  styleUrls: ['./leaderboard-overview-card.component.scss']
})
export class LeaderboardOverviewCardComponent implements OnInit {
  @Input() leaderboard!: LeaderboardOverview;

  constructor() {
  }

  ngOnInit(): void {
    console.log(this.leaderboard)
    this.leaderboard.imageUrl = "assets/test-images/image%20(2).png"
    this.leaderboard.backgroundUrl = "assets/test-images/image%20(1).png"
  }
}
