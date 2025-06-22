import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-education',
  imports: [],
  templateUrl: './education.component.html',
  styleUrl: './education.component.css'
})
export class EducationComponent implements OnInit {

  education: any;

  constructor(private sanitizer: DomSanitizer) {

  }

  ngOnInit(): void {
    const data = localStorage.getItem('profileData') ? JSON.parse(localStorage.getItem('profileData')!) : null;
    this.education = data?.Education || null;
    if (this.education?.Certifications) {
      this.education.Certifications = this.education.Certifications.map((cert: any) => ({
        ...cert,
        safeIcon: cert.icon ? this.sanitizer.bypassSecurityTrustHtml(cert.icon) : null
      }));
    }

  }
}
