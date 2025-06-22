import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ProfileDataService } from '../../model/profile-data.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.css'
})
export class ProfileSidebarComponent implements OnInit, OnDestroy {
  profileData: any;
  private dataSub?: Subscription;

  constructor(private profileDataService: ProfileDataService, private router: Router) {}

  ngOnInit(): void {
    this.dataSub = this.profileDataService.data$.subscribe(data => {
      this.profileData = data?.profile || null;
    });
    if (!this.profileDataService.getData()) {
      this.profileDataService.loadData();
    }
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
