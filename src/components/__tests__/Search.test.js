import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_RESTAURANT_LIST_DATA from "./mocks/restaurantListMock.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_RESTAURANT_LIST_DATA);
    },
  });
});

describe("Intergration test case for search functionality", () => {
  it("Should search restaurant list for burger input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeSearch = screen.getAllByTestId("restaurantCard");
    expect(cardsBeforeSearch.length).toBe(8);

    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("searchInput");

    fireEvent.change(searchInput, { target: { value: "burger" } });

    fireEvent.click(searchBtn);

    const cardsAfterSearch = screen.getAllByTestId("restaurantCard");

    expect(cardsAfterSearch.length).toBe(2);
  });

  it("Should search restaurant list for burger input", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );

    const cardsBeforeFilter = screen.getAllByTestId("restaurantCard");
    expect(cardsBeforeFilter.length).toBe(8);

    const topRatedbtn = screen.getByRole("button", {
      name: "Top Rated Restaurants",
    });
    fireEvent.click(topRatedbtn);

    const cardsAfterFilter = screen.getAllByTestId("restaurantCard");
    expect(cardsAfterFilter.length).toBe(4);
  });
});
