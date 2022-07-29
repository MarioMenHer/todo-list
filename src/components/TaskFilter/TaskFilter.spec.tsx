import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { TaskFilter } from "./TaskFilter";

describe("Make Sure Component works", () => {
  it("Render component", () => {
    render(<TaskFilter />);
  });

  it("Show Only text render", () => {
    render(<TaskFilter />);
    expect(screen.getByText("Mostrar")).toBeInTheDocument();
  });

  it("Tasks text render", () => {
    render(<TaskFilter />);
    expect(screen.getByText("Tareas")).toBeInTheDocument();
  });

  it("Render values", () => {
    render(<TaskFilter />);
    expect(screen.getByText("todas")).toBeTruthy();
    expect(screen.getByText("Incompletas")).toBeTruthy();
    expect(screen.getByText("Completas")).toBeTruthy();
  });
});
