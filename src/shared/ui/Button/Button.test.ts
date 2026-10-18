import { describe, expect, test, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import React from "react";
import { Button } from "./Button";

describe("Button", () => {
  test("renders a button", () => {
    render(
      React.createElement(
        Button,
        { size: "sm", form: "rounded", disabled: false },
        "test",
      ),
    );
    expect(screen.getByText("test")).toBeInTheDocument();
  });
  test("test disabled", () => {
    render(
      React.createElement(
        Button,
        { size: "sm", form: "rounded", disabled: true },
        "test",
      ),
    );
    expect(screen.getByText("test")).toBeDisabled();
  });
  test("call onClick", () => {
    const handleClick = vi.fn();
    render(
      React.createElement(
        Button,
        { size: "sm", form: "rounded", disabled: false, onClick: handleClick },
        "test",
      ),
    );
    fireEvent.click(screen.getByRole("button"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
