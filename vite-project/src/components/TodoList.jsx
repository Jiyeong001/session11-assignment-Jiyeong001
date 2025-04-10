import { List } from "@mui/material";
import TodoItem from "./TodoItem";

export default function TodoList({ todos, toggleIsDone }) {
  return (
    <List sx={{ mt: 4 }}>
      {todos.map((todo, index) => (
        <TodoItem key={index} todo={todo} onToggle={() => toggleIsDone(index)} />
      ))}
    </List>
  );
}
