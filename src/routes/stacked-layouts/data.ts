import { Object, String, Number, Array, Date } from "@sinclair/typebox";
import { loadUser } from "$/lib/user"
import { error } from "@sveltejs/kit";
import { derived, get, writable, type Readable, type StoresValues } from "svelte/store";
import { page } from "$app/stores";
import { PUBLIC_API_URL } from "$env/static/public";

const API_URL = PUBLIC_API_URL + "/sales/v1/orders";
export const base = "/stacked-layouts";

export const load = async ({ fetch }: { fetch: typeof globalThis.fetch }) => {
    const user = loadUser();
    if (!user) {
        error(401, { message: "Authentication Required" });
    }

    if (user.role !== "Sales") {
        error(403, { message: "You are not allowed to access this resource" });
    }

    const response = await fetch(API_URL,{
        mode: "cors",
        credentials: "include",
    })

    const { data } = await response.json() as { data: typeof OrdersResponse.static };
    data.forEach(e => e.tracings.created_at = new window.Date(e.tracings.created_at));

    return { [OrdersResponse.$id!]: data };
}

// NOTE: function context is each page, so no shared store between page, eg: search, out of the box
export const TracingStore = () => {
    const store = derived(page, e => e.data[OrdersResponse.$id!] as typeof OrdersResponse.static);
    return store;
}


const Address = Object({
    detail: String(),
    kelurahan: String(),
    kecamatan: String(),
    kabupaten: String(),
    provinsi: String(),
    kodepos: Number({ default: null }),
})

const Tracings = Object({
    created_at: Date(),
    order_id: Number(),
    status: String(),
    subject_id: Number(),
    subject_name: String(),
    tracing_id: Number()
},{ $id: "TRACING_CTX" });

const OrdersResponse = Array(Object({
    tracings: Tracings,
    destination: Address,
}), { $id: 'ORDER_RESPONSE_CTX' })

// const OrdersViews = Array(Object({
//     order_id: Number(),
//     status: String(),
//     wh_name: String(),
//     sender: String(),
//     receiver: String(),
//     destination: Address,
//     created_at: Date(),
// }))

export const data = [
    {
        id: "00617",
        name: "John",
        sender: "John",
        phone: "089636635266",
        role: "Customer",
        city: "Semarang",
        created_at: "12 May 2024",
        time_at: "14:20",
    },
    {
        id: "00712",
        name: "Robin",
        sender: "Robin",
        phone: "089636635267",
        role: "Sales",
        city: "Jakarta",
        created_at: "12 May 2024",
        time_at: "11:30",
    },
    {
        id: "00471",
        name: "Yani",
        sender: "Yani",
        phone: "089636635268",
        role: "Sales",
        city: "Blora",
        created_at: "13 May 2024",
        time_at: "08:10",
    },
]

