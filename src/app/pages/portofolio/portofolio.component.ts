import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portofolio',
  templateUrl: './portofolio.component.html',
  styleUrls: ['./portofolio.component.css']
})
export class PortofolioComponent implements OnInit {

  constructor() { }

  imagePath: string;
  isActive = false;

  images: Array<string> = [
    '/assets/portofolioImages/mod4.jpg',
    '/assets/portofolioImages/mod5.jpg',
    '/assets/portofolioImages/pub3.jpg',
    '/assets/portofolioImages/URZprezena.jpg',
    '/assets/portofolioImages/DOBROGEA.png',
    '/assets/portofolioImages/3.1.png',
    '/assets/portofolioImages/OrdinulDragonului1.png',
    '/assets/portofolioImages/Logo.png',
    '/assets/portofolioImages/megafon3.png',
    '/assets/portofolioImages/metafizic.png',
    '/assets/portofolioImages/abex.png',
    '/assets/portofolioImages/5.1.png',


  ]

  ngOnInit(): void {
  }


  activeModal(image: HTMLImageElement): void {
    this.isActive = true;
    this.imagePath = image.src;
  }

  closeModal(): void {
    this.isActive = false;
  }

}
