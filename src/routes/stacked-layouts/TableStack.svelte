<script>
import { TracingStore, base } from "./data"

const tracings = TracingStore();

</script>

<section class="w-full">
    {#each $tracings as d}
        <div class="px-6 group hover:bg-gray-600/5">
            <a href="{base}/detail/{d.tracings.order_id}">
                <div class="py-4 group-last:border-none border-b border-gray-200 flex justify-between">
                    <div class="flex flex-col">
                        <div class="font-bold">{d.tracings.order_id}</div>
                        <div class="text-gray-600">{d.destination.kabupaten}</div>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="text-sm text-right text-gray-600">{d.tracings.created_at.toLocaleTimeString()}</div>
                        <div class="text-sm text-right text-gray-600">{d.tracings.created_at.toDateString()}</div>
                    </div>
                </div>
            </a>
        </div>
    {/each}
</section>

