import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../models/video.interface';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class VideoDataService {

  constructor(private http: HttpClient) { }
  getData(): Observable<Video[]> {
    return this.http.get<Video[]>('https://api.angularbootcamp.com/videos');
  }

}
