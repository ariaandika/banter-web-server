import { page } from "$app/stores";
import { PUBLIC_API_URL } from "$env/static/public";
import { Array, Date, Number, Object, String } from "@sinclair/typebox";
import { redirect, type RequestEvent } from "@sveltejs/kit";
import { derived } from "svelte/store";

export async function load({ params, fetch }: RequestEvent) {
    const id = params.id;
    if (!id) {
        redirect(302, "/sales")
    }

    const response = await fetch(PUBLIC_API_URL + "/sales/v1/orders/" + id,{ mode: "cors", credentials: "include" });
    const { data } = await response.json() as { data: typeof FindOrderResponse.static };

    if (!data) {
        redirect(302, "/sales")
    }

    data.tracings.forEach(e => e.created_at = new window.Date(e.created_at));

    return { [FindOrderResponse.$id!]: data };
}

export const OrderDetailStore = () => {
    const store = derived(page, e => e.data[FindOrderResponse.$id!] as typeof FindOrderResponse.static)
    return store;
}

const Subject = Object({
    name: String(),
    phone: String(),
})

const FindOrderResponse = Object({
    order:  Object({
        order_id: Number(),
        sender_id: Number(),
        receiver_id: Number(),
        destination: Object ({
            detail: String(),
            kelurahan: String(),
            kecamatan: String(),
            kabupaten: String(),
            provinsi: String(),
            kodepos: Number(),
        })
    }),
    sender: Subject,
    receiver: Subject,
    packages: Array(Object({
        height: Number(),
        length: Number(),
        name: String(),
        order_id: Number(),
        package_id: Number(),
        weight: Number(),
        width: Number(),
    })),
    tracings: Array(Object({
        created_at: Date(),
        order_id: Number(),
        status: String(),
        subject_id: Number(),
        subject_name: String(),
        tracing_id: Number(),
    }))
},{ $id: "FIND_ORDER_CTX" })


