import { setupWorker, rest } from "msw";
import films from "./dataBrowser/films.js";
import cinemaItems from "./dataBrowser/cinemaItems.js";

const worker = setupWorker(
    rest.get("/api/films", (req, res, ctx) => {
        return res(ctx.json(films))
    }),
    rest.get("/api/cinemas", (req, res, ctx) => {
      return res(ctx.json(cinemaItems))
  }),

);


worker.start();