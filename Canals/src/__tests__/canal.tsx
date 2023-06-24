import axios from "axios";

import App from "../App";
import {CanalContext} from "../Components/Context/CanalContext"
import {useContext} from "react";
import {CanalContextType} from "../types/ContextCanal";
import {render,screen} from "@testing-library/react";
import {add} from "../assets/nb";



//const {getCanals} = useContext(CanalContext) as CanalContextType;

jest.mock("axios");



test('renders learn react link', () => {
    // Arrange: We get ready the testing environment, and rendering the component;
   // render(<App/>)

    // Act: Look for the anticipated link..
    const linkElement = screen.getByText(/learn react/i);

    // Assert: check that the document contains the necessary link.
    expect(linkElement).toBeInTheDocument();
});




describe('add function', () => {
    describe('when given to integers', () => {
        it("should return a add result", () => {
            // Arrange: Prepare the expected add result and the function arguments.
            // In this example 5 + 8 === 13:
            const [a, b, expected] = [5, 8, 13];

            // Here, we assign "a === 5," "b === 8," and "expected === 13" using array destructuring.

            // Act: To obtain a true function result, utilise the "add" function.
            const result = add(a, b);

            // Assert: Now a function's output is compared to the expected result.
            expect(result).toEqual(expected);
        });
    })
})

/*
describe("when API call fails", () => {
            it("should return empty users list", async () => {
                // given
                const message = "Network Error";
                (axios.get as jest.Mock).mockRejectedValueOnce(new Error(message));

                // when
                const result = await getCanals();

                // then
                expect(axios.get).toHaveBeenCalledWith('/users');
                expect(result).toEqual([]);
            });
        });

*/
