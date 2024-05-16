<script>
import TableStack from "./TableStack.svelte";
import { Search, Sort, X } from "./icon";
import { button_ghost } from "$/lib/ui/button"

let search = "";
/** @type {HTMLInputElement} */
let input;

</script>




<section class="flex gap-4 flex-col">
    <h1 class="text-white text-4xl font-bold">List Orders</h1>

    <section class="flex justify-between">
        <div class="flex gap-2 align-middle">
            <div class="relative px-2 flex focus-within:outline outline-2 outline-offset-2 outline-white align-center bg-white rounded-md">
                <div class="*:h-full text-gray-400">{@html Search}</div>
                <input bind:this={input} type="text" bind:value={search} placeholder="Search..." required class="border-none focus:border-none focus:outline-none focus:ring-0">
                {#if search != ""}
                <button class="absolute right-0 h-full grid rounded-sm p-2 place-items-center" tabindex="-1" on:click={() => {input.focus();search = ""}}>{@html X}</button>
                {/if}
            </div>

        </div>
        <button class={button_ghost}>{@html Sort} Sort By</button>
    </section>

    <section class="w-full bg-white border border-gray-200 rounded-lg overflow-hidden shadow-md">
        <TableStack/>
    </section>

</section>



