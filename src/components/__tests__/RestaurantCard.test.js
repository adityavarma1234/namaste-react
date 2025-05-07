import { render, screen } from "@testing-library/react";
import RestaurantCard, { withHighRatingLabel } from "../RestaurantCard";
import BURGER_KING_MOCK_DATA from "./mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

describe("test Restaurant Card", () => {
  it("Should render restaurant card with props data", () => {
    render(<RestaurantCard restaurantData={BURGER_KING_MOCK_DATA} />);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
  });

  it("should render restaurantcard with high rating label", () => {
    const RestaurantCardHighRating = withHighRatingLabel(RestaurantCard);

    render(<RestaurantCardHighRating restaurantData={BURGER_KING_MOCK_DATA} />);

    const label = screen.getByText("HighRated");
    expect(label).toBeInTheDocument();
  });
});
