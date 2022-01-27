import { rest } from "msw";
import { encodeToken, getResponseUser } from "../helpers/authHelper.js";

const users = [
    {
        login: "Klavdia",
        password: "1q2w3e",
        id: 1,
    }
];

export const authEndpoints = [
    rest.post("/api/login", (req, res, ctx) => {
        const { login, password } = req.body;
        const user = users.find(((item) => item.login === login && item.password === password));
        
        if (!user) {
            return  res((res) => {
                res.status = 403;
                res.statusText = "Incorrect credentials";
                return res;
            });
        } else {
                const body = {
                user: getResponseUser(user),
                token: encodeToken(user.login),
            };

            return res(ctx.json(body))
        }
    })
]