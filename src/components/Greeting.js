import { Component, useState, tags } from "@odoo/owl";

const GREETING_TEMPLATE = tags.xml /* xml */ `
<span t-name="Greeting" class="" t-on-click="update">
  Hello <t t-esc="state.text"/>
</span>
`;

export class Greeting extends Component {
  static template = GREETING_TEMPLATE;
  state = useState({ text: "Owl" });
  update() {
    this.state.text = this.state.text === "Owl" ? "World" : "Owl";
  }
}
