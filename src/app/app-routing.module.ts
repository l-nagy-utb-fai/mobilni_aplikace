import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { Tab2Page } from "./tab2/tab2.page";
import { SubjectDetailPage } from "./subject-detail/subject-detail.page"; // Import SubjectDetailPage

const routes: Routes = [
  {
    path: "",
    loadChildren: () =>
      import("./tabs/tabs.module").then((m) => m.TabsPageModule),
  },
  {
    path: "tabs/tab2",
    component: Tab2Page,
  },
  {
    path: "subject-detail",
    component: SubjectDetailPage, // Ensure this route is defined
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
