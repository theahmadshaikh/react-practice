import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';

import Contact from "../Contact";


describe("Contact Component", () => {
  test("contact component should rendered", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading", { name: /contact us/i });
    expect(heading).toBeInTheDocument();
  })

  test("should load button inside contatc component", () => {
    render(<Contact />);
    const button = screen.getByRole("button", { name: /send message/i });
    expect(button).toBeInTheDocument();
  })

  test("should load input fields inside contact component", () => {
    render(<Contact />);
    const nameInput = screen.getByPlaceholderText(/your name/i);
    const emailInput = screen.getByPlaceholderText(/you@example.com/i);
    const subjectInput = screen.getByPlaceholderText(/subject of your message/i);
    const messageInput = screen.getByPlaceholderText(/write your message here.../i);
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(subjectInput).toBeInTheDocument();
    expect(messageInput).toBeInTheDocument();
    expect(nameInput).toHaveValue("");
    expect(emailInput).toHaveValue("");
    expect(subjectInput).toHaveValue("");
    expect(messageInput).toHaveValue("");
  });
});
