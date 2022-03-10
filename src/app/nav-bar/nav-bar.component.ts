import { Component, OnInit } from '@angular/core';
import { faDownload } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  faDownload = faDownload;
  constructor() { }

  isActive: boolean = false;

  ngOnInit(): void {
  }

  onBurgerClick() {
    this.isActive = !this.isActive;
  }

}
