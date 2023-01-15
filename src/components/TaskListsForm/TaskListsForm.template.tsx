import { TaskListsFormTemplateProps } from "./TaskListsForm.types";

const TaskListsForm = ({
  taskLists,
  catPicture,
}: TaskListsFormTemplateProps) => (
  <>
    {taskLists}
    {catPicture}
  </>
);

export default TaskListsForm;
