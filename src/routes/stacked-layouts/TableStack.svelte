<script>
import { data, base } from "./data"
</script>


<section class="w-full">
    {#each data as d}
        <div class="px-6 group hover:bg-gray-600/5">
            <a href="{base}/detail/{d.id}">
                <div class="py-4 group-last:border-none border-b border-gray-200 flex justify-between">
                    <div class="flex flex-col">
                        <div class="font-bold">{d.id}</div>
                        <div class="text-gray-600">{d.city}</div>
                    </div>
                    <div class="flex flex-col justify-between">
                        <div class="text-sm text-right text-gray-600">{d.time_at}</div>
                        <div class="text-sm text-right text-gray-600">{d.created_at}</div>
                    </div>
                </div>
            </a>
        </div>
    {/each}
</section>


