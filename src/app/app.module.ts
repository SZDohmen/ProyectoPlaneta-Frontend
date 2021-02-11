import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home/home.component';
import {HttpClientModule} from '@angular/common/http';
import { PlanetaService } from './service/planeta.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { ModalComponent } from './modal/modal.component';
import { FilterPipe } from './pipe/filter.pipe';
import { DestroyedComponent } from './destroyed/destroyed.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    FilterPipe,
    DestroyedComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [PlanetaService, ModalComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
