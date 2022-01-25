import { rest } from "msw";
import films from "../dataBrowser/films.js";

export const filmsEndpoints = [
    rest.get("/api/films", (req, res, ctx) => {
        return res(ctx.json(films))
    }),
]