import { Component, OnInit, OnDestroy } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ProfileDataService } from '../../model/profile-data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit, OnDestroy {
  education: any;
  private dataSub?: Subscription;

  constructor(private sanitizer: DomSanitizer, private profileDataService: ProfileDataService) {}

  ngOnInit(): void {
    this.dataSub = this.profileDataService.data$.subscribe(data => {
      this.education = data?.Education || null;
      if (this.education?.Certifications) {
        this.education.Certifications = this.education.Certifications.map((cert: any) => ({
          ...cert,
          safeIcon: cert.icon ? this.sanitizer.bypassSecurityTrustHtml(cert.icon) : null
        }));
      }
    });
    if (!this.profileDataService.getData()) {
      this.profileDataService.loadData();
    }
  }

  ngOnDestroy(): void {
    this.dataSub?.unsubscribe();
  }
}
