import { Component, tags } from "@odoo/owl";
import { Greeting } from "./components/Greeting";
import { ToDoList } from "./components/ToDoList";

const APP_TEMPLATE = tags.xml /* xml */ `
<main t-name="App" class="">
  <div>Click greeting to change.</div>
    <Greeting t-on-click="update"/>
  
  <div>ToDo List</div>
    <ToDoList/>

</main>
`;

export class App extends Component {
  static template = APP_TEMPLATE;
  static components = { Greeting, ToDoList };
}
