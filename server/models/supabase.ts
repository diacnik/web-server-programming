import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL as string;
const supabaseSecretKey = process.env.SUPABASE_SECRET_KEY as string;

export function connect() {
    return createClient(supabaseUrl, supabaseSecretKey)
}


export function filterKeys<T extends object>(obj: T, keys: (keyof T)[],): Partial<T> {
    const filtered: Partial<T> = {}
    for (const key of keys) {
        if (key in obj) {
            filtered[key] = obj[key];
        }
    }
    return filtered
}

export function toCamelCase(
    obj: Record<string, unknown>,
): Record<string, unknown> {
    const result: Record<string, unknown> = {}
    for (const key in obj) {
        const camelKey = key.replace(/_([a-z])/g, (_match, p1) => p1.toUpperCase(),);
        result[camelKey] = obj[key];
    }
    return result
}

export function toSnakeCase(
    obj: Record<string, unknown>,
): Record<string, unknown> {
    const result: Record<string, unknown> = {}
    for (const key in obj) {
        const snakeKey = key.replace(/([A-Z])/g, (match) => `_${match.toLowerCase()}`,);
        result[snakeKey] = obj[key];
    }
    return result
}