<script>
import { Package } from "./icon"
import { UserStore } from "$/lib/user";
import { base } from "./data"

const user = UserStore();

</script>



<section class="relative w-full h-full overflow-hidden bg-gray-200">
    <div class="absolute pointer-events-none w-full h-1/3 bg-indigo-600 z-10">&ThickSpace;</div>
    <nav class="relative flex justify-center | bg-gray-800 font-semibold text-white z-20">
        <section class="py-4 px-8 w-full max-w-[1280px] flex justify-between outline-red-600">
            <div class="flex gap-4">
                <div class="mr-8 *:scale-150">{@html Package}</div>
                <a href="{base}">Orders</a>
                <a href="{base}/create">Create</a>
                <a href="{base}/gateout">Gateout</a>
                <a href="{base}/gatein">Gatein</a>
                <a href="{base}/manifests">Manifests</a>
            </div>
            <button class="text-white" on:click={() => user.logout()}>Logout</button>
        </section>
    </nav>

    <section class="relative h-full w-full flex justify-center z-20 overflow-auto">
        <section class="p-8 h-full w-full max-w-[1280px]">
            <slot/>
        </section>
    </section>
</section>



