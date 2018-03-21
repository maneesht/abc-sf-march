import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../../models/video.interface';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'abc-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Output() selectedVideo = new EventEmitter<Video>();
  videoList = [];
  currentVideo;
  constructor(private http: HttpClient) { }
  isActive(video) {
    return this.currentVideo === video; //moved to a function for unit testability purposes
  }
  setHighlight(video) {
    if(this.currentVideo === video) {
      this.currentVideo = undefined;
    } else {
      this.currentVideo = video;
    }
    this.selectedVideo.emit(this.currentVideo);
  }

  ngOnInit() {
    this.http.get<Video[]>('https://api.angularbootcamp.com/videos')
      .subscribe(videos => this.videoList = videos);
  }

}
