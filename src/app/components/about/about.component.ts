import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {

  about: any;

  ngOnInit(): void { 
    const data = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')!) : null;
    this.about = data?.about || null;
  }
  
}
