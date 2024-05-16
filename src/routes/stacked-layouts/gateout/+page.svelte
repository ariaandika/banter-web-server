<script>
import SelectOrdersTable from "./SelectOrdersTable.svelte"
import { button_primary } from "$/lib/ui/button";
import { input } from "$/lib/ui/input";


</script>




<section class="flex gap-4 flex-col">
    <h1 class="text-white text-4xl font-bold">Gateway Out</h1>

    <form class="p-8 grid grid-cols-2 gap-4 bg-white rounded-md shadow-md">
        <section class="LEFT_PANE pr-4 border-r border-gray-200">
            <h2 class="py-1 text-2xl font-bold border-b border-gray-200">Driver</h2>

            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Name</span>
                <input type="text" class="{input}" required>
            </label>

            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Phone</span>
                <input type="text" class="{input}" required>
            </label>

            <h2 class="my-4 py-1 text-2xl font-bold border-b border-gray-200">Target Warehouse</h2>

            <label class="mt-2 flex flex-col flex-1">
                <span class="text-sm text-gray-800">Name</span>
                <input type="text" class="{input}" required>
            </label>
        </section>

        <section class="RIGHT_PANE">
            <h2 class="py-1 text-2xl font-bold">Select Orders</h2>

            <section class="mb-4 border border-gray-200 rounded-md">
                <SelectOrdersTable/>
            </section>
        </section>

        <section>
            <section class="my-4">
                <button class="{button_primary}">Submit</button>
            </section>
        </section>
    </form>


</section>










<div class="my-48">&ThickSpace;</div>
