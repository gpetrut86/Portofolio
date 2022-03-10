import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pages: Pages = Pages.About;

  constructor() { }

  ngOnInit(): void {
  }

  isAbout() {
    return this.pages === Pages.About;
  }

  isProgrammer() {
    return this.pages === Pages.Programmer;
  }

  isArtist() {
    return this.pages === Pages.Artist;
  }

  isProjects() {
    return this.pages === Pages.Projects;
  }

  isPortofolio() {
    return this.pages === Pages.Portofolio;
  }

  setIsAbout() {
    this.pages = Pages.About;
  }

  setIsProgrammer() {
    this.pages = Pages.Programmer;
  }

  setIsArtist() {
    this.pages = Pages.Artist;
  }

  setIsProjects() {
    this.pages = Pages.Projects;
  }

  setIsPortofolio() {
    this.pages = Pages.Portofolio;
  }

}

export enum Pages {
  About,
  Programmer,
  Artist,
  Projects,
  Portofolio
}
