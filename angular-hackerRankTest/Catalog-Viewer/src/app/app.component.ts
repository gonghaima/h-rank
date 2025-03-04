import { Component, OnDestroy } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnDestroy {
  title = "Catalog Viewer";
  activeIndex: number = 0;
  slideDuration = 3000;
  slideShowEnabled = false;
  private slideShowInterval: any;

  catalogsList = [
    {
      thumb: "/assets/images/tea-light-candle.jpg",
      image: "/assets/images/tea-light-candle.jpg",
    },
    {
      thumb: "/assets/images/white-light-candle.jpg",
      image: "/assets/images/white-light-candle.jpg",
    },
    {
      thumb: "/assets/images/pink-light-candle.jpg",
      image: "/assets/images/pink-light-candle.jpg",
    },
    {
      thumb: "/assets/images/green-light-candle.jpg",
      image: "/assets/images/green-light-candle.jpg",
    },
  ];

  selectedCatalog(index: number) {
    this.activeIndex = index;
  }
  showPrevious() {
    if (this.activeIndex === 0) {
      this.activeIndex = this.catalogsList.length - 1;
    } else {
      this.activeIndex--;
    }
  }
  showNext() {
    if (this.activeIndex === this.catalogsList.length - 1) {
      this.activeIndex = 0;
    } else {
      this.activeIndex++;
    }
  }
  toggleSlideShow(checked: boolean) {
    this.slideShowEnabled = checked;
    if (this.slideShowEnabled) {
      this.slideShowInterval = setInterval(() => {
        this.showNext();
      }, this.slideDuration);
    } else {
      if (this.slideShowInterval) {
        clearInterval(this.slideShowInterval);
      }
    }
  }

  ngOnDestroy() {
    if (this.slideShowInterval) {
      clearInterval(this.slideShowInterval);
    }
  }
}
