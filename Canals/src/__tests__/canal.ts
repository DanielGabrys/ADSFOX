import axios from "axios";

import {CanalContext} from "../Components/Context/CanalContext"
import {useContext} from "react";
import {CanalContextType} from "../types/ContextCanal";



jest.mock("axios");

describe("fetchCanals", () => {

    describe("when API call fails", () => {
        it("should return empty users list", async () => {
            // given
            const message = "Network Error"
            const {getCanals} = useContext(CanalContext) as CanalContextType;
            (axios.get as jest.Mock).mockRejectedValueOnce(new Error(message));

            // when
            const result = await getCanals();

            // then
            expect(axios.get).toHaveBeenCalledWith('/users');
            expect(result).toEqual([]);
        });
    });
});
