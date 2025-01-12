import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { PhotoService } from "../services/photo.service";
import { UserPhoto } from "../services/photo.service";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  photos: UserPhoto[] = [];

  constructor(
    private photoService: PhotoService,
    private router: Router,
  ) {}
  async ngOnInit() {
    await this.photoService.loadSaved();
    this.photos = this.photoService.photos;
  }

  // Navigate to the photo detail page and pass the photo object
  viewPhotoDetail(photo: UserPhoto) {
    this.router.navigate(["/subject-detail"], {
      state: { photo: JSON.stringify(photo) }, // Pass the photo object as a string
    });
  }

  addPhotoToGallery() {
    this.photoService.addNewToGallery();
  }
}
