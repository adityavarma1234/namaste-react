import { act } from "react-dom/test-utils";
import RestaurantMenu from "../RestaurantMenu";
import { fireEvent, render, screen } from "@testing-library/react";
import MOCK_RESTAURANT_MENU from "./mocks/restaurantMenuMock.json";
import appStore from "../../utils/appStore";
import { Provider } from "react-redux";
import Header from "../Header";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => Promise.resolve(MOCK_RESTAURANT_MENU),
  });
});

describe("test cart functionality", () => {
  it("Should load restaurant menu component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );

    const cartBeforeAdd = screen.getByText("Cart - (0 items)");
    expect(cartBeforeAdd).toBeInTheDocument();

    const accordionHeader = screen.getByText("Mehfil Special Combo (5)");
    fireEvent.click(accordionHeader);

    const foodItems = screen.getAllByTestId("foodItems");
    expect(foodItems.length).toBe(5);

    const addBtns = screen.getAllByRole("button", { name: "Add +" });
    fireEvent.click(addBtns[0]);

    const cartAfterAdd = screen.getByText("Cart - (1 items)");
    expect(cartAfterAdd).toBeInTheDocument();
  });
});
