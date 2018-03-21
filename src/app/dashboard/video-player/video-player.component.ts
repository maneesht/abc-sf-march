import { Component, OnInit, Input } from '@angular/core';
import { Video } from '../../models/video.interface';

@Component({
  selector: 'abc-video-player',
  templateUrl: './video-player.component.html',
  styleUrls: ['./video-player.component.css']
})
export class VideoPlayerComponent implements OnInit {
  @Input() video: Video;
  constructor() { }

  ngOnInit() {
  }

}
