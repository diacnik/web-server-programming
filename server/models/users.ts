import type { User } from "../types";
import data from "../data/users.json";

export function getAll(): User[] {
    return data.users as User[];
}

export function get(id: number): User {
    const user = data.users.find((user: { id: number; }) => user.id === id);
    if (!user) {
        throw new Error(`User with id ${id} not found`);
    }
    return user as User;
}

export function create(user: User) {
    const newUser = {
        ...user,
        id: data.users.length > 0 ? data.users[data.users.length - 1].id + 1 : 1 // assign a new id based on the last user's id
    };
    data.users.push(newUser as any);
    return newUser;
}

export function update(id: number, user: Partial<User>) {
    const index = data.users.findIndex((u) => u.id === id);
    if (index === -1) {
        throw new Error(`User with id ${id} not found`);
    }
    
    const updatedUser = { ...data.users[index], ...user }; // spread operator to merge existing user data with the new data
    data.users[index] = updatedUser as any;
    return updatedUser;
}

export function remove(id: number) {
    const index = data.users.findIndex((u) => u.id === id);
    if (index === -1) {
        throw new Error(`User with id ${id} not found`);
    }
    const removedUser = data.users.splice(index, 1)[0]; // splice returns an array of removed items, we take the first one
    return removedUser as User;
}