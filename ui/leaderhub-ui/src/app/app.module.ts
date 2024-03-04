import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { BaseLayoutComponent } from './layout/base-layout/base-layout.component';
import { StatisticsComponent } from './views/statistics/statistics.component';
import { SettingsComponent } from './views/settings/settings.component';
import { LeaderboardsComponent } from './views/leaderboards/leaderboards.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatRippleModule } from '@angular/material/core';
import { FooterComponent } from './shared/components/footer/footer.component';
import { MatTableModule } from '@angular/material/table';
import { LeaderboardOverviewCardComponent } from './views/leaderboards/leaderboard-overview-card/leaderboard-overview-card.component';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { NgOptimizedImage } from '@angular/common';
import { GridComponent } from './shared/components/grid/grid.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    BaseLayoutComponent,
    StatisticsComponent,
    SettingsComponent,
    LeaderboardsComponent,
    FooterComponent,
    LeaderboardOverviewCardComponent,
    GridComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatSidenavModule,
    MatListModule,
    MatRippleModule,
    MatTableModule,
    MatCardModule,
    MatGridListModule,
    NgOptimizedImage
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
