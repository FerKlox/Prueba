import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InvoiceListComponent} from "./invoices/components/invoice-list/invoice-list.component";

const routes: Routes = [
  {path:'invoice', component: InvoiceListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
