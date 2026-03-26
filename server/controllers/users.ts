import { Router } from "express";
import { getAll, get, create, update, remove } from "../models/users";

const app = Router();

app
.get("/", (_req, res) => {
    const users = getAll().map((x) => ({
        ...x,
        password: undefined, // remove password field from the response
    }));
    res.send(users);
})
.get("/:id", (_req, res) => {
    const { id } = _req.params;
    const user = get(parseInt(id));
    res.send(user);
})
.post("/", (_req, res) => {
    const newUser = create(_req.body.name, _req.body.email);
    res.send(newUser);
})
.patch("/:id", (req, res) => {
    const { id } = req.params;
    const updatedUser = update(parseInt(id), req.body);
    res.send(updatedUser);
})
.delete("/:id", (req, res) => {
    const { id } = req.params;
    const removedUser = remove(parseInt(id));
    res.send(removedUser);
});

export default app;