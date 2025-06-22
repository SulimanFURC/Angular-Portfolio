import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class ProfileDataService {
  private dataSubject = new BehaviorSubject<any>(null);
  public data$: Observable<any> = this.dataSubject.asObservable();

  constructor(private http: HttpClient) {
    const cached = localStorage.getItem('profileData');
    if (cached) {
      this.dataSubject.next(JSON.parse(cached));
    } else {
      this.loadData();
    }
  }

  loadData() {
    this.http.get<any>('/data.json').pipe(
      tap(data => {
        localStorage.setItem('profileData', JSON.stringify(data));
        this.dataSubject.next(data);
      })
    ).subscribe();
  }

  getData() {
    return this.dataSubject.value;
  }
}
