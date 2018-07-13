import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ProductComponent} from "./product/product.component";
import {AppComponent} from './app.component';
import {ProductDetailComponent} from './product-detail/product-detail.component';
import {ProductSearchComponent} from './product-search/product-search.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import { MessageComponent } from './message/message.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule, Routes } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductSearchComponent,
    MessageComponent,
    DashboardComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
