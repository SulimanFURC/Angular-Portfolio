import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-experience',
  imports: [],
  templateUrl: './experience.component.html',
  styleUrl: './experience.component.css'
})
export class ExperienceComponent implements OnInit {
  experience: any;
  private dataSub?: Subscription;

  constructor(private experienceService: DataService) {}

  ngOnInit(): void {
    this.getExperience();
  }

  getExperience() {
    this.experienceService.getExperience().subscribe((res: any) => {
      this.experience = res;
    })
  }
}
