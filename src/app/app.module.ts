import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { VjsPlayerComponent } from 'src/shared/videoPlayer.component';

@NgModule({
  declarations: [
    AppComponent,
    VjsPlayerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
