import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  homeData: any;

  ngOnInit(): void { 
    const data = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')!) : null;
    this.homeData = data?.home || null;
  }

  ngAfterViewInit(): void { 
    this.generateContributionGraph();
  }

  generateContributionGraph(): void {
    const graphContainer = document.getElementById('graph-container');
    const daysInYear = 365;

    if (graphContainer) {
      for (let i = 0; i < daysInYear; i++) {
        const day = document.createElement('div');
        day.className = 'day w-3 h-3 md:w-4 md:h-4 rounded-sm';

        // Simulate contribution level (0-4)
        const level = Math.floor(Math.random() * 5);
        day.dataset['level'] = level.toString();

        graphContainer.appendChild(day);
      }
    }
  }
}
