import style from "./TaskItem.module.scss";
import { TaskItemTemplateProps } from "./TaskItem.types";

/**
 * The task item template component
 *
 * @param x - The component props
 * @returns The task item template component.
 *
 * @beta
 */
const TaskItem = ({
  isDone = false,
  isEditing,
  title,
  task,
  saveButton,
  deleteButton,
  onChangeTitle,
  onToggleEditing,
  onSubmit,
  onToggleTask,
}: TaskItemTemplateProps) => (
  <li
    className={style["task-item"]}
    onDoubleClick={isEditing ? undefined : onToggleEditing}
  >
    <input type="checkbox" checked={isDone} onChange={onToggleTask} />
    {isEditing ? (
      <form
        onSubmit={(e) => {
          e.preventDefault();
          onSubmit();
        }}
      >
        <input
          type="text"
          value={title}
          onChange={(e) => onChangeTitle(e.currentTarget.value)}
          className={style["task-item__input"]}
        />

        {saveButton}
        {deleteButton}
      </form>
    ) : (
      <>
        <span
          className={[
            style["task-item__title"],
            isDone ? style["task-item__title--done"] : "",
          ].join(" ")}
        >
          {task.title}
        </span>
      </>
    )}
  </li>
);

export default TaskItem;
