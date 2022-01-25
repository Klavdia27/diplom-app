import { setupWorker } from "msw";

import { authEndpoints } from "./endpoints/auth.js";
import { filmsEndpoints } from "./endpoints/films.js";
import { cinemaEndpoints } from "./endpoints/cinema.js";

const worker = setupWorker(
    ...authEndpoints,
    ...filmsEndpoints,
    ...cinemaEndpoints,  
);


worker.start();