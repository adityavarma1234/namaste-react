import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/restaurantCardMock.json";
import "@testing-library/jest-dom";

describe("test Restaurant Card", () => {
  it("Should render restaurant card with props data", () => {
    render(<RestaurantCard restaurantData={MOCK_DATA} />);

    const name = screen.getByText("Burger King");

    expect(name).toBeInTheDocument();
  });
});
