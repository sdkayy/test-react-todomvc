import * as React from "react";
import TodoItem from "./components/TodoItem";
import {
  AppContainer,
  TodoListContainer,
  TitleBar,
  Card,
  NewItemArea,
  Input,
  Button
} from "./style";
import { v4 as uuid } from "uuid";

interface IItem {
  id: string;
  isDone: boolean;
  title: string;
}

interface State {
  items: IItem[];
  title: string;
}

class Todo extends React.Component<any, State> {
  public state: State = {
    items: [],
    title: ""
  };

  public removeItem = (item: IItem) => {
    const { items } = this.state;
    this.setState({
      items: items.filter(i => i.id !== item.id)
    });
  };

  public addItem = () => {
    const { items, title } = this.state;
    this.setState({
      title: "",
      items: [...items, { id: uuid(), title, isDone: false }]
    });
  };

  public handleKeyDown = (e: any) => {
    if (e.key === "Enter") {
      this.addItem();
    }
  };

  public changeTitle = (e: any) => {
    const title = e.target.value;
    this.setState({
      title
    });
  };

  public markDone = (item: IItem) => {
    const { items } = this.state;
    this.setState({
      items: items.map(i => {
        if (i.id === item.id) {
          return { ...i, isDone: !i.isDone };
        } else {
          return i;
        }
      })
    });
  };

  public render() {
    const { items, title } = this.state;
    return (
      <AppContainer>
        <Card>
          <TitleBar>
            Todo List: {items.length} {items.length === 1 ? "item" : "items"}
          </TitleBar>
          <NewItemArea>
            <Input
              placeholder={"Item title"}
              onChange={this.changeTitle}
              onKeyDown={this.handleKeyDown}
              value={title}
            />
            <Button onClick={this.addItem} radius={"0 6px 6px 0"}>
              &#x002b;
            </Button>
          </NewItemArea>
          <TodoListContainer>
            {items &&
              items.map(i => (
                <TodoItem
                  title={i.title}
                  onRemove={() => this.removeItem(i)}
                  onMarkedDone={() => this.markDone(i)}
                  isDone={i.isDone}
                />
              ))}
          </TodoListContainer>
        </Card>
      </AppContainer>
    );
  }
}

export default Todo;
