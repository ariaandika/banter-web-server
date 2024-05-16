<script>
import { data } from "../data"

</script>


<section class="w-full flex flex-col">
    {#each data as d}
        <button type="button" class="w-full px-6 group hover:bg-gray-600/5 focus:bg-gray-600/5 first:rounded-t-md last:rounded-b-md active:bg-gray-600/[0.08]">
            <div class="py-4 group-last:border-none border-b border-gray-200 flex justify-between">
                <div class="flex flex-col">
                    <div class="text-left font-bold">{d.id}</div>
                    <div class="text-gray-600">{d.city}</div>
                </div>
                <div class="flex flex-col justify-between">
                    <div class="text-sm text-right text-gray-600">{d.time_at}</div>
                    <div class="text-sm text-right text-gray-600">{d.created_at}</div>
                </div>
            </div>
        </button>
    {/each}
</section>


