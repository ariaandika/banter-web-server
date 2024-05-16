<script>
import Blob from "$/lib/ui/Blob.svelte"
import { input } from "$/lib/ui/input";
import { page } from "$app/stores"
import { onMount } from "svelte";

/** @type {HTMLInputElement} */
let inputName;

onMount(() => {
    inputName.focus();
})

</script>

<a class="fixed left-8 top-8 hover:bg-gray-400/40 p-3 rounded-full" href="/">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
        class="w-6 h-6"
    >
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
    </svg>
</a>

<section class="h-full grid place-items-center">
    <Blob/>
    <form class="w-[380px]" on:submit|preventDefault={()=>{}}>
        <h1 class="text-4xl font-bold text-center text-indigo-600">BANTER</h1>
        <h1 class="text-2xl font-bold text-center">Login to your account</h1>

        <div class="my-8"></div>

        <label class="flex flex-col">
            <span aria-errormessage="phone">Phone</span>
            <input type="text" name="phone" autocomplete="tel" required class="{input}" bind:this={inputName}>
        </label>

        <div class="my-4"></div>

        <label class="flex flex-col">
            <span>Password</span>
            <input type="password" name="password" autocomplete="current-password" required class={input}>
        </label>

        <div class="my-4"></div>

        <button
        class="px-3 py-2 w-full rounded-md
               font-bold text-white text-center text-base
               bg-indigo-600 hover:bg-indigo-600/90"
        >Login</button>

        <div class="text-sm text-red-600">{$page.form?.error?.message ?? ""}</div>
    </form>

</section>


