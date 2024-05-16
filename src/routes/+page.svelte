<script lang="ts">
import Blob from "$/lib/ui/Blob.svelte";
    import { button_ghost, button_primary } from "$/lib/ui/button";
// import { UserData, logout, roleToUrl } from "#/users"
// import { arrowRight } from "$/ui/icon";

// const user = UserData();

</script>

<header class="[ p-6 top-0 left-0 w-full fixed flex justify-between ] font-bold">
    <div class="w-full flex gap-8 justify-center">
        <div>Documentation</div>
        <div>Help</div>
        <div>Call Center</div>
    </div>
    <div class="p-6 top-0 right-0 fixed ">
        Login
    </div>
</header>

<!-- Page -->
<section class="px-4 w-full h-full grid place-items-center">
    <Blob/>
    <div class="text-center ">
        <h1 class="text-6xl font-bold tracking-tight">BANTER Staff Web App</h1>
        <p class="mt-6 text-gray-600 text-lg">
            Welcome to BANTER, if you are a staff, please login to continue
        </p>
        <div class="my-6 w-full flex gap-4 justify-center">
            <a href="/sales" class="{button_primary}">
                Get Started
            </a>
            <a href="/login" class="{button_ghost}">
                Login
            </a>
        </div>
    </div>
</section>

