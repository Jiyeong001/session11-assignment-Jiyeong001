import { TextField, Button, MenuItem, Box } from "@mui/material";

export default function TodoForm({
  inputValue,
  onInputChange,
  priority,
  onPriorityChange,
  onAddTodo,
}) {
  return (
    <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
      <TextField
        label="할 일"
        variant="outlined"
        fullWidth
        value={inputValue}
        onChange={onInputChange}
      />
      <TextField
        select
        label="우선순위"
        value={priority}
        onChange={onPriorityChange}
        sx={{ minWidth: 120 }}
      >
        <MenuItem value="high">High</MenuItem>
        <MenuItem value="medium">Medium</MenuItem>
        <MenuItem value="low">Low</MenuItem>
      </TextField>
      <Button variant="contained" onClick={onAddTodo}>
        추가
      </Button>
    </Box>
  );
}
