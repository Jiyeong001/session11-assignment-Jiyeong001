import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Container, Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import CustomSnackbar from "./components/CustomSnackbar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const [todos, setTodos] = useState([]);
  const [priority, setPriority] = useState("medium");
  const [inputValue, setInputValue] = useState("");
  const [showSnackbar, setShowSnackbar] = useState(false);
  const [lastAddedTodo, setLastAddedTodo] = useState("");

  // JSON 데이터 불러오기
  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTodos(data))
      .catch((err) => console.error("JSON 로드 실패", err));
  }, []);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handlePriorityChange = (e) => {
    setPriority(e.target.value);
  };

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      const newTodo = {
        task: inputValue,
        priority,
        isDone: false,
      };
      setTodos([...todos, newTodo]);
      setLastAddedTodo(inputValue);
      setInputValue("");
      setShowSnackbar(true);
    }
  };

  const toggleIsDone = (index) => {
    const updated = todos.map((todo, i) =>
      i === index ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updated);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          minHeight: "100vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Container
          maxWidth="md"
          sx={{
            py: 4,
            width: "60%",
            minWidth: "800px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            margin: "0 auto",
          }}
        >
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            align="center"
            fontWeight="bold"
          >
            NEXT Todo App
          </Typography>

          <TodoForm
            inputValue={inputValue}
            onInputChange={handleInputChange}
            priority={priority}
            onPriorityChange={handlePriorityChange}
            onAddTodo={handleAddTodo}
          />

          <TodoList todos={todos} toggleIsDone={toggleIsDone} />

          <CustomSnackbar
            open={showSnackbar}
            onClose={() => setShowSnackbar(false)}
            message={`✅ "${lastAddedTodo}" 추가됨!`}
          />
        </Container>
      </Box>
    </ThemeProvider>
  );
}

export default App;
