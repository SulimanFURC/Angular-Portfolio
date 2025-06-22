import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileDataService } from '../../model/profile-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit, OnDestroy {
  experience: any;
  private dataSub?: Subscription;

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.dataSub = this.profileDataService.data$.subscribe(data => {
      this.experience = data?.experience || null;
    });
    if (!this.profileDataService.getData()) {
      this.profileDataService.loadData();
    }
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }
}
