import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { faDownload, faMailBulk, faEnvelope, faMobile, faHome, faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  faDownload = faDownload;
  faContact = faMailBulk;
  faEnvelope = faEnvelope;
  faMobile = faMobile;
  faHome = faHome;
  faArrowCircleRight = faArrowCircleRight;

  isContact = false;

  @Output() onProjects = new EventEmitter;
  constructor() { }

  ngOnInit(): void {
  }

  setIsContact() {
    this.isContact = !this.isContact;
  }

  onProjectsClick() {
    this.onProjects.emit(null);
  }


}
