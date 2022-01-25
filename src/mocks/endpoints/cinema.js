import { rest } from "msw";
import cinemaItems from "../dataBrowser/cinemaItems.js";

export const cinemaEndpoints = [
    rest.get("/api/cinemas", (req, res, ctx) => {
        return res(ctx.json(cinemaItems))
      }),
]