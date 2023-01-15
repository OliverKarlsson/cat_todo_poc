import style from "./TaskLists.module.scss";
import { TaskListsTemplateProps } from "./TaskLists.types";

const TaskListsTemplate = ({
  todos,
  dones,
  todoAdder,
  taskListsSaver,
}: TaskListsTemplateProps) => (
  <div className={style["tasks-lists__container"]}>
    <div className={style["tasks-lists__header"]}>
      <h1>Kat todo app</h1>
      {todoAdder}
      {taskListsSaver}
      <hr />
    </div>

    <ul className={style["tasks-lists"]}>
      <h2>Todos:</h2>
      {todos}
    </ul>
    <ul className={`${style["tasks-lists"]} ${style["tasks-lists--done"]}`}>
      <h2>Well dones:</h2>
      {dones}
    </ul>
  </div>
);

export default TaskListsTemplate;
