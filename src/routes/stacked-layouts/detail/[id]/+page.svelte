<script>
import { base } from "$/routes/stacked-layouts/data";
import { button_ghost } from "$/lib/ui/button";
import { OrderDetailStore } from "./data";
    import { derived } from "svelte/store";

const data = OrderDetailStore()
const semiFullAddress = derived(data, ({ order: { destination: d } }) => `${d.kecamatan}, ${d.kabupaten}, ${d.provinsi}, ${d.kodepos}`);
const fullAddress = derived(data, ({ order: { destination: d } }) => `${d.detail}, ${d.kelurahan}, ${$semiFullAddress}`);

</script>




<section class="flex gap-4 flex-col top-0">
    <h1 class="text-white text-4xl font-bold">Detail Order</h1>

    <section class="HEADER_CONTAINER flex justify-between">
        <a class="{button_ghost} font-semibold text-gray-600" href="{base}">Back</a>
        <button class="{button_ghost} font-semibold" on:click={() => print()}>Print</button>
    </section>

    <section class="PANE_CONTAINER">
        <section class="grid gap-4" style="grid-template-columns: 5fr 2fr;">
            <section class="LEFT_PANE p-8 bg-white rounded-md">
                <h2 class="text-2xl font-bold">BBB-01-{$data.order.order_id}</h2>
                <div class="pt-1 pb-2 text-gray-600 border-b border-gray-200">{$semiFullAddress}</div>

                <section class="grid grid-cols-2">
                    <div class="py-4 border-b border-gray-200">
                        <div class="text-gray-800 font-semibold">Sender Name</div>
                        <div class="text-gray-800">{$data.sender.name}</div>
                    </div>

                    <div class="py-4 border-b border-gray-200">
                        <div class="text-gray-800 font-semibold">Sender phone</div>
                        <div class="text-gray-800">{$data.sender.phone}</div>
                    </div>

                    <div class="py-4 border-b border-gray-200">
                        <div class="text-gray-800 font-semibold">Receiver phone</div>
                        <div class="text-gray-800">{$data.receiver.name}</div>
                    </div>

                    <div class="py-4 border-b border-gray-200">
                        <div class="text-gray-800 font-semibold">Receiver phone</div>
                        <div class="text-gray-800">{$data.receiver.phone}</div>
                    </div>

                    <div class="py-4 border-b border-gray-200">
                        <div class="text-gray-800 font-semibold">Status</div>
                        <div class="text-gray-800">In {$data.tracings.at(-1)?.status}</div>
                    </div>

                    <div class="py-4 border-b border-gray-200">
                        <div class="text-gray-800 font-semibold">Total Packages</div>
                        <div class="text-gray-800">{$data.packages.length}</div>
                    </div>

                    <div class="py-4 col-span-2">
                        <div class="text-gray-800 font-semibold">Full Address</div>
                        <!-- <div class="text-gray-800">RT 005 RW 001 Sendangguwo Selatan, Tembalang, Semarang, Jawa Tengah, 50173</div> -->
                        <div class="text-gray-800">{$fullAddress}</div>
                    </div>

                </section>
            </section>

            <section id="RIGHT_PANE">
                <section class="p-8 bg-white rounded-md">
                    <h2 class="mb-4 col-span-2 text-xl h-fill font-bold">Tracing</h2>
                    <section class="grid gap-2" style="grid-template-columns: 1fr 5fr;">
                        <section class="TIMELINE relative">
                            <svg class="w-full h-full fill-indigo-600 stroke-indigo-600" xmlns="http://www.w3.org/2000/svg">
                                {#each { length: $data.tracings.length + 1 } as _,i}
                                    {@const last = i == $data.tracings.length}
                                    {@const len = 38}
                                    {@const cr = 12}
                                    {@const height = cr * 2 + len}
                                    {@const gracefull_off = 4}
                                    {@const off = i * (height - gracefull_off)}
                                    {@const y1 = 12 * 2 + off}
                                    {@const y2 = 12 * 2 + len + off}
                                    <circle cx="20" class={last ? "fill-gray-400 stroke-gray-400" : "fill-indigo-600 stroke-indigo-600"} cy={cr + 4 + off} r={cr}/>
                                    {#if !last}
                                        <line x1="20" y1={y1} x2="20" y2={y2} style="stroke-width: 6;"/>
                                    {/if}
                                {/each}
                            </svg>
                        </section>
                        <section class="flex flex-col gap-4">
                            {#each $data.tracings as t}
                            <div>
                                <div class="font-bold">Order Created</div>
                                <div class="text-sm text-gray-600 ">{t.created_at.toLocaleTimeString()}, {t.created_at.toLocaleDateString()}</div>
                            </div>
                            {/each}
                            <!-- <div> -->
                            <!--     <div class="font-bold">Gateway Out: Driver Robin</div> -->
                            <!--     <div class="text-sm text-gray-600 ">14:40, 12 May 2024</div> -->
                            <!-- </div> -->
                            <!-- <div> -->
                            <!--     <div class="font-bold">Gateway In: Warehouse Litch</div> -->
                            <!--     <div class="text-sm text-gray-600 ">21:13, 12 May 2024</div> -->
                            <!-- </div> -->
                            <div>
                                <div class="text-gray-600">Will be picked soon...</div>
                                <div class="text-sm text-gray-600 "></div>
                            </div>
                        </section>
                    </section>
                </section>
            </section>

        </section>
    </section>
</section>




