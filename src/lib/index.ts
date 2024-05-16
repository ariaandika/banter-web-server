import { twMerge } from "tailwind-merge"


export function cn(...cls: string[]) {
    return twMerge(cls);
}

