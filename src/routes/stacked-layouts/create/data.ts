import { Array, Literal, Number, Object, String, Union } from "@sinclair/typebox"



















const Snapshot = Union([
    Object({
        type: Literal("id"),
        user_id: Number(),
    }),
    Object({
        type: Literal("anon"),
        name: String(),
        phone: String(),
    })
])

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
    packages: Array(Object({
        name: String(),
        weight: Number(),
        length: Number(),
        width: Number(),
        height: Number(),
    }))
})

