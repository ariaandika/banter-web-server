<script>
import { CreateOrderStore } from "./data"
import { Plus, X } from "../icon";
import { onMount } from "svelte"
import { button_primary, button_ghost } from "$/lib/ui/button";
import { input } from "$/lib/ui/input"
import { cn } from "$/lib"

let selectedPackage = 0;
let data = CreateOrderStore();

function add() {
    data.addPackage();
    selectedPackage += 1;
}

function remove() {
    if ($data.packages.length <= 1) {
        return;
    }
    let target = selectedPackage;
    selectedPackage = selectedPackage <= 0 ? selectedPackage : selectedPackage - 1;
    data.removePackage(target);
}

/** @param {SubmitEvent} e */
function submit(e) {
    e.preventDefault();
    data.submit()
}

function clear() {
    data.clear()
}

/** @param {FocusEvent} e */
function focusOut(e) {
    const target = /** @type {HTMLButtonElement} */(e.target);
    if (target.id == "clear") {
        return;
    }
    data.snapshot();
}

onMount(() => {
    return () => data.snapshot();
})

</script>

<svelte:window on:beforeunload={() => data.snapshot()}></svelte:window>

<section class="flex gap-4 flex-col">
    <h1 class="text-white text-4xl font-bold">Create Orders</h1>

    <form method="post" class="relative p-8 bg-white rounded-md shadow-md" on:submit={submit} on:focusout={focusOut}>
        <div class="absolute mx-8 right-0">
            <button id="clear" class="{cn(button_ghost, 'hover:bg-red-600 hover:text-white transition-colors')}" type="button" on:click={clear} tabindex="-1">Clear All</button>
        </div>

        <h2 class="py-1 text-2xl font-bold border-b border-gray-200">Sender</h2>

        <section class="flex gap-4 justify-between">
            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Name</span>
                <input type="text" class="{input}" required bind:value={$data.sender.name}>
            </label>

            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Phone</span>
                <input type="text" class="{input}" required bind:value={$data.sender.phone}>
            </label>
        </section>


        <h2 class="py-1 mt-6 text-2xl font-bold border-b border-gray-200">Receiver</h2>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Name</span>
                <input type="text" class="{input}" required bind:value={$data.receiver.name}>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Phone</span>
                <input type="text" class="{input}" required bind:value={$data.receiver.phone}>
            </label>
        </section>


        <h2 class="py-1 mt-6 text-2xl font-bold border-b border-gray-200">Destination Address</h2>

        <label class="mt-2 flex flex-col flex-1">
            <span class="text-sm text-gray-800">Detail Address</span>
            <input type="text" class="{input}" required bind:value={$data.destination.detail}>
        </label>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Kelurahan</span>
                <input type="text" class="{input}" required bind:value={$data.destination.kelurahan}>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Kecamatan</span>
                <input type="text" class="{input}" required bind:value={$data.destination.kecamatan}>
            </label>
        </section>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Kabupaten</span>
                <input type="text" class="{input}" required bind:value={$data.destination.kabupaten}>
            </label>

            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Provinsi</span>
                <input type="text" class="{input}" required bind:value={$data.destination.provinsi}>
            </label>
        </section>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Zipcode</span>
                <input type="number" class="{input}" required bind:value={$data.destination.kodepos}>
            </label>
            <div class="flex-1">&ThickSpace;</div>
        </section>


        <h2 class="py-1 mt-6 text-2xl font-bold border-b border-gray-200">Packages</h2>

        <label class="mt-2 flex flex-col flex-1">
            <span class="text-sm text-gray-800">Name</span>
            <input type="text" class="{input}" required bind:value={$data.packages[selectedPackage].name}>
        </label>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Weight</span>
                <input type="number" class="{input}" required bind:value={$data.packages[selectedPackage].weight}>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Length</span>
                <input type="number" class="{input}" required bind:value={$data.packages[selectedPackage].length}>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Width</span>
                <input type="number" class="{input}" required bind:value={$data.packages[selectedPackage].width}>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Height</span>
                <input type="number" class="{input}" required bind:value={$data.packages[selectedPackage].height}>
            </label>
        </section>

        <section class="mt-4 flex justify-between">
            <div class="flex gap-4 align-center">
                <div>Selected Package: </div>
                <div>
                    <div class="flex">
                        {#each { length: $data.packages.length } as _,i}
                            <button class="px-3 py-0.5 {selectedPackage == i ? 'bg-gray-200' : 'hover:bg-gray-100'} text-center border-y border-r border-gray-400 first:border-l first:rounded-l-md" type="button" on:click={() => selectedPackage = i}>{i + 1}</button>
                        {/each}
                        <button class="px-1 py-0.5 hover:bg-gray-100 text-gray-600 text-center border-y border-r border-gray-400 rounded-r-md *:h-3/4" type="button" on:click={add}>
                            {@html Plus}
                        </button>
                        <button class="mx-2 px-1 py-0.5 hover:bg-red-600 text-gray-600 hover:text-white text-center border border-gray-400 transition-colors rounded-md *:h-3/4" type="button" on:click={remove}>
                            {@html X}
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="my-4">
            <div>Please check the input before submitting</div>
        </section>

        <section class="my-2">
            <button class="{button_primary}">Create Order</button>
        </section>

    </form>
</section>


<div class="my-48">&ThickSpace;</div>
