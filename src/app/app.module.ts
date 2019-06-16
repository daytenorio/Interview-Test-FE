import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToolTipComponent } from './tool-tip/tool-tip.component';
import { ButtonsComponent } from './buttons/buttons.component';

@NgModule({
  declarations: [
    AppComponent,
    ToolTipComponent,
    ButtonsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
