import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { TabsPage } from "./tabs.page";

const routes: Routes = [
  {
    path: "tabs",
    component: TabsPage,
    children: [
      {
        path: "tab2",
        loadChildren: () =>
          import("../tab2/tab2.module").then((m) => m.Tab2PageModule),
      },
      {
        path: "tab3",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../tab3/tab3.module").then((m) => m.Tab3PageModule),
          },
          {
            path: "subject-detail",
            loadChildren: () =>
              import("../subject-detail/subject-detail.module").then(
                (m) => m.SubjectDetailPageModule,
              ),
          },
        ],
      },
      {
        path: "",
        redirectTo: "/tabs/tab2",
        pathMatch: "full",
      },
    ],
  },
  {
    path: "",
    redirectTo: "/tabs/tab2",
    pathMatch: "full",
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
