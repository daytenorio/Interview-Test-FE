import { Component, HostListener, ViewChild } from "@angular/core";
import { Button } from "protractor";
import { ButtonsComponent } from "./buttons/buttons.component";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "Interview-Test-FE";
  @ViewChild(ButtonsComponent) private buttons: ButtonsComponent;
  constructor(private sanitizer: DomSanitizer) {}
  @HostListener("document:keyup", ["$event"]) handleKeyUp(event: {
    keyCode: number;
  }) {
    if (event.keyCode === 27) this.buttons.hideToolTips();
  }

  @HostListener("document:click", ["$event.target.localName"]) onClick(
    targetElement: string
  ) {
    if (targetElement !== "button") this.buttons.hideToolTips();
  }
}
