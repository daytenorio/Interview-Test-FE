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

  onClick = (buttonId: string) => {
    const toolTipStatus = this.buttons.find(b => b.id === buttonId).toolTip
      .isHidden;

    this.buttons.find(b => b.id !== buttonId).toolTip.isHidden = true;
    this.buttons.find(b => b.id === buttonId).toolTip.isHidden = !toolTipStatus;
  };

  hideToolTips = () => {
    this.buttons
      .filter(b => !b.toolTip.isHidden)
      .forEach(button => {
        button.toolTip.isHidden = true;
      });
  };
}
