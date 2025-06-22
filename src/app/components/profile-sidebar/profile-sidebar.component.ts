import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile-sidebar',
  imports: [],
  templateUrl: './profile-sidebar.component.html',
  styleUrl: './profile-sidebar.component.css'
})
export class ProfileSidebarComponent {

  profileData: any;
  constructor(private http: HttpClient, private router: Router) {}

  
  ngOnInit(): void { 
    this.http.get<any>('/data.json').subscribe({
      next: (data) => {
        this.profileData = data?.profile;
        localStorage.setItem('profileData', JSON.stringify(data));
      },
      error: (error) => {
        console.error('Error fetching home data:', error);
      } 
    });
  } 

  navigateToContact() {
    this.router.navigate(['/contact']);
  }
}
