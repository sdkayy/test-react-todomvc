import * as React from "react";
import { TodoItemContainer, TodoTitle, Button } from "../style";

interface Props {
  title: string;
  isDone: boolean;
  onMarkedDone: any;
  onRemove: any;
}

class TodoItem extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
  }

  public render() {
    const { title, onMarkedDone, isDone, onRemove } = this.props;
    return (
      <TodoItemContainer>
        <Button onClick={onMarkedDone} radius={" 6px 0 0 6px"}>
          {isDone ? "Undo" : "Done"}
        </Button>
        <TodoTitle isDone={isDone}>{title}</TodoTitle>
        <Button onClick={onRemove} isDanger={true} radius={"0 6px 6px 0"}>
          X
        </Button>
      </TodoItemContainer>
    );
  }
}

export default TodoItem;
