import { Component, HostListener, ViewChild } from "@angular/core";
import { Button } from "protractor";
import { ButtonsComponent } from "./buttons/buttons.component";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Interview-Test-FE";
  @ViewChild(ButtonsComponent) private buttons: ButtonsComponent;

  @HostListener("document:keyup", ["$event"]) handleKeyUp(event: {
    keyCode: number;
  }) {
    if (event.keyCode === 27) this.buttons.hideToolTips();
  }
}
