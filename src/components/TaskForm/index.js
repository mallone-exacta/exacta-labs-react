import * as S from "./styles";

import Input from "../Input";
import Button from "../Button";

function TaskForm({ value, onChange, onClick }) {
  return (
    <form onSubmit={(event) => event.preventDefault()}>
      <Input value={value} onChange={onChange} />

      <Button onClick={onClick}>Adicionar task</Button>
    </form>
  );
}

export default TaskForm;
