import { Component, OnInit } from "@angular/core";
import { PhotoService } from "../services/photo.service";

@Component({
  selector: "app-tab3",
  templateUrl: "./tab3.page.html",
  styleUrls: ["./tab3.page.scss"],
})
export class Tab3Page implements OnInit {
  constructor(private photoService: PhotoService) {}

  ngOnInit() {}

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
