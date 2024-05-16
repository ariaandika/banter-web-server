import type { Reroute } from "@sveltejs/kit";

export const reroute: Reroute = function({ url }) {
    if (url.pathname.startsWith("/sales")) {
        return url.pathname.replace("/sales","/stacked-layouts")
    }
}

