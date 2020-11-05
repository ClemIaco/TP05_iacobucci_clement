import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailComponent } from './detail.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SearchEngineRoutingModule } from '../search-engine/search-engine-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { DetailRoutingModule } from './detail-routing.module';
import { ProductListComponent } from '../product-list/product-list.component';
import { SearchEngineComponent } from '../search-engine/search-engine.component';
import { ApiService } from '../services/api.service';



@NgModule({
  declarations: [
    DetailComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    DetailRoutingModule,
    HttpClientModule
  ],
  providers: [
    ApiService
  ]
})
export class DetailModule { }
