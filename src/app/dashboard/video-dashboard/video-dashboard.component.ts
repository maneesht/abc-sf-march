import { Component, OnInit } from '@angular/core';
import { Video } from '../../models/video.interface';

@Component({
  selector: 'abc-video-dashboard',
  templateUrl: './video-dashboard.component.html',
  styleUrls: ['./video-dashboard.component.css']
})
export class VideoDashboardComponent implements OnInit {
  sendVideo: Video;
  constructor() { }

  ngOnInit() {
  }

  setVideo(video: Video) { //emitted video
    this.sendVideo = video;
    console.log(this.sendVideo);
  }

}
