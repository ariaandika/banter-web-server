import { applyAction } from "$app/forms";
import { page } from "$app/stores";
import { Array, Literal, Number as DefNumber, Object, String, Union, Null } from "@sinclair/typebox"
import { Errors } from "@sinclair/typebox/errors";
import { Check, Create } from "@sinclair/typebox/value";
import { get, writable } from "svelte/store"

const BASE = "/sales";
const URL = "http://localhost:3000/sales/v1/orders";
const CREATE_ORDER_CTX = 'CREATE_ORDER_CTX';

export const CreateOrderStore = () => {
    const snapshot = sessionStorage.getItem(CREATE_ORDER_CTX);
    const store = writable<typeof CreateOrderRequest.static>(snapshot ? JSON.parse(snapshot) : Create(CreateOrderRequest))

    function clear() {
        sessionStorage.removeItem(CREATE_ORDER_CTX);
        store.set(Create(CreateOrderRequest))
    }

    return {
        ...store, clear,
        addPackage() {
            store.update(e => {
                e.packages.push(Create(PackageData));
                return e;
            })
        },
        removePackage(i: number) {
            store.update(e => {
                e.packages.splice(i, 1);
                return e;
            })
        },
        snapshot() {
            sessionStorage.setItem(CREATE_ORDER_CTX, JSON.stringify(get(store)));
        },
        async submit() {
            const input = get(store);
            console.log({Mutation: input})
            if (!Check(CreateOrderRequest, input)) {
                const err = Errors(CreateOrderRequest, input).First()!;
                console.error({SubmissionError: err})
                return await applyAction({ type: "failure", status: 422, data: { message: err.message + ": " + err.path.replaceAll("/",".") } });
            }
            try {
                if (get(page).status == 10) {
                    return console.warn("Submission is in progress");
                }

                const response = await fetch(URL,{
                    method: "POST",
                    mode: "cors",
                    credentials: "include",
                    body: JSON.stringify(input)
                });
                const data = await response.json();

                if (response.status >= 400) {
                    return await applyAction({ type: "failure", status: response.status, data })
                }

                await applyAction({ type: "success", status: response.status, data: { message: "Create Order Success" } })
                clear();
                await applyAction({ type: "redirect", status: 302, location: BASE });
            } catch (error) {
                await applyAction({ type: "error", error })
            }
        }
    }
}



const Number = () => DefNumber({ default: null });

const Snapshot = Union([
    Object({
        type: Union([Literal("id"),Literal("anon")],{ default: "anon" }),
        user_id: Union([Number(),Null()]),
        name: String(),
        phone: String(),
    })
])

const PackageData = Object({
    name: String(),
    weight: Number(),
    length: Number(),
    width: Number(),
    height: Number(),
})

export const CreateOrderRequest = Object({
    sender: Snapshot,
    receiver: Snapshot,
    destination: Object({
        detail: String(),
        kelurahan: String(),
        kecamatan: String(),
        kabupaten: String(),
        provinsi: String(),
        kodepos: Number(),
    }),
    packages: Array(PackageData, { default: [Create(PackageData)] })
})

