import { useState } from "react";
import * as S from "./styles";

import Input from "../Input";
import Button from "../Button";

function TaskForm({ onSubmit }) {
  const [value, setValue] = useState("");

  function onChange(event) {
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();

    onSubmit(value);

    setValue("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <Input value={value} onChange={onChange} />

      <Button>Adicionar task</Button>
    </form>
  );
}

export default TaskForm;
