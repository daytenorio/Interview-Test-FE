import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-buttons",
  templateUrl: "./buttons.component.html",
  styleUrls: ["./buttons.component.css"]
})
export class ButtonsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
  buttons = [
    {
      id: "buttonA",
      class: "red",
      text: "Button A",
      toolTip: { id: "tipA", isHidden: true, text: "First" }
    },
    {
      id: "buttonB",
      class: "blue",
      text: "Button B",
      toolTip: { id: "tipB", isHidden: true, text: "Second" }
    }
  ];

  onClickMe = (buttonId: string) => {
    this.hideToolTips();
    this.buttons.find(b => b.id === buttonId).toolTip.isHidden = false;
  };

  hideToolTips = () => {
    this.buttons
      .filter(b => !b.toolTip.isHidden)
      .forEach(button => {
        button.toolTip.isHidden = true;
      });
  };
}
