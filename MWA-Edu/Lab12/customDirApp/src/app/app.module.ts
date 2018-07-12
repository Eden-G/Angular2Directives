import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ListComponent } from './list.component';
import { MyvisisbilityDirective } from './myvisisbility.directive';
import { MynewcolorDirective } from './mynewcolor.directive';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    MyvisisbilityDirective,
    MynewcolorDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

