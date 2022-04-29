import { Component, tags } from "@odoo/owl";
import { Greeting } from "./components/Greeting";
import { ToDoList } from "./components/ToDoList";

const APP_TEMPLATE = tags.xml /* xml */ `
<main t-name="App" class="">
  <div>Click greeting to change.</div>
    <Greeting t-on-click="update"/>
  
  
  <div class="todo-app">
    <div>ToDo List</div>
    <input placeholder="Enter a new task" t-on-keyup="addTask" t-ref="add-input"/>
    <ToDoList/>
  </div>

</main>
`;


export class App extends Component {
  addTask(ev) {
    // 13 is keycode for ENTER
    if (ev.keyCode === 13) {
        const text = ev.target.value.trim();
        ev.target.value = "";
        console.log('adding task', text);
        // todo
    }
  }
  static components = { Greeting, ToDoList };
  static template = APP_TEMPLATE;
}
