import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProfileDataService } from '../../model/profile-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit, OnDestroy {
  homeData: any;
  private dataSub?: Subscription;

  constructor(private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.dataSub = this.profileDataService.data$.subscribe(data => {
      this.homeData = data?.home || null;
    });
    // If data is not loaded yet, trigger load
    if (!this.profileDataService.getData()) {
      this.profileDataService.loadData();
    }
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
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
