import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-projects',
  imports: [],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent implements OnInit {
  projects: any;
  private dataSub?: Subscription;

  constructor(private projectService: DataService) {}

  ngOnInit(): void {
    this.getProjects();
  }

  getProjects() {
    this.projectService.getProjects().subscribe((res: any) => {
      this.projects = res;
    })
  }
}
