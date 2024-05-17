import { Any, Null, Number, Object, Record, String, Union } from "@sinclair/typebox";
import { goto, invalidateAll } from "$app/navigation";
import { derived } from "svelte/store";
import { page } from "$app/stores";
import { building } from "$app/environment";

const USER_CTX = "USER_CTX";

export const loadUser = () => {
    const json = localStorage.getItem(USER_CTX)
    if (json) {
        return JSON.parse(json) as typeof Users.static;
    }
}

export const load = () => {
    if (building) return;
    return { [USER_CTX]: loadUser() };
}

export const UserStore = () => {
    const store = derived(page, e => e.data[USER_CTX] as typeof Users.static);
    return {
        ...store,
        async logout() {
            localStorage.removeItem(USER_CTX);
            await invalidateAll();
            await goto("/")
        }
    }
}

export const Users = Object({
    exp: Number(),
    user_id: Number(),
    name: String(),
    phone: String(),
    role: String(),
    metadata: Record(String(),Any()),
    created_at: String(),
    updated_at: String(),
    verified_at: Union([String(),Null()]),
    role_data: Record(String(),Any()),
})

