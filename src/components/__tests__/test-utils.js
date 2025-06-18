// test-utils.js
import { BrowserRouter } from "react-router-dom";
import { render } from "@testing-library/react";

export const renderWithRouter = (ui) => render(<BrowserRouter>{ui}</BrowserRouter>);
