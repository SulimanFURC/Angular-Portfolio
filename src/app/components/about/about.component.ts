import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileDataService } from '../../model/profile-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit, OnDestroy {
  about: any;
  private dataSub?: Subscription;

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.dataSub = this.profileDataService.data$.subscribe(data => {
      this.about = data?.about || null;
    });
    if (!this.profileDataService.getData()) {
      this.profileDataService.loadData();
    }
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }
}
