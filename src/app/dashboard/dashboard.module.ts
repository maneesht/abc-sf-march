import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { Routes, RouterModule } from '@angular/router';
import { VideoDisplayComponent } from './video-display/video-display.component';
import { HttpClientModule } from '@angular/common/http';
import { VideoDataService } from './video-data.service';
let dashboardRoutes: Routes = [
  { path: '', component: VideoDashboardComponent }
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(dashboardRoutes),
    HttpClientModule
  ],
  declarations: [VideoDashboardComponent, VideoListComponent, VideoPlayerComponent, StatFiltersComponent, VideoDisplayComponent],
  providers: [ VideoDataService ]
})
export class DashboardModule { }
