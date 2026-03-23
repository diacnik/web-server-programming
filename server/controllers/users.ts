import { Router } from "express";

const app = Router();

app
.get("/", (_req, res) => {
    res.send([
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
    ])
})
.get("/:id", (_req, res) => {
    const { id } = _req.params;
    res.send({ id, name: "Alice", email: "alice@example.com" });
})
.post("/", (_req, res) => {
    const { name, email } = _req.body
    // In a real application, you would save the user to the database here
    res.send({ id: 4, name, email });
})
.patch("/:id", (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    // In a real application, you would update the user in the database here
    res.send({ id, name, email });
})
.delete("/:id", (req, res) => {
    const { id } = req.params;
    // In a real application, you would delete the user from the database here
    res.send({ id });
});


export default app;