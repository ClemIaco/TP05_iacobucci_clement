import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { ProductState } from '../shared/states/product-state'
import { HttpClientModule } from '@angular/common/http'

import { AppComponent } from './app.component';
import { TetiereComponent } from './tetiere/tetiere.component';
import { FooterComponent } from './footer/footer.component';
import { NgxsModule } from '@ngxs/store';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { ApiService } from './services/api.service';

@NgModule({
  declarations: [
    AppComponent,
    TetiereComponent,
    FooterComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgxsModule.forRoot([ProductState]),
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
