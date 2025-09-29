import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-about',
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit {
  about: any;
  private dataSub?: Subscription;

  constructor(private aboutData: DataService) {}

  ngOnInit(): void {
    this.getAboutData();
  }

  getAboutData() {
    this.aboutData.getAbout().subscribe((res: any) => {
      this.about = res;
      console.log("About Data: ", this.about);
    })
    
  }
}
