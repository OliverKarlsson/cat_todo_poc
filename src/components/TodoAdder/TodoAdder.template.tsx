import { TodoAdderTemplateProps } from "./TodoAdder.types";

const TodoAdderTemplate = ({
  title,
  addButton,
  onChangeTitle,
}: TodoAdderTemplateProps) => {
  return (
    <>
      <input
        value={title}
        onChange={(e) => {
          onChangeTitle(e.target.value);
        }}
      />
      {addButton}
    </>
  );
};

export default TodoAdderTemplate;
