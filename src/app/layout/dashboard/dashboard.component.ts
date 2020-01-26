import { Component, OnInit, AfterViewInit, ViewChild } from "@angular/core";
import { routerTransition } from "../../router.animations";
import { Category } from "./../../modals/category";
import { Cartridge } from "./../../modals/cartridge";
import { DashbordService } from "./../../services/dashbord.service";

import {
  SwiperComponent,
  SwiperDirective,
  SwiperConfigInterface,
  SwiperScrollbarInterface,
  SwiperPaginationInterface
} from "ngx-swiper-wrapper";
import "swiper/dist/css/swiper.min.css";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  list_categories: Category[];
  list_cartriges: Cartridge[];

  public configurations: SwiperConfigInterface = {
    direction: "horizontal",
    slidesPerView: "auto",
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: true
  };

  public configurations2: SwiperConfigInterface = {
    slidesPerView: 5,
    spaceBetween: 0,
    pagination: {
      el: ".swiper-pagination"
    },
    breakpoints: {
      1024: {
        slidesPerView: 4,
        spaceBetween: 0
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 0
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 0
      },
      320: {
        slidesPerView: 2,
        spaceBetween: 0
      }
    }
  };

  constructor(private dashbordService: DashbordService) {}

  getCategories() {
    this.dashbordService.getCategories().subscribe(
      (data: any) => {
        this.list_categories = data.results.rows;
      },
      error => console.log(error)
    );
  }

  getCartriges() {
    this.dashbordService.getCartriges().subscribe(
      (data: any) => {
        this.list_cartriges = data.results.rows;
        console.log(data)
      },
      error => console.log(error)
    );
  }
  public randomize(): void {}

  ngOnInit() {
    this.getCategories();
    this.getCartriges();
    console.log(this.list_cartriges)

  }
}
