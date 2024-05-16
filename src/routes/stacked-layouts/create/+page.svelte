<script>
import { button_primary } from "$/lib/ui/button";
import { input } from "$/lib/ui/input"
import { Plus, X } from "../icon";

let selectedPackage = 1;

</script>



<section class="flex gap-4 flex-col">
    <h1 class="text-white text-4xl font-bold">Create Orders</h1>

    <form method="post" class="p-8 bg-white rounded-md shadow-md">

        <h2 class="py-1 text-2xl font-bold border-b border-gray-200">Sender</h2>

        <section class="flex gap-4 justify-between">
            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Name</span>
                <input type="text" class="{input}" required>
            </label>

            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Phone</span>
                <input type="text" class="{input}" required>
            </label>
        </section>


        <h2 class="py-1 mt-6 text-2xl font-bold border-b border-gray-200">Receiver</h2>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Name</span>
                <input type="text" class="{input}" required>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Phone</span>
                <input type="text" class="{input}" required>
            </label>
        </section>


        <h2 class="py-1 mt-6 text-2xl font-bold border-b border-gray-200">Destination Address</h2>

        <label class="mt-2 flex flex-col flex-1">
            <span class="text-sm text-gray-800">Detail Address</span>
            <input type="text" class="{input}" required>
        </label>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Kelurahan</span>
                <input type="text" class="{input}" required>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Kecamatan</span>
                <input type="text" class="{input}" required>
            </label>
        </section>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Kabupaten</span>
                <input type="text" class="{input}" required>
            </label>

            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Provinsi</span>
                <input type="text" class="{input}" required>
            </label>
        </section>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Zipcode</span>
                <input type="number" class="{input}" required>
            </label>
            <div class="flex-1">&ThickSpace;</div>
        </section>


        <h2 class="py-1 mt-6 text-2xl font-bold border-b border-gray-200">Packages</h2>

        <label class="mt-2 flex flex-col flex-1">
            <span class="text-sm text-gray-800">Name</span>
            <input type="text" class="{input}" required>
        </label>

        <section class="mt-2 flex gap-4 justify-between">
            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Weight</span>
                <input type="number" class="{input}" required>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Length</span>
                <input type="number" class="{input}" required>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Width</span>
                <input type="number" class="{input}" required>
            </label>

            <label class="flex flex-col flex-1">
                <span class="text-sm text-gray-800">Height</span>
                <input type="number" class="{input}" required>
            </label>
        </section>

        <section class="mt-4 flex gap-4">
            Selected Package: <div class="flex">
                {#each {length:4} as _,i}
                    <button class="px-3 py-0.5 {selectedPackage == i ? 'bg-gray-200' : 'hover:bg-gray-100'} text-center border-y border-r border-gray-400 first:border-l first:rounded-l-md" type="button" on:click={() => selectedPackage = i}>{i + 1}</button>
                {/each}
                <button class="px-1 py-0.5 hover:bg-gray-100 text-gray-600 text-center border-y border-r border-gray-400 rounded-r-md *:h-3/4" type="button">
                    {@html Plus}
                </button>
                <button class="mx-2 px-1 py-0.5 hover:bg-red-600 text-gray-600 hover:text-white text-center border border-gray-400 transition-colors rounded-md *:h-3/4" type="button">
                    {@html X}
                </button>
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
