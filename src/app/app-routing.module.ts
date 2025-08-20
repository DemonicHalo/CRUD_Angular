import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ListComponent } from "./list/list.component";
import { UpdateComponent } from "./update/update.component";

const routes: Routes = [
  { path: "list", component: ListComponent },
  { path: "update/:id", component: UpdateComponent },
  { path: "", redirectTo: "list", pathMatch: "full" },
  { path: "", component: ListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
