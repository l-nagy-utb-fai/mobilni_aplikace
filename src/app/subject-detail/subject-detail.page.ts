import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { UserPhoto } from "../services/photo.service";

@Component({
  selector: "app-subject-detail",
  templateUrl: "./subject-detail.page.html",
  styleUrls: ["./subject-detail.page.scss"],
})
export class SubjectDetailPage implements OnInit {
  photo?: UserPhoto;

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras.state?.["photo"]) {
      this.photo = JSON.parse(navigation?.extras.state?.["photo"]);
    }
  }

  ngOnInit() {}
}
