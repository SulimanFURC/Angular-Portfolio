import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private dataUrl = 'data.json'; // Correct path for Angular assets

  constructor(private http: HttpClient) {}

  private getData(): Observable<any> {
    return this.http.get<any>(this.dataUrl);
  }

  getProfile(): Observable<any> {
    return this.getData().pipe(map(data => data.profile));
  }

  getHome(): Observable<any> {
    return this.getData().pipe(map(data => data.home));
  }

  getAbout(): Observable<any> {
    return this.getData().pipe(map(data => data.about));
  }

  getExperience(): Observable<any> {
    return this.getData().pipe(map(data => data.experience));
  }

  getProjects(): Observable<any> {
    return this.getData().pipe(map(data => data.Projects));
  }

  getEducation(): Observable<any> {
    return this.getData().pipe(map(data => data.Education));
  }
}