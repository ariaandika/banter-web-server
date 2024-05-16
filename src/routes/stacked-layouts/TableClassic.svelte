<script>
import { ChevronUp } from "./icon";
import { data } from "./data"
</script>


<table class="w-full">
    <thead>
        <tr>
            <th class="px-4 py-2 border-b border-gray-200 text-left text-gray-400 font-normal">Name</th>
            <th class="px-4 py-2 border-b border-gray-200 text-left text-gray-400 font-normal">
                <div class="flex gap-2 align-center">Phone {@html ChevronUp}</div>
            </th>
            <th class="px-4 py-2 border-b border-gray-200 text-left text-gray-400 font-normal">Role</th>
        </tr>
    </thead>
    <tbody>
        {#each data as d}
        <tr class="group">
            <td class="px-4 py-4 group-last:border-none border-b border-gray-200">{d.name}</td>
            <td class="px-4 py-4 group-last:border-none border-b border-gray-200">{d.phone}</td>
            <td class="px-4 py-4 group-last:border-none border-b border-gray-200">{d.role}</td>
        </tr>
        {/each}
    </tbody>
</table>

