import { Component, tags } from "@odoo/owl";
import { Task } from "./Task";

const TODO_LIST_TEMPLATE = tags.xml /* xml */ `
<div class="todo-app">
  <div class="task-list">
    <t t-foreach="tasks" t-as="task" t-key="task.id">
        <Task task="task"/>
    </t>
  </div>
</div>
`;

export class ToDoList extends Component {
  tasks = [
    {
      id: 1,
      text: "buy milk",
      isCompleted: true,
    },
    {
      id: 2,
      text: "clean house",
      isCompleted: false,
    },
    {
      id: 3,
      text: "feed the dog",
      isCompleted: true,
    },
  ];
  static components = { Task };
  static template = TODO_LIST_TEMPLATE;
}
