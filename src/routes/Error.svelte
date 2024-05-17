<script>
import { fly } from "svelte/transition";
import { X } from "./stacked-layouts/icon";
import { page } from "$app/stores";
import { onMount } from "svelte";

let idx = 0; // 0 none, 1 error, 2 success

const baseClass = "absolute left-1/2 -translate-x-1/2 py-3 px-5 my-2 w-full max-w-[480px] flex gap-4 z-50 justify-between border-2 rounded-md pointer-events-auto";

/** @type {number | null} */
let signal = null;
/** @type {string[]} */
let msg = [];

function resetTimeout() {
    idx = 0;
    if (signal !== null) {
        clearTimeout(signal);
        signal = null;
    }
}

onMount(() => page.subscribe(page => {
    if (page.status >= 200 && page.status < 300 && page.form) {
        resetTimeout();
        idx = 2;
        msg[2] = page.form.message;
        signal = setTimeout(() => {
            if (idx == 2) {
                idx = 0;
            }
        }, 3000,)
    } else if (page.status >= 400 && page.status < 500 && page.form) {
        resetTimeout();
        idx = 1;
        msg[1] = page.form.message;
        setTimeout(() => {
            if (idx == 1) {
                idx = 0;
            }
        }, 6000)
    }
}))


</script>



<section class="FRAME absolute w-full flex justify-center pointer-events-none">
    {#if idx == 1}
    <div class="{baseClass} bg-red-200 text-red-600 border-red-600" transition:fly={{ y: -80 }}>
        <div>{msg[1]}</div>
        <button on:click={resetTimeout}>{@html X}</button>
    </div>
    {/if}

    {#if idx == 2}
    <div class="{baseClass} bg-green-200 text-green-600 border-green-600" transition:fly={{ y: -80 }}>
        <div>{msg[2]}</div>
        <button on:click={resetTimeout}>{@html X}</button>
    </div>
    {/if}
</section>

