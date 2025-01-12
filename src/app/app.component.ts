import { Component } from "@angular/core";
import { SplashScreen } from "@capacitor/splash-screen";

@Component({
  selector: "app-root",
  templateUrl: "app.component.html",
  styleUrls: ["app.component.scss"],
})
export class AppComponent {
  constructor() {
    SplashScreen.show();

    // Optional: Hide the splash screen after a delay (e.g., 3 seconds)
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000); // Adjust the duration as needed
  }
}
