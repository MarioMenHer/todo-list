import { Flex, Select, Text } from "@chakra-ui/react";
import React, { ChangeEvent, useContext } from "react";
import { TasksContext } from "../../context/TasksContext";

export const TaskFilter = () => {
  const { setFilterStatus, filterStatus } = useContext(TasksContext);

  const handleFilter = (event: ChangeEvent<HTMLSelectElement>) => {
    return setFilterStatus(event.currentTarget.value);
  };

  return (
    <Flex alignItems={"center"} gap="35">
      <Text>Mostrar</Text>
      <Select
        maxWidth={"20vh"}
        onChange={(e: ChangeEvent<HTMLSelectElement>) => handleFilter(e)}
        value={filterStatus}
      >
        <option value="toda">Todas</option>
        <option value="Completa">Completadas</option>
        <option value="Incompleta"> Incompletas</option>
      </Select>
    </Flex>
  );
};
