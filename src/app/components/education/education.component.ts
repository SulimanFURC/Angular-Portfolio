import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {
  education: any;
  private dataSub?: Subscription;

  constructor(private sanitizer: DomSanitizer, private educationService: DataService) {}

  ngOnInit(): void {
    this.getEducation();
  }

  getEducation() {
    this.educationService.getEducation().subscribe((res: any) => {
      this.education = res;
       if (this.education?.Certifications) {
        this.education.Certifications = this.education.Certifications.map((cert: any) => ({
          ...cert,
          safeIcon: cert.icon ? this.sanitizer.bypassSecurityTrustHtml(cert.icon) : null
        }));
      }
    })
  }
}
