import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-profile-sidebar',
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.css'
})
export class ProfileSidebarComponent implements OnInit {
  profileData: any;
  private dataSub?: Subscription;

  constructor(private sidebarData: DataService, private router: Router) {}

  ngOnInit(): void {
    this.getSidebarData();
  }

  getSidebarData() {
    this.sidebarData.getProfile().subscribe((res: any) => {
      this.profileData = res;
    })
  }

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
