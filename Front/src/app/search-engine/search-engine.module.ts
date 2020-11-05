import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from '../product-list/product-list.component';
import { SearchEngineComponent } from './search-engine.component';
import { DetailComponent } from '../detail/detail.component';
import { SearchEngineRoutingModule } from './search-engine-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../services/api.service';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    SearchEngineComponent,
    ProductListComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SearchEngineRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class SearchEngineModule { }
