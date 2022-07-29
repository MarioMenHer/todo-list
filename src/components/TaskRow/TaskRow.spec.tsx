import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskRow } from "./TaskRow";

describe("Make Sure Component works", () => {
  it("Render component with due props", () => {
    render(
      <TaskRow
        tasksDetail={{
          id: "1",
          assignedTo: "Jest",
          description: "Testing",
          executionDate: "27/07/22",
          isCompleted: false,
          name: "Test Task",
        }}
      />
    );
  });

  it("Show Props on render", () => {
    render(
      <TaskRow
        tasksDetail={{
          id: "1",
          assignedTo: "Jest",
          description: "Testing",
          executionDate: "27/07/22",
          isCompleted: false,
          name: "Test Task",
        }}
      />
    );
    expect(screen.getByText("Test Task")).toBeTruthy();
    expect(screen.getByText("Testing")).toBeTruthy();
    expect(screen.getByText("27/07/22")).toBeTruthy();
  });
});
