import { Router } from "express";
import { getAll, get, create, update, remove } from "../models/products";
import { Product, DataEnvelope, DataListEnvelope } from "../types";

const app = Router();

app
.get("/", (req, res) => {
    const { list, count } = getAll(req.query);
    const response: DataListEnvelope<Product> = {
        data: list,
        isSuccess: true,
        total: count,
    };
    res.send(response);
})
.get("/count", (req, res) => {
    const { count } = getAll(req.query);
    res.send({ count });
})
.get("/:id", (req, res) => {
    const { id } = req.params;
    const response: DataEnvelope<Product> = {
        data: get(Number(id)),
        isSuccess: true,
    };
    res.send(response);
})
.post("/", (req, res) => {
    const newItem = create(req.body);
    const response: DataEnvelope<Product> = {
        data: newItem,
        isSuccess: true,
    };
    res.send(response);
})
.patch("/:id", (req, res) => {
    const { id } = req.params;
    const updatedItem = update(Number(id), req.body);
    const response: DataEnvelope<Product> = {
        data: updatedItem as Product,
        isSuccess: true,
    };
    res.send(response);
})
.delete("/:id", (req, res) => {
    const { id } = req.params;
    const removedItem = remove(Number(id));
    const response: DataEnvelope<Product> = {
        data: removedItem,
        isSuccess: true,
        message: `Product ${removedItem.title} has been removed.`,
    };
    res.send(response);
});

export default app;