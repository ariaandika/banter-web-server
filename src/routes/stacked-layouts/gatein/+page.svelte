<script>
import { button_ghost, button_primary } from "$/lib/ui/button";
import { cn } from "$/lib/index";
import { Search } from "../icon";
import { page } from "$app/stores";
import { onMount } from "svelte";
import { goto } from "$app/navigation";

$: snapshot_id = $page.url.searchParams.get("id");

$: id = snapshot_id;

/** @type {HTMLInputElement} */
let input;

function focus() {
    input.focus();
}

/** @param {SubmitEvent} e */
async function submit(e) {
    e.preventDefault();
    await goto(`${$page.url.pathname}?id=${id}`);
    focus();
}

onMount(focus)

</script>


<section class="flex gap-4 flex-col top-0">
    <h1 class="text-white text-4xl font-bold">Gateway In</h1>

    <section class="HEADER_CONTAINER flex w-full">
        <form class="w-full flex gap-1" on:submit={submit}>
            <div class="relative w-full flex focus-within:outline outline-2 outline-offset-2 outline-white align-center bg-white rounded-l-md">
                <div class="pl-2 *:h-full text-gray-400">{@html Search}</div>
                <input type="text" name="id" bind:value={id} bind:this={input} placeholder="M-01-000831" required class="w-full border-none focus:border-none focus:outline-none focus:ring-0">
            </div>
            <button class="pl-3 pr-3 rounded-r-md focus-within:outline outline-2 outline-offset-2 outline-white bg-white h-full">{@html Search}</button>
        </form>
    </section>

    {#if snapshot_id == 'deez'}
        <h2 class="text-2xl text-white font-bold">DeezNutz Not Found</h2>

    {:else if snapshot_id != null}

    <section class="p-8 bg-white rounded-md shadow-md">
        <section class="pb-4 flex justify-between border-b border-gray-200">
            <div class="flex flex-col">
                <h2 class="text-2xl font-bold">M-01-000831</h2>
                <div class="text-green-500 text-sm font-semibold">On The Way</div>
            </div>
            <div>
                <div class="flex gap-4">
                    <button class="{cn(button_ghost,'outline-black')} font-semibold">Print</button>
                    <button class="{button_primary} font-semibold">Confirm</button>
                </div>
            </div>
        </section>

        <section class="grid grid-cols-2">
            <div class="py-4 border-b border-gray-200">
                <div class="text-gray-800 font-semibold">From Warehouse</div>
                <div class="text-gray-800">Warehouse Citadeng</div>
            </div>

            <div class="py-4 border-b border-gray-200">
                <div class="text-gray-800 font-semibold">To Warehouse</div>
                <div class="text-gray-800">Warehouse Calamburu</div>
            </div>

            <div class="py-4 border-b border-gray-200">
                <div class="text-gray-800 font-semibold">Driver Name</div>
                <div class="text-gray-800">Robin</div>
            </div>

            <div class="py-4 border-b border-gray-200">
                <div class="text-gray-800 font-semibold">Driver Phone</div>
                <div class="text-gray-800">089636635267</div>
            </div>

            <div class="py-4 border-b border-gray-200">
                <div class="text-gray-800 font-semibold">Created At</div>
                <div class="text-gray-800">08:40, 14 May 2024</div>
            </div>

            <div class="py-4 border-b border-gray-200">
                <div class="text-gray-800 font-semibold">Completed At</div>
                <div class="text-gray-800">On The Way...</div>
            </div>

            <div class="pt-4">
                <div class="text-gray-800 font-semibold">Total Orders</div>
                <div class="text-gray-800">4</div>
            </div>

            <div class="pt-4">
                <div class="text-gray-800 font-semibold">Total Packages</div>
                <div class="text-gray-800">15</div>
            </div>

        </section>
    </section>

    {/if}

</section>






