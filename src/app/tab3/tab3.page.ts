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

/* 
import { Component } from "@angular/core";
import { PredmetKatedry, StagService } from "../api/stag.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-tab3",
  templateUrl: "tab3.page.html",
  styleUrls: ["tab3.page.scss"],
})
export class Tab3Page {
  katedra: string = "";
  rok: string = "2024";

  data?: PredmetKatedry[];

  constructor(
    private stagService: StagService,
    private router: Router,
  ) {}

  async btnSearchClicked() {
    this.data = await this.stagService.fetchSubjectsByKatedra(
      this.katedra,
      this.rok,
    );
  }

  goToDetail(item: PredmetKatedry) {
    this.router.navigate(["/tabs/tab3/subject-detail"], { state: { item } });
  }
}
*/
