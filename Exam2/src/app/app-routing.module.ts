import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PhoneAuthComponent } from "./+phone-auth/phone-auth.component";
import { MathComponent } from "./+math/math.component";
import { BouncedComponent } from "./+bounced/bounced.component";
import { PageNotFoundComponent } from "./+page-not-found/page-not-found.component";
import { MathGuard } from "./services/math.guard";

const routes: Routes = [
  { path: '', pathMatch: 'full', component: PhoneAuthComponent },
  { path: 'math/:first/:second', component: MathComponent, canActivate: [MathGuard] },
  { path: 'bounced', component: BouncedComponent },
  // { path: 'math/:notFound', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
