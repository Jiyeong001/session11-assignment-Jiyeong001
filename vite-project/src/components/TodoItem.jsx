import { ListItem, Checkbox, Typography } from "@mui/material";

export default function TodoItem({ todo, onToggle }) {
  return (
    <ListItem
      secondaryAction={<Checkbox checked={todo.isDone} onChange={onToggle} />}
      sx={{
        textDecoration: todo.isDone ? "line-through" : "none",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <Typography>
        {todo.task} <small style={{ opacity: 0.6 }}>({todo.priority})</small>
      </Typography>
    </ListItem>
  );
}
