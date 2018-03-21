import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Video } from '../../models/video.interface';
import { HttpClient } from '@angular/common/http';
import { VideoDataService } from '../video-data.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'abc-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {
  @Output() selectedVideo = new EventEmitter<Video>();
  videoList: Observable<Video[]>;
  currentVideo;
  constructor(private http: HttpClient, private videoDataService: VideoDataService) { }
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
    this.videoList = this.videoDataService.getData();
  }

}
