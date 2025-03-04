
import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { Thumbs } from './thumbs/thumbs.component';
import { Viewer } from './viewer/viewer.component';
import { RouterModule } from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
@NgModule({
  declarations: [
    AppComponent,
    Viewer,
    Thumbs
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas : [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
