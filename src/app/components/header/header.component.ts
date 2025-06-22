import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { path } from '../../model/routesPath';

@Component({
  selector: 'app-header',
  imports: [RouterModule, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  path = path;
  isMobileMenuOpen = false;

  constructor(private router: Router) {}


  navigateToHome() {
    this.router.navigate([path.HOME]);
  }

  navigateToAbout() {
    this.router.navigate([path.ABOUT]);
  }

  navigateToExperience() {
    this.router.navigate([path.EXPERIENCE]);
  }

  navigateToProject() {
    this.router.navigate([path.PROJECTS]);
  }

  navigateToEducation() {
    this.router.navigate([path.EDUCATION]);
  }

  navigateToContact() {
    this.router.navigate([path.CONTACT]);
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}
