import type { Product } from "../types";
import data1 from "../data/products.json";
import { PagingRequest } from "../types/dataEnvelopes";
import { connect } from "./supabase";

export const TABLE_NAME = "products";

type ItemType = Product;
const data = {
    ...data1,
    items: data1.products,
}

export async function getAll(params: PagingRequest) { // any async function always returns a promise, so we can use async/await syntax inside it
    const db = connect();

    let query = db.from(TABLE_NAME).select("*", { count: "estimated"});
    

    if (params?.search) {
        query = query.or(`title.ilike.%${params.search}%`).or(`description.ilike.%${params.search}%`);
    }
    if (params?.sortBy) {
        query = query.order(params.sortBy, { ascending: !params.descending });
    }

    const page = params?.page || 1;
    const pageSize = params?.pageSize || 10;
    const start = (page - 1) * pageSize;
    query = query.range(start, start + pageSize - 1);


    const result = await query;

    if (result.error) {
        throw result.error;
    }
    
    const list = result.data as ItemType[];
    const count = result.count ?? 0 ;

    return { list, count };
}

export async function get(id: number): Promise<ItemType> {
    const db = connect();
    const result = await db.from(TABLE_NAME).select("*").eq("id", id).single();

    if (result.error) {
        throw result.error;
    }

    const item = result.data as ItemType | null;
    if (!item) {
        const error = {status: 404, message: `Product not found`};
        throw error;
    }
    return item as ItemType;
    }

export async function create(item: Exclude<ItemType, 'id'>) {
    const db = connect();
    const result = await db.from(TABLE_NAME).insert(item).select().single();

    if (result.error) {
        throw result.error;
    }

    return result.data as ItemType;
}

// pay attention to this function, specifically the patterns
export async function update(id: number, user: Partial<ItemType>) {
    const db = connect();
    const result = await db.from(TABLE_NAME).update(user).eq("id", id).select().single();

    if (result.error) {
        throw result.error;
    }

    return result.data as ItemType;
}

// delete is keyword in JavaScript, so we use remove instead
export async function remove(id: number) {
    const db = connect();
    const result = await db.from(TABLE_NAME).delete().eq("id", id).select().single();

    if (result.error) {
        throw result.error;
    }

    return result.data as ItemType;
}