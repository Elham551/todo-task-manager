import React from "react";
import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";
import { SelectedItemProvider } from "../contexts/SelectedItemContext";

beforeAll(() => {
  Object.defineProperty(global, 'crypto', {
    value: {
      randomUUID: () => "test-id-123"
    },
  });
});

const renderWithProvider = () => {
  return render(
    <SelectedItemProvider>
      <App />
    </SelectedItemProvider>
  );
};

describe("TodoApp", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("renders app", () => {
    const app = renderWithProvider();
    expect(app).not.toBeUndefined();
  });

  it("renders initial items", () => {
    renderWithProvider();
    expect(screen.getByText("Buy milk")).toBeInTheDocument();
    expect(screen.getByText("Buy bread")).toBeInTheDocument();
  });

  it("adds new todo item", () => {
    renderWithProvider();
    const input = screen.getByPlaceholderText("Add new todo...");
    const button = screen.getByRole("button", { name: "+" });

    fireEvent.change(input, { target: { value: "Test new task" } });
    fireEvent.click(button);

    expect(screen.getByText("Test new task")).toBeInTheDocument();
  });

  it("toggles todo item as done", () => {
    renderWithProvider();
    const checkbox = screen.getAllByRole("checkbox")[1];
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
  });

  it("deletes a todo item", () => {
    renderWithProvider();
    const deleteButton = screen.getAllByText("Delete")[0];
    fireEvent.click(deleteButton);
    expect(screen.queryByText("Buy milk")).not.toBeInTheDocument();
  });
});
