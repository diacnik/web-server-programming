import { Router } from "express";

const app = Router();

app
.get("/", (_req, res) => {
    res.send([
        { id: 1, name: "Alice", email: "alice@example.com" },
        { id: 2, name: "Bob", email: "bob@example.com" },
        { id: 3, name: "Charlie", email: "charlie@example.com" },
    ])})
.get("/id", (_req, res) => {})
.post("/", (_req, res) => {})
.patch("/id", (_req, res) => {})
.delete("/id", (_req, res) => {})   ;


export default app;