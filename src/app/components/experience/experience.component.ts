import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {

  experience: any;  

  ngOnInit(): void { 
    const data = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')!) : null;
    this.experience = data?.experience || null;
  }
  
}
