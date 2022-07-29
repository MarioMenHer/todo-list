import { Box } from "@chakra-ui/react";
import { TaskBox, TaskForm } from "../components/Index";

const MainPage = () => {
  return (
    <>
      <Box
        minH={{ base: "100vh" }}
        display={"center"}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Box>
          <TaskBox />
          <TaskForm />
        </Box>
      </Box>
    </>
  );
};

export default MainPage;
