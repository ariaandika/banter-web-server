<script>
import { TracingStore, base } from "./data"

export let search = '';
const tracings = TracingStore();

$: filtered = $tracings.filter(e => e.tracings.order_id.toString().startsWith(search));

</script>

<section class="w-full">
    {#each filtered as d}
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
    {:else}
        <div class="px-6 py-4 italic text-gray-600">No Order Found</div>
    {/each}
</section>

