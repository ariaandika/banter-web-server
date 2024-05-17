<script lang="ts">
import Blob from "$/lib/ui/Blob.svelte";
import { UserStore } from "$/lib/user";
import { button_ghost, button_primary } from "$/lib/ui/button";
import { cn } from "$/lib";
import { onMount } from "svelte";

let user: ReturnType<typeof UserStore>;
let msg = "Welcome to BANTER";
let startedHref = "/";

const typeSpeed = 40;

async function wait(time: number) {
    return new Promise(res=>setTimeout(res,time));
}

async function animateText() {
    let next = "Oof";

    if ($user) {
        next = `Logged in as ${$user.name.replaceAll("<","DeezNutz").replaceAll(">","DeezNutz")}, Let us get started`
        startedHref = "/sales";
    } else {
        next = "You can login to continue"
        startedHref = "/login";
    }

    await wait(2000);
    while (msg.length > 0) {
        msg = msg.slice(0, msg.length - 1);
        await wait(typeSpeed);
    }

    while (msg.length < next.length) {
        msg = next.slice(0,msg.length + 2);
        await wait(typeSpeed);
    }
}

onMount(() => {
    user = UserStore();
    animateText();
})

</script>

<header class="[ p-6 top-0 left-0 w-full fixed flex justify-between ] font-bold">
    <div class="w-full flex gap-8 justify-center">
        <div>Documentation</div>
        <div>Help</div>
        <div>Call Center</div>
    </div>
</header>

<!-- Page -->
<section class="px-4 w-full h-full grid place-items-center">
    <Blob/>
    <div class="text-center ">
        <h1 class="text-6xl font-bold tracking-tight">BANTER Staff Web App</h1>
        <p class="mt-6 text-gray-600 text-lg">
            <span>&ThickSpace;</span><span>{@html msg}</span>
        </p>
        <div class="my-6 w-full flex gap-4 justify-center">
            <a href={startedHref} class="{button_primary}">
                Get Started
            </a>
            <a href="/" class="{cn(button_ghost, 'outline-black')}">
                Documentation
            </a>
        </div>
    </div>
</section>

