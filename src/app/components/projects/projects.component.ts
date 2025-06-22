import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  
  projects: any;

  ngOnInit(): void {
    const data = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')!) : null;
    this.projects = data?.Projects || null;
  }
}
