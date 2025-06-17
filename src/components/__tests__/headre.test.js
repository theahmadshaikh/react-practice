import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";

// Helper function to wrap Header with required providers
const renderWithProviders = () =>
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

describe("Header Component", () => {
  beforeEach(() => {
    renderWithProviders();
  });

  test("should render header container with role banner", () => {
    const headerElement = screen.getByRole("banner");
    expect(headerElement).toBeInTheDocument();
  });

  test("should display the logo link with text 'MyShop'", () => {
    const logo = screen.getByRole("link", { name: /myshop/i });
    expect(logo).toBeInTheDocument();
  });

  test("should render navigation container with role navigation", () => {
    const nav = screen.getByRole("navigation");
    expect(nav).toBeInTheDocument();
  });

  test("should contain a 'Home' navigation link", () => {
    const homeLink = screen.getByRole("link", { name: /home/i });
    expect(homeLink).toBeInTheDocument();
  });

  test("should contain a 'About' navigation link", () => {
    const productsLink = screen.getByRole("link", { name: /about/i });
    expect(productsLink).toBeInTheDocument();
  });

  test("should contain a 'Contact' navigation link", () => {
    const contactLink = screen.getByRole("link", { name: /contact/i });
    expect(contactLink).toBeInTheDocument();
  });

  test("should render the cart button with cart icon", () => {
  
  const cartButton = screen.getByRole("button", { name: /cart/i });

  expect(cartButton).toBeInTheDocument();
});

});
