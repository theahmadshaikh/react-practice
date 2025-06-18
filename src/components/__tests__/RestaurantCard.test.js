import { screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { renderWithRouter } from "./test-utils";
import RestaurantCard, { withPromoRestaurantCard } from "../RestaurantCard";

const mockProps = {
  id: "1",
  imgUrl: "https://example.com/image.jpg",
  restaurantName: "Tasty Treat",
  cuisine: "Indian",
  rating: 4.5,
  deliveryTime: 30,
};

describe("RestaurantCard", () => {
  test("renders restaurant details correctly", () => {
    renderWithRouter(<RestaurantCard {...mockProps} />);

    expect(screen.getByText(/Tasty Treat/i)).toBeInTheDocument();
    expect(screen.getByText(/Cuisine: Indian/i)).toBeInTheDocument();
    expect(screen.getByText(/Delivery Time: 30 mins/i)).toBeInTheDocument();
    expect(screen.getByText(/⭐ 4.5/i)).toBeInTheDocument();

    const image = screen.getByAltText(/Tasty Treat Logo/i);
    expect(image).toBeInTheDocument();
    expect(image).toHaveAttribute("src", mockProps.imgUrl);
  });

  test("navigates to correct restaurant URL", () => {
    renderWithRouter(<RestaurantCard {...mockProps} />);
    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/restaurants/1");
  });
});

describe("withPromoRestaurantCard", () => {
  const PromoCard = withPromoRestaurantCard(RestaurantCard);

  test("renders FEATURED ribbon", () => {
    renderWithRouter(<PromoCard {...mockProps} />);
    expect(screen.getByText(/FEATURED/i)).toBeInTheDocument();
  });

  test("renders wrapped RestaurantCard content", () => {
    renderWithRouter(<PromoCard {...mockProps} />);
    expect(screen.getByText(/Tasty Treat/i)).toBeInTheDocument();
  });
});
