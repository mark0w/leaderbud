import { Component, OnInit } from '@angular/core';
import { LeaderboardOverview } from '../../models/leaderboard.model';

@Component({
  selector: 'app-leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {
  leaderboards: LeaderboardOverview[] = []


  ngOnInit(): void {
    this.leaderboards = [
      {
        leaderboardId: '1',
        title: 'Test Leaderboard',
        description: 'This is a test leaderboard overview',
        showParticipantCount: true,
        participantCount: 100,
        imageUrl: '',
      },
      {
        leaderboardId: '2',
        title: 'Test Leaderboard 2',
        description: 'This is a test leaderboard overview',
        showParticipantCount: true,
        participantCount: 100,
        imageUrl: '',
      },
      {
        leaderboardId: '3',
        title: 'Test Leaderboard 3',
        description: 'This is a test leaderboard overview',
        showParticipantCount: true,
        participantCount: 100,
        imageUrl: '',
      },
      {
        leaderboardId: '4',
        title: 'Test Leaderboard 4',
        description: 'This is a test leaderboard overview',
        showParticipantCount: true,
        participantCount: 100,
        imageUrl: '',
      },
      // ... other leaderboards
    ];


    this.leaderboards.push()
  }

}
