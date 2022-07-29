import { ChakraProvider } from "@chakra-ui/react";
import { TasksProvider } from "./context/TasksContext";
import MainPage from "./pages/MainPage";

function App() {
  return (
    <>
      <ChakraProvider>
        <TasksProvider>
          <MainPage />
        </TasksProvider>
      </ChakraProvider>
    </>
  );
}

export default App;
