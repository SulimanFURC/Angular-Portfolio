import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileDataService } from '../../model/profile-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit, OnDestroy {
  projects: any;
  private dataSub?: Subscription;

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.dataSub = this.profileDataService.data$.subscribe(data => {
      this.projects = data?.Projects || null;
    });
    if (!this.profileDataService.getData()) {
      this.profileDataService.loadData();
    }
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }
}
