import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { LandingComponent } from './landing/landing.component';
import { LeaderboardsComponent } from './views/leaderboards/leaderboards.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { SettingsComponent } from './views/settings/settings.component';

const routes: Routes = [
  {
    path: '',
    component: BaseLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'landing',
        pathMatch: 'full',
      },
      {
        path: 'landing',
        component: LandingComponent,
      },
      {
        path: 'leaderboards',
        component: LeaderboardsComponent,
      },
      {
        path: 'statistics',
        component: StatisticsComponent,
      },
      {
        path: 'settings',
        component: SettingsComponent,
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
