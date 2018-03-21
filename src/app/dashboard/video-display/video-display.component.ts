import { Component, Input, OnInit } from '@angular/core';

import { Video } from '../../models/video.interface';
@Component({
  selector: 'abc-video-display',
  templateUrl: './video-display.component.html',
  styleUrls: ['./video-display.component.css']
})
export class VideoDisplayComponent implements OnInit {
  @Input() video: Video;
  constructor() { }

  ngOnInit() {
  }

}
