import { setupWorker, rest } from "msw"

const users = [
    {
        "id": 1,
        "login": "mojombo",
        "avatar_url": "https://avatars.githubusercontent.com/u/1?v=4",
    },
]

const worker = setupWorker(
    rest.get("/api/users", (req, res, ctx) => {
        return res(ctx.json(users))
    }),
);


worker.start();