import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatalogosComponent } from './views/catalogos/catalogos.component';
import { RolesComponent } from './views/catalogos/roles/roles.component';

@NgModule({
  declarations: [
    AppComponent,
    CatalogosComponent,
    RolesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
