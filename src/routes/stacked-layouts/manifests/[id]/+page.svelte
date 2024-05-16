<script>
import { base } from "$/routes/stacked-layouts/data";
import { button_ghost, button_primary } from "$/lib/ui/button";

</script>




<section class="flex gap-4 flex-col top-0">
    <h1 class="text-white text-4xl font-bold">Detail Manifest</h1>

    <section class="HEADER_CONTAINER flex justify-between">
        <a class="{button_ghost} font-semibold text-gray-600" href="{base}/manifests">Back</a>
    </section>

    <section class="p-8 bg-white rounded-md shadow-md">
        <section class="pb-4 flex justify-between border-b border-gray-200">
            <div class="flex flex-col">
                <h2 class="text-2xl font-bold">M-01-000831</h2>
                <div class="text-green-500 text-sm font-semibold">On The Way</div>
            </div>
            <div>
                <div class="flex gap-4">
                    <button class="{button_ghost} font-semibold">Print</button>
                    <button class="{button_primary} font-semibold">Gateway In</button>
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

</section>





